/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import type { PageKey } from "@/data/site-content";
import { sitePages } from "@/data/site-content";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SectionRenderer } from "@/components/site/section-renderer";

type SitePageViewProps = {
  pageKey: PageKey;
};

export function SitePageView({ pageKey }: SitePageViewProps) {
  const page = sitePages[pageKey];

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-background">
      <SiteHeader />

      <main className="pb-10">
        <section className="relative isolate overflow-hidden">
          <img
            src={page.heroImage}
            alt={page.title}
            className="h-107.5 w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/60" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-(--lumoria-container-max-width) px-6 pb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {page.eyebrow}
              </p>
              <h1 className="mt-3 max-w-4xl font-(family-name:--lumoria-font-heading) text-4xl font-semibold leading-tight text-white md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                {page.description}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-12 grid w-full max-w-(--lumoria-container-max-width) gap-10 px-6">
          {page.sections.map((section, index) => (
            <SectionRenderer key={`${page.key}-section-${index}`} section={section} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
