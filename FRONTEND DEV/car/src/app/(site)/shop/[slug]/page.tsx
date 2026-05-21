import { notFound } from "next/navigation";
import { products } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/site/hero";
import { ProductDetailPanel } from "@/components/commerce/product-detail-panel";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    return createPageMetadata({
      title: "Product Not Found",
      pathname: "/shop",
    });
  }

  return createPageMetadata({
    title: product.name,
    description: product.description,
    pathname: `/shop/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((entry) => entry.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Hero
        title={product.name}
        subtitle="Product Detail"
        description={product.description}
        image="/images/background/8.webp"
      />
      <ProductDetailPanel product={product} />
    </>
  );
}
