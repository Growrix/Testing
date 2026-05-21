import { page as AboutPage } from "@/components/pages/native/about";
import { page as AppointmentPage } from "@/components/pages/native/appointment";
import { page as BlogSinglePage } from "@/components/pages/native/blog-single";
import { page as BlogPage } from "@/components/pages/native/blog";
import { page as CarListPage } from "@/components/pages/native/car-list";
import { page as CarListingPage } from "@/components/pages/native/car-listing";
import { page as CarSinglePage } from "@/components/pages/native/car-single";
import { page as CareersPage } from "@/components/pages/native/careers";
import { page as ContactPage } from "@/components/pages/native/contact";
import { page as FaqPage } from "@/components/pages/native/faq";
import { page as GalleryCarouselPage } from "@/components/pages/native/gallery-carousel";
import { page as GallerySliderPage } from "@/components/pages/native/gallery-slider";
import { page as GalleryPage } from "@/components/pages/native/gallery";
import { page as Homepage2Page } from "@/components/pages/native/homepage-2";
import { page as Homepage3Page } from "@/components/pages/native/homepage-3";
import { page as Homepage4Page } from "@/components/pages/native/homepage-4";
import { page as Homepage5Page } from "@/components/pages/native/homepage-5";
import { page as Homepage6Page } from "@/components/pages/native/homepage-6";
import { page as Homepage7Page } from "@/components/pages/native/homepage-7";
import { page as Homepage8Page } from "@/components/pages/native/homepage-8";
import { page as IndexPage } from "@/components/pages/native/index";
import { page as LocationsPage } from "@/components/pages/native/locations";
import { page as PrivacyPage } from "@/components/pages/native/privacy";
import { page as ServiceSinglePage } from "@/components/pages/native/service-single";
import { page as Services2Page } from "@/components/pages/native/services-2";
import { page as Services3Page } from "@/components/pages/native/services-3";
import { page as ServicesPage } from "@/components/pages/native/services";
import { page as ShopProductSinglePage } from "@/components/pages/native/shop-product-single";
import { page as ShopPage } from "@/components/pages/native/shop";
import { page as TeamPage } from "@/components/pages/native/team";
import { page as TermsPage } from "@/components/pages/native/terms";
import { page as TestimonialsPage } from "@/components/pages/native/testimonials";

import type { NativePageDefinition } from "@/lib/native-page-types";

const HTML_FILE_PATTERN = /^[a-z0-9-]+\.html$/i;

const pages = [
  AboutPage,
  AppointmentPage,
  BlogSinglePage,
  BlogPage,
  CarListPage,
  CarListingPage,
  CarSinglePage,
  CareersPage,
  ContactPage,
  FaqPage,
  GalleryCarouselPage,
  GallerySliderPage,
  GalleryPage,
  Homepage2Page,
  Homepage3Page,
  Homepage4Page,
  Homepage5Page,
  Homepage6Page,
  Homepage7Page,
  Homepage8Page,
  IndexPage,
  LocationsPage,
  PrivacyPage,
  ServiceSinglePage,
  Services2Page,
  Services3Page,
  ServicesPage,
  ShopProductSinglePage,
  ShopPage,
  TeamPage,
  TermsPage,
  TestimonialsPage,
] as const satisfies readonly NativePageDefinition[];

const pageByFileName = new Map<string, NativePageDefinition>(
  pages.map((page) => [page.fileName, page]),
);

function decodeSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

function normalizeLegacyFileName(slug?: string) {
  if (!slug) {
    return "index.html";
  }

  const decoded = decodeSlug(slug).toLowerCase().trim();
  if (decoded === "index") {
    return "index.html";
  }

  if (!decoded.endsWith(".html")) {
    return null;
  }

  if (!HTML_FILE_PATTERN.test(decoded)) {
    return null;
  }

  return decoded;
}

export function resolveNativePageFromSlug(slug?: string) {
  const fileName = normalizeLegacyFileName(slug);
  if (!fileName) {
    return null;
  }

  return pageByFileName.get(fileName) ?? null;
}

export const nativePages = pages;
