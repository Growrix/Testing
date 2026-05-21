import { BlogCards } from "@/components/site/blog-cards";
import { Hero } from "@/components/site/hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  pathname: "/blog",
  description: "Content module with native list and slug routes.",
});

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Detailing Blog"
        subtitle="Content Module"
        description="Guides, maintenance tips, and studio insights with native App Router ownership."
        image="/images/background/14.webp"
      />
      <section>
        <div className="container">
          <BlogCards />
        </div>
      </section>
    </>
  );
}
