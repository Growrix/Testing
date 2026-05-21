import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site";
import { Hero } from "@/components/site/hero";
import { createPageMetadata } from "@/lib/metadata";
import { LeadForm } from "@/components/forms/lead-form";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return createPageMetadata({
      title: "Post Not Found",
      pathname: "/blog",
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.intro,
    pathname: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Hero
        title={post.title}
        subtitle={`${post.category} • ${post.date}`}
        description={post.intro}
        image={post.image}
      />
      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="p-4 rounded-1 bg-dark-2">
                <h4 className="mb-3">Comment or Ask a Question</h4>
                <LeadForm
                  kind="contact"
                  submitLabel="Post Comment"
                  defaults={{ message: `Comment regarding: ${post.title}` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
