import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AboutMePage,
  AboutUsPage,
  AppointmentPage,
  BlogPage,
  CalculatorPage,
  CareerPage,
  ContactPage,
  LocationPage,
  PartnerPage,
  PortfolioPage,
  PricingPage,
  ServicesPage,
  TeamPage,
  TestimonialsPage,
} from "@/components/site-components";
import { getTopLevelPage, topLevelPageSlugs } from "@/data/site";

export async function generateStaticParams() {
  return topLevelPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getTopLevelPage(slug);
  if (!page) {
    return {};
  }
  return {
    title: `${page.label} | CoolPeak Aircon`,
    description: page.description,
  };
}

export default async function TopLevelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getTopLevelPage(slug);

  if (!page) {
    notFound();
  }

  switch (page.kind) {
    case "about-us":
      return <AboutUsPage />;
    case "about-me":
      return <AboutMePage />;
    case "team-01":
      return <TeamPage variant="grid" />;
    case "team-02":
      return <TeamPage variant="circle" />;
    case "testimonials":
      return <TestimonialsPage />;
    case "pricing":
      return <PricingPage />;
    case "calculator":
      return <CalculatorPage />;
    case "partner":
      return <PartnerPage />;
    case "location":
      return <LocationPage />;
    case "career":
      return <CareerPage />;
    case "contact":
      return <ContactPage />;
    case "appointment":
      return <AppointmentPage />;
    case "services":
      return <ServicesPage />;
    case "portfolio":
      return <PortfolioPage />;
    case "blog":
      return <BlogPage />;
    default:
      notFound();
  }
}
