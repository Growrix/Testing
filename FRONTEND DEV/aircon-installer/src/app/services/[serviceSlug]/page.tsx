import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/site-components";
import { getService, services } from "@/data/site";

export async function generateStaticParams() {
  return services.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) {
    return {};
  }
  return {
    title: `${service.title} | CoolPeak Aircon`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) {
    notFound();
  }
  return <ServiceDetailPage service={service} />;
}
