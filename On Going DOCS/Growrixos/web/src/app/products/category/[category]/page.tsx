import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function ProductsCategoryPage({ params }: PageProps) {
  const { category } = await params;
  redirect(`/products?category=${encodeURIComponent(category)}`);
}
