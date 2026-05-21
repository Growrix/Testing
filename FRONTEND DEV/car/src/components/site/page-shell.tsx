import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

type PageShellProps = {
  children: ReactNode;
};

/**
 * Mirrors the baseline `Car-subdomain/public/index.html` shell exactly:
 *  body.dark-scheme
 *   └─ #wrapper
 *      ├─ a#back-to-top
 *      ├─ #de-loader              (preloader element used by designesia.js)
 *      ├─ header.transparent
 *      ├─ #content
 *      │   └─ #top                (in-page top anchor)
 *      │   └─ {children}
 *      └─ footer
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div id="wrapper">
      <a href="#" id="back-to-top" aria-label="Back to top" />

      {/* preloader begin */}
      <div id="de-loader" />
      {/* preloader end */}

      <SiteHeader />

      {/* content begin */}
      <div className="no-bottom no-top" id="content">
        <div id="top" />
        {children}
      </div>
      {/* content end */}

      <SiteFooter />
    </div>
  );
}
