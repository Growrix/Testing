"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { runPhase2Flows } from "@/lib/phase2-flows";

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

export function LegacyRuntime() {
  const pathname = usePathname();

  useEffect(() => {
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
  }, [pathname]);

  return (
    <>
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/designesia.js" strategy="afterInteractive" />
      <Script src="/js/swiper.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper-1.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper-2.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper-3.js" strategy="afterInteractive" />
      <Script src="/js/jquery.event.move.js" strategy="afterInteractive" />
      <Script src="/js/jquery.twentytwenty.js" strategy="afterInteractive" />
      <Script src="/js/validation-contact.js" strategy="afterInteractive" />
      <Script src="/js/validation-booking.js" strategy="afterInteractive" />
    </>
  );
}