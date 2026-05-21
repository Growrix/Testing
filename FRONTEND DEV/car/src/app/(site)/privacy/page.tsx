import { Hero } from "@/components/site/hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  pathname: "/privacy",
  description: "Privacy policy for lead and commerce module interactions.",
});

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Legal"
        description="How user and form data is handled in this frontend template state."
        image="/images/background/4.webp"
      />
      <section>
        <div className="container">
          <div className="p-4 rounded-1 bg-dark-2">
            <h4>Data Handling</h4>
            <p>
              Form submissions currently return a not-configured delivery state. No external CRM, payment, or email provider is connected by default.
            </p>
            <ul className="ul-check">
              <li>Only client-side and route-handler validation is active.</li>
              <li>Production storage and retention policies must be defined per deployment.</li>
              <li>Third-party analytics remain optional and disabled unless configured.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
