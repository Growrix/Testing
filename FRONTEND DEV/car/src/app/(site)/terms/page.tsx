import { Hero } from "@/components/site/hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  pathname: "/terms",
  description: "Terms and conditions for services, listing, and commerce template modules.",
});

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms and Conditions"
        subtitle="Legal"
        description="Service delivery, commerce, and booking terms for the Velocare template environment."
        image="/images/background/6.webp"
      />
      <section>
        <div className="container">
          <div className="p-4 rounded-1 bg-dark-2">
            <h4>Template Terms Baseline</h4>
            <p>
              These terms provide baseline frontend language only. Replace with finalized legal copy before launching a production deployment.
            </p>
            <ul className="ul-check">
              <li>Service appointments are requests until confirmed by operations.</li>
              <li>Commerce checkout captures intent until payment provider integration is configured.</li>
              <li>Listing information is illustrative and not a binding offer.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
