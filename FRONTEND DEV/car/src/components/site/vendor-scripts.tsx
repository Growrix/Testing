"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    jQuery?: unknown;
    $?: unknown;
    WOW?: new () => { init: () => void };
    Swiper?: unknown;
    jarallax?: unknown;
  }
}

/**
 * VendorScripts mirrors the script contract from the Car-subdomain baseline
 * (pixel-perfect SOT). Scripts must load in the exact order used by the
 * baseline index.html so that jQuery → plugins → designesia → phase2-flows →
 * swiper → custom-swiper init in dependency order.
 *
 * It also re-runs the most critical re-initializers on client-side route
 * changes so animations and the slider keep working when navigating between
 * App Router pages.
 */
export function VendorScripts() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    // Re-initialize visual runtimes on client-side navigation.
    if (typeof window === "undefined") return;

    try {
      if (typeof window.WOW === "function") {
        new window.WOW().init();
      }
    } catch {
      // ignore
    }

    try {
      const w = window as unknown as {
        jQuery?: (selector: string) => { jarallax?: () => void };
      };
      if (typeof w.jQuery === "function") {
        const $jarallax = w.jQuery(".jarallax");
        $jarallax?.jarallax?.();
      }
    } catch {
      // ignore
    }

    try {
      const SwiperCtor = window.Swiper as
        | (new (selector: string, opts: Record<string, unknown>) => unknown)
        | undefined;
      if (typeof SwiperCtor === "function" && document.querySelector(".swiper")) {
        new SwiperCtor(".swiper", {
          autoplay: { delay: 3000, disableOnInteraction: false },
          effect: "slide",
          slidesPerView: 1,
          loop: true,
          speed: 1200,
          mousewheel: false,
          watchSlidesProgress: true,
          parallax: true,
          spaceBetween: -1,
          pagination: { el: ".swiper-pagination", type: "fraction" },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }
    } catch {
      // ignore
    }
  }, [pathname]);

  return (
    <>
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/designesia.js" strategy="afterInteractive" />
      <Script src="/js/phase2-flows.js" strategy="afterInteractive" />
      <Script src="/js/swiper.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper-3.js" strategy="afterInteractive" />
      <Script src="/js/jquery.event.move.js" strategy="afterInteractive" />
      <Script src="/js/jquery.twentytwenty.js" strategy="afterInteractive" />
    </>
  );
}
