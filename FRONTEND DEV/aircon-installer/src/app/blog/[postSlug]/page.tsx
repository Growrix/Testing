import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/components/site-components";
import { blogPosts, getBlogPost } from "@/data/site";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}): Promise<Metadata> {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | CoolPeak Aircon`,
    description: post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const { postSlug } = await params;
  const post = getBlogPost(postSlug);
  if (!post) {
    notFound();
  }
  return <BlogDetailPage post={post} />;
}
