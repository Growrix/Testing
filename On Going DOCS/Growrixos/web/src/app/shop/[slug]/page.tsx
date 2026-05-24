import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon, ShoppingBagIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Container, Section } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/Button";
import { PreviewableImageFrame } from "@/components/media/PreviewableImageFrame";
import { PortfolioGalleryLightbox } from "@/components/media/PortfolioGalleryLightbox";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Accordion } from "@/components/sections/Accordion";
import { ShopProductCard } from "@/components/shop/ShopProductCard";
import { ProductPreviewSurface } from "@/components/shop/ProductPreviewSurface";
import { SERVICES } from "@/lib/content";
import { getCheckoutHref } from "@/lib/shop";
import type { PublicShopProductRecord } from "@/server/domain/catalog";
import { getPublicShopProduct, listPublicShopProducts } from "@/server/domain/catalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const publicProducts = await listPublicShopProducts().catch(() => []);
  return publicProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getPublicShopProduct(slug).catch(() => null);
  if (!product) return {};
  return {
    title: `${product.name} — Shop`,
    description: product.summary,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 16 16"
          className={star <= Math.round(rating) ? "size-4 fill-amber-400" : "size-4 fill-border"}
          aria-hidden
        >
          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.35l-3.52 1.99.67-3.93L2.3 5.63l3.94-.57z" />
        </svg>
      ))}
    </span>
  );
}

function parseUsdPrice(value: string) {
  const parsed = Number(value.replace(/[^\d.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatUsdPrice(value: number) {
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

function getFallbackVariants(product: PublicShopProductRecord) {
  const basePrice = parseUsdPrice(product.price);
  const premiumPrice = basePrice > 0 ? formatUsdPrice(Math.round(basePrice * 1.4)) : product.price;
  const doneForYouPrice = basePrice > 0 ? formatUsdPrice(Math.round(basePrice * 2.3)) : product.price;
  const baseIncludes = product.includes.length > 0 ? product.includes.slice(0, 4) : ["Launch-ready pages", "Deployment handoff"];

  return [
    {
      slug: "standard",
      tier_name: "Standard" as const,
      title: `${product.name} Standard`,
      price: product.price,
      fulfillment_type: "digital_download" as const,
      includes: baseIncludes,
      comparison_points: ["Template package", "Setup guide", "Self-serve launch"],
      recommended: true,
    },
    {
      slug: "premium",
      tier_name: "Premium" as const,
      title: `${product.name} Premium`,
      price: premiumPrice,
      fulfillment_type: "hybrid_support" as const,
      includes: [...baseIncludes, "Priority support", "Implementation consultation"],
      comparison_points: ["Everything in Standard", "Priority support", "Implementation review"],
    },
    {
      slug: "done-for-you",
      tier_name: "Done-For-You" as const,
      title: `${product.name} Done-For-You`,
      price: doneForYouPrice,
      fulfillment_type: "done_for_you_service" as const,
      includes: ["Everything in Premium", "Full setup by Growrix", "Launch QA + handoff"],
      comparison_points: ["Everything in Premium", "Full setup by Growrix", "Launch QA + support"],
    },
  ];
}

function variantIncludesPoint(
  variant: NonNullable<PublicShopProductRecord["variants"]>[number],
  point: string,
) {
  const normalizedPoint = point.trim().toLowerCase();
  const points = [...(variant.comparison_points ?? []), ...variant.includes];
  return points.some((entry) => entry.trim().toLowerCase() === normalizedPoint);
}

export default async function ShopPreviewPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getPublicShopProduct(slug).catch(() => null);

  if (!product) notFound();

  const allProducts = await listPublicShopProducts();
  const explicitRelated = (product.related_product_slugs ?? [])
    .map((relatedSlug) => allProducts.find((item) => item.slug === relatedSlug))
    .filter((item): item is (typeof allProducts)[number] => item !== undefined)
    .filter((item) => item.slug !== product.slug);
  const related = (explicitRelated.length > 0
    ? explicitRelated
    : allProducts.filter((item) => item.slug !== product.slug)).slice(0, 3);

  const serviceMap = new Map<string, (typeof SERVICES)[number]>(SERVICES.map((service) => [service.slug, service]));
  const relatedServices = (product.related_service_slugs ?? [])
    .map((serviceSlug) => serviceMap.get(serviceSlug))
    .filter((service): service is (typeof SERVICES)[number] => service !== undefined);
  const displayRelatedServices = relatedServices.length > 0
    ? relatedServices
    : SERVICES.filter((service) => service.slug === "websites" || service.slug === "saas-applications");

  const features = product.features ?? [];
  const variants = product.variants && product.variants.length > 0 ? product.variants : getFallbackVariants(product);
  const recommendedVariant = variants.find((variant) => variant.recommended) ?? variants[0];
  const variantComparisonPoints = Array.from(
    new Set(variants.flatMap((variant) => [...(variant.comparison_points ?? []), ...variant.includes]))
  ).slice(0, 8);
  const faqs = product.faqs && product.faqs.length > 0
    ? product.faqs
    : [
        {
          question: "What happens after purchase?",
          answer: "You get immediate access to your package details and next-step instructions in checkout and follow-up email.",
        },
        {
          question: "Can this be customized for my business?",
          answer:
            "Yes. Choose the Done-For-You path or request a custom scope and we will tailor content, structure, and integrations to your offer.",
        },
        {
          question: "Do you support setup after delivery?",
          answer:
            "Standard includes documentation. Premium and Done-For-You tiers include guided or full-service implementation support.",
        },
      ];
  const inScope = product.inScope ?? [];
  const outOfScope = product.outOfScope ?? [];
  const enhancementPlan = product.enhancementPlan ?? [];
  const doneForYouVariant = variants.find((variant) => variant.tier_name === "Done-For-You");
  const customizationUpsells = product.customization_upsells && product.customization_upsells.length > 0
    ? product.customization_upsells
    : doneForYouVariant
      ? [
          {
            title: "Need a Done-For-You rollout?",
            description: "Let the Growrix team configure, launch, and quality-check this product for your business model.",
            cta_label: "Request Done-For-You Scope",
            cta_href: `/contact?intent=done-for-you&product=${encodeURIComponent(product.slug)}`,
          },
        ]
      : [];
  const shouldUseEmbeddedPreview = product.categorySlug === "html-business-profiles" && Boolean(product.embeddedPreviewUrl);
  const hasExternalPreview = Boolean(product.livePreviewUrl || product.embeddedPreviewUrl);
  const previewHref = shouldUseEmbeddedPreview
    ? product.embeddedPreviewUrl ?? product.livePreviewUrl ?? `/products/${product.slug}#preview`
    : product.livePreviewUrl ?? product.embeddedPreviewUrl ?? `/products/${product.slug}#preview`;
  const galleryImages = (product.gallery?.length ?? 0) > 0
    ? product.gallery ?? []
    : product.image
      ? [product.image]
      : [];
  const basePriceLabel = variants[0]?.price ?? product.price;

  return (
    <>
      {/* Main product layout */}
      <Section className="pb-10 pt-6 sm:pb-14 sm:pt-8">
        <Container>
          <Link href="/products" className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary">
            <ArrowLeftIcon className="size-4" /> Back to products
          </Link>

          <div className="grid min-w-0 gap-10 lg:grid-cols-[1fr_360px] lg:items-start xl:grid-cols-[1fr_380px]">

            {/* LEFT — preview + details */}
            <div className="min-w-0 space-y-8">
              {/* Product name (mobile only, shown above preview) */}
              <div className="lg:hidden">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {product.category} &middot; {product.type}
                </p>
                <h1 className="mt-2 font-display text-3xl font-bold tracking-tight">{product.name}</h1>
              </div>

              {/* Preview surface */}
              <div id="preview" className="min-w-0 overflow-hidden rounded-2xl border border-border">
                {shouldUseEmbeddedPreview || (!product.image && product.embeddedPreviewUrl) ? (
                  <div className="aspect-16/10 min-w-0 bg-black">
                    <iframe
                      src={product.embeddedPreviewUrl}
                      title={`${product.name} live preview`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : product.image ? (
                  <PreviewableImageFrame
                    src={product.image.src}
                    alt={product.image.alt}
                    sizes="(min-width: 1280px) 70vw, (min-width: 1024px) 60vw, 100vw"
                  />
                ) : (
                  <ProductPreviewSurface variant={product.previewVariant} />
                )}
              </div>

              {/* Template overview */}
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">Template overview</h2>
                <p className="mt-3 leading-7 text-text-muted">{product.teaser}</p>
                <p className="mt-3 leading-7 text-text-muted">{product.summary}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">At a glance</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight.label} className="rounded-2xl border border-border bg-inset/40 px-4 py-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">{highlight.label}</p>
                      <p className="mt-2 font-display text-lg font-semibold tracking-tight">{highlight.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier options */}
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">Choose your package</h2>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Pick Standard for self-serve launch, Premium for guided implementation, or Done-For-You when you want full rollout support.
                </p>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  {variants.map((variant) => (
                    <article
                      key={variant.slug}
                      className={`rounded-2xl border p-4 ${variant.recommended ? "border-primary bg-primary/5" : "border-border bg-inset/40"}`}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">{variant.tier_name}</p>
                      <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{variant.title}</h3>
                      <p className="mt-2 font-display text-2xl font-bold tracking-tight">{variant.price}</p>
                      <ul className="mt-3 space-y-2">
                        {variant.includes.slice(0, 5).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-text-muted">
                            <CheckIcon className="mt-1 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <LinkButton
                          href={getCheckoutHref(product, {
                            variantSlug: variant.slug,
                            tierName: variant.tier_name,
                            fulfillmentType: variant.fulfillment_type,
                          })}
                          variant={variant.recommended ? "primary" : "outline"}
                          size="sm"
                          fullWidth
                        >
                          Continue with {variant.tier_name}
                        </LinkButton>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Tier comparison */}
              {variantComparisonPoints.length > 0 ? (
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">Tier comparison</h2>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
                    <table className="min-w-full divide-y divide-border text-left text-sm">
                      <thead className="bg-inset/50 text-text-muted">
                        <tr>
                          <th className="px-4 py-3 font-medium">Capability</th>
                          {variants.map((variant) => (
                            <th key={variant.slug} className="px-4 py-3 font-medium">
                              {variant.tier_name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {variantComparisonPoints.map((point) => (
                          <tr key={point}>
                            <td className="px-4 py-3 text-text">{point}</td>
                            {variants.map((variant) => (
                              <td key={`${variant.slug}-${point}`} className="px-4 py-3 text-text-muted">
                                {variantIncludesPoint(variant, point) ? "Included" : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              {/* Key features */}
              {features.length > 0 ? (
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">Key features</h2>
                  <ul className="mt-4 space-y-2">
                    {features.map((item, index) => (
                      <li key={`${item}-${index}`} className="flex items-start gap-3 text-sm leading-6 text-text-muted">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* Includes */}
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">Files and delivery scope</h2>
                <ul className="mt-4 space-y-2">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-muted">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {(inScope.length > 0 || outOfScope.length > 0) ? (
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">Included and not included</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-inset/40 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Included in template price</p>
                      <ul className="mt-3 space-y-2">
                        {inScope.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-text-muted">
                            <CheckIcon className="mt-1 size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-border bg-inset/40 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Not included in template price</p>
                      <ul className="mt-3 space-y-2">
                        {outOfScope.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-text-muted">
                            <span className="mt-1 inline-block size-1.5 shrink-0 rounded-full bg-text-muted" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}

              {enhancementPlan.length > 0 ? (
                <div className="rounded-2xl border border-border bg-inset/40 p-5">
                  <h2 className="font-display text-xl font-semibold tracking-tight">Enhancement roadmap</h2>
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    If you want to scale beyond the base template, we can plan and estimate the next phase with your team.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {enhancementPlan.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-muted">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <LinkButton href="/contact" variant="outline" size="sm">
                      Discuss scaling plan <ArrowUpRightIcon className="size-4" />
                    </LinkButton>
                  </div>
                </div>
              ) : null}

              {/* Stack */}
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-inset/40 px-3 py-1.5 text-sm text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {customizationUpsells.length > 0 ? (
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">Customization and implementation</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {customizationUpsells.map((upsell) => (
                      <div key={`${upsell.title}-${upsell.cta_href}`} className="rounded-2xl border border-border bg-inset/40 p-4">
                        <h3 className="font-display text-lg font-semibold tracking-tight">{upsell.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-text-muted">{upsell.description}</p>
                        <div className="mt-4">
                          <LinkButton href={upsell.cta_href} variant="outline" size="sm">
                            {upsell.cta_label} <ArrowUpRightIcon className="size-4" />
                          </LinkButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {faqs.length > 0 ? (
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">Product FAQ</h2>
                  <Accordion items={faqs} className="mt-4 rounded-2xl border border-border px-4" />
                </div>
              ) : null}

              {displayRelatedServices.length > 0 ? (
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">Related services</h2>
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    Need help beyond the template itself? These services are the most common next steps.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {displayRelatedServices.map((service) => (
                      <LinkButton key={service.slug} href={`/services/${service.slug}`} variant="outline" size="sm">
                        {service.name}
                      </LinkButton>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* RIGHT — sticky purchase sidebar */}
            <aside className="min-w-0 space-y-4 lg:sticky lg:top-24">
              {/* Name + category (desktop) */}
              <div className="hidden lg:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {product.category} &middot; {product.type}
                </p>
                <h1 className="mt-2 font-display text-2xl font-bold leading-snug tracking-tight">{product.name}</h1>
              </div>

              {/* Rating row */}
              {product.rating ? (
                <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
                  <StarRating rating={product.rating} />
                  <span className="font-semibold text-text">{product.rating}</span>
                  {product.reviewCount ? <span>({product.reviewCount} reviews)</span> : null}
                  {product.salesCount ? (
                    <>
                      <span aria-hidden className="select-none">·</span>
                      <span>{product.salesCount} sales</span>
                    </>
                  ) : null}
                </div>
              ) : null}

              {/* Price */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Starting from</p>
                <p className="mt-1 font-display text-4xl font-bold tracking-tight">{basePriceLabel}</p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <LinkButton
                  href={getCheckoutHref(product, {
                    variantSlug: recommendedVariant.slug,
                    tierName: recommendedVariant.tier_name,
                    fulfillmentType: recommendedVariant.fulfillment_type,
                  })}
                  size="lg"
                  fullWidth
                >
                  <ShoppingBagIcon className="size-5" /> Start with {recommendedVariant.tier_name}
                </LinkButton>
                <LinkButton
                  href={previewHref}
                  variant="outline"
                  size="lg"
                  fullWidth
                  target={hasExternalPreview ? "_blank" : undefined}
                  rel={hasExternalPreview ? "noreferrer" : undefined}
                >
                  Live Preview <ArrowUpRightIcon className="size-4" />
                </LinkButton>
              </div>

              {variants.length > 1 ? (
                <div className="rounded-2xl border border-border bg-inset/40 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Quick tier links</p>
                  <div className="mt-3 space-y-2">
                    {variants.map((variant) => (
                      <Link
                        key={variant.slug}
                        href={getCheckoutHref(product, {
                          variantSlug: variant.slug,
                          tierName: variant.tier_name,
                          fulfillmentType: variant.fulfillment_type,
                        })}
                        className="flex items-center justify-between rounded-xl border border-border px-3 py-2 text-sm hover:border-primary/60 hover:bg-primary/5"
                      >
                        <span>{variant.tier_name}</span>
                        <span className="font-medium text-text-muted">{variant.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <hr className="border-border" />

              {/* Meta table */}
              <dl className="space-y-2 text-sm">
                {[
                  { label: "Category", value: product.category },
                  { label: "Type", value: product.type },
                  { label: "Industry", value: product.industry },
                ].map((row) => (
                  <div key={row.label} className="flex min-w-0 items-start justify-between gap-4">
                    <dt className="shrink-0 font-medium text-text-muted">{row.label}</dt>
                    <dd className="min-w-0 flex-1 wrap-anywhere text-right text-text">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <hr className="border-border" />

              {/* Ideal for */}
              <div className="rounded-2xl border border-border bg-inset/40 p-4 text-sm leading-6 text-text-muted">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Ideal for</p>
                <p className="mt-2">{product.audience}</p>
              </div>

              {/* Talk to us */}
              <div className="text-center">
                <LinkButton
                  href="/book-appointment"
                  variant="ghost"
                  size="sm"
                  fullWidth
                  className="h-auto whitespace-normal px-4 py-2.5 leading-5"
                >
                  Need flexible payment or a custom fit? Talk to us first
                </LinkButton>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Screenshot gallery */}
      {galleryImages.length > 0 ? (
        <Section>
          <Container>
            <SectionHeading eyebrow="Template gallery" title="Surfaces from the template." />
            <PortfolioGalleryLightbox images={galleryImages} />
          </Container>
        </Section>
      ) : null}

      {/* Related products */}
      {related.length > 0 ? (
        <Section className="border-t border-border py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold tracking-tight">More in the catalog</h2>
            <p className="mt-2 text-sm text-text-muted">
              Browse more published products from the live catalog.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ShopProductCard key={item.slug} product={item} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
