"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { runPhase2Flows } from "@/lib/phase2-flows";

const LEGACY_RUNTIME_SCRIPTS = [
  "/js/plugins.js",
  "/js/designesia.js",
  "/js/swiper.js",
  "/js/custom-swiper-1.js",
  "/js/custom-swiper-2.js",
  "/js/custom-swiper-3.js",
  "/js/jquery.event.move.js",
  "/js/jquery.twentytwenty.js",
  "/js/validation-contact.js",
  "/js/validation-booking.js",
] as const;

const loadedScriptSources = new Set<string>();
const loadingScriptPromises = new Map<string, Promise<void>>();

type JQueryLike = {
  fn?: {
    twentytwenty?: (config: Record<string, unknown>) => void;
  };
  (selector: string): {
    twentytwenty?: (config: Record<string, unknown>) => void;
  };
};

function runTwentyTwentyInit() {
  const jquery = (window as Window & { jQuery?: JQueryLike }).jQuery;
  if (!jquery?.fn?.twentytwenty) {
    return false;
  }

  jquery(".twentytwenty-container[data-orientation!='vertical']").twentytwenty?.({
    default_offset_pct: 0.5,
  });
  jquery(".twentytwenty-container[data-orientation='vertical']").twentytwenty?.({
    default_offset_pct: 0.5,
    orientation: "vertical",
  });

  return true;
}

function loadScriptOnce(src: string): Promise<void> {
  if (loadedScriptSources.has(src)) {
    return Promise.resolve();
  }

  const inFlight = loadingScriptPromises.get(src);
  if (inFlight) {
    return inFlight;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-legacy-runtime-src="${src}"]`,
    );

    if (existingScript?.dataset.loaded === "true") {
      loadedScriptSources.add(src);
      resolve();
      return;
    }

    const script = existingScript ?? document.createElement("script");

    const handleLoad = () => {
      script.dataset.loaded = "true";
      loadedScriptSources.add(src);
      loadingScriptPromises.delete(src);
      resolve();
    };

    const handleError = () => {
      loadingScriptPromises.delete(src);
      reject(new Error(`Failed to load runtime script: ${src}`));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      script.src = src;
      script.async = false;
      script.dataset.legacyRuntimeSrc = src;
      script.dataset.loaded = "false";
      document.body.appendChild(script);
    }
  });

  loadingScriptPromises.set(src, promise);
  return promise;
}

export function LegacyRuntime() {
  const pathname = usePathname();
  const [scriptsReady, setScriptsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const bootstrapScripts = async () => {
      try {
        for (const src of LEGACY_RUNTIME_SCRIPTS) {
          if (cancelled) {
            return;
          }

          await loadScriptOnce(src);
        }

        if (!cancelled) {
          setScriptsReady(true);
        }
      } catch (error) {
        console.error("Legacy runtime bootstrap failed", error);
      }
    };

    void bootstrapScripts();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!scriptsReady) {
      return;
    }

    runPhase2Flows();

    let attempts = 0;
    const maxAttempts = 10;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const attemptInit = () => {
      const initialized = runTwentyTwentyInit();
      if (initialized || attempts >= maxAttempts) {
        return;
      }
      attempts += 1;
      timerId = setTimeout(attemptInit, 150);
    };

    attemptInit();

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [pathname, scriptsReady]);

  return null;
}