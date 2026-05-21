import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div id="wrapper" className="dark-scheme">
      <a href="#top" id="back-to-top" aria-label="Back to top" />
      <div id="top" />
      <SiteHeader />
      <main className="no-bottom no-top" id="content">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
