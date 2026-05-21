import { Hero } from "@/components/site/hero";
import { LeadForm } from "@/components/forms/lead-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  pathname: "/contact",
  description: "Lead generation contact route with validation and truthful integration state.",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Velocare"
        subtitle="Lead Generation"
        description="Contact flow submits through native Next.js route handlers with validation and not-configured delivery state."
        image="/images/background/4.webp"
      />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded-1 bg-dark-2">
                <LeadForm kind="contact" submitLabel="Send Message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
