import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveNativePageFromSlug } from "@/lib/native-pages";

type LegacySlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: LegacySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = resolveNativePageFromSlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function LegacySlugPage({ params }: LegacySlugPageProps) {
  const { slug } = await params;
  const page = resolveNativePageFromSlug(slug);

  if (!page) {
    notFound();
  }

  const PageComponent = page.Component;
  return <PageComponent />;
}