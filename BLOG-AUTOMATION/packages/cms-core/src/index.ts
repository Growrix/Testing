export interface PublishablePost {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
}

export interface CmsAdapter<TOutput> {
  name: string;
  map(post: PublishablePost): TOutput;
}