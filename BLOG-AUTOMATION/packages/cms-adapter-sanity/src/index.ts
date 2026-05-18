import type { CmsAdapter, PublishablePost } from "@blog-automation/cms-core";

export interface SanityDocument {
  _type: "post";
  title: string;
  slug: { _type: "slug"; current: string };
  excerpt: string;
  publishedAt: string;
}

const sanityAdapter: CmsAdapter<SanityDocument> = {
  name: "sanity",
  map(post: PublishablePost) {
    return {
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      publishedAt: post.publishedAt
    };
  }
};

export function mapToSanityDocument(post: PublishablePost): SanityDocument {
  return sanityAdapter.map(post);
}