import { Hero } from "@/components/site/hero";
import { faqs } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FAQ",
  pathname: "/faq",
  description: "Frequently asked questions for services, booking, and template flow behavior.",
});

export default function FaqPage() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Support"
        description="Service, booking, and commerce module clarifications."
        image="/images/background/3.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            {faqs.map((entry) => (
              <div className="col-lg-6" key={entry.question}>
                <div className="p-4 rounded-1 bg-dark-2 h-100">
                  <h4>{entry.question}</h4>
                  <p className="mb-0">{entry.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
