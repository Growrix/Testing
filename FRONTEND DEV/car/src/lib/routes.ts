export const routes = {
  home: "/",
  routeIndex: "/routes",
  services: "/services",
  serviceDetail: (slug: string) => `/services/${slug}`,
  faq: "/faq",
  about: "/about",
  gallery: "/gallery",
  blog: "/blog",
  blogDetail: (slug: string) => `/blog/${slug}`,
  team: "/team",
  careers: "/careers",
  testimonials: "/testimonials",
  shop: "/shop",
  wishlist: "/shop/wishlist",
  cart: "/shop/cart",
  checkout: "/shop/checkout",
  checkoutSuccess: "/shop/checkout/success",
  productDetail: (slug: string) => `/shop/${slug}`,
  listing: "/listing",
  listingByType: (type: string) => `/listing?type=${encodeURIComponent(type)}`,
  listingDetail: (slug: string) => `/listing/${slug}`,
  locations: "/locations",
  contact: "/contact",
  appointment: "/appointment",
  privacy: "/privacy",
  terms: "/terms",
  support: "/support",
  returns: "/returns",
  shipping: "/shipping",
  account: "/account",
} as const;

export const legacyRedirectMap: Record<string, string> = {
  "index.html": routes.home,
  "homepage-2.html": routes.home,
  "homepage-3.html": routes.home,
  "homepage-4.html": routes.home,
  "homepage-5.html": routes.home,
  "homepage-6.html": routes.home,
  "homepage-7.html": routes.home,
  "homepage-8.html": routes.home,
  "services.html": routes.services,
  "services-2.html": routes.services,
  "services-3.html": routes.services,
  "service-single.html": routes.serviceDetail("ceramic-coating-protection"),
  "faq.html": routes.faq,
  "about.html": routes.about,
  "gallery.html": routes.gallery,
  "gallery-carousel.html": routes.gallery,
  "gallery-slider.html": routes.gallery,
  "blog.html": routes.blog,
  "blog-single.html": routes.blogDetail("ceramic-coating-benefits-what-every-car-owner-should-know"),
  "team.html": routes.team,
  "careers.html": routes.careers,
  "testimonials.html": routes.testimonials,
  "shop.html": routes.shop,
  "shop-product-single.html": routes.productDetail("premium-microfiber-cleaning-towel"),
  "car-listing.html": routes.listing,
  "car-list.html": routes.listing,
  "car-single.html": routes.listingDetail("bmw-x5"),
  "locations.html": routes.locations,
  "contact.html": routes.contact,
  "appointment.html": routes.appointment,
  "terms.html": routes.terms,
  "privacy.html": routes.privacy,
};

export function normalizeLegacySlug(slug: string) {
  const value = decodeURIComponent(slug || "").trim().toLowerCase();
  return value;
}

export function resolveLegacyRedirect(slug: string) {
  const normalized = normalizeLegacySlug(slug);
  return legacyRedirectMap[normalized] ?? null;
}
