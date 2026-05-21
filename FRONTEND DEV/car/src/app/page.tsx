import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveNativePageFromSlug } from "@/lib/native-pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = resolveNativePageFromSlug();

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page() {
  const page = resolveNativePageFromSlug();

  if (!page) {
    notFound();
  }

  const PageComponent = page.Component;
  return <PageComponent />;
}
