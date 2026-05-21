import { Hero } from "@/components/site/hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  pathname: "/about",
  description: "About Velocare Auto Studio and the production template mission.",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Velocare"
        subtitle="Company"
        description="Velocare combines premium detailing craft with structured frontend flow ownership for scalable delivery."
        image="/images/background/5.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h3>Mission</h3>
              <p>
                Deliver trusted detailing outcomes with transparent processes, practical maintenance guidance, and measurable quality checks.
              </p>
            </div>
            <div className="col-lg-6">
              <h3>What This Template Proves</h3>
              <p>
                A screenshot-replicated site can keep visual parity while moving to native Next.js route ownership, typed data, and truthful frontend contracts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
