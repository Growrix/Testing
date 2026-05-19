import Link from "next/link";

export const metadata = {
  title: "Terms | CoolPeak Aircon",
  description: "Terms covering enquiry use, indicative estimates, and site content for CoolPeak Aircon.",
};

export default function TermsPage() {
  return (
    <section className="section section--soft">
      <div className="container legal-layout">
        <p className="page-intro__breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>Terms</strong>
        </p>
        <article>
          <h1>Terms</h1>
          <p>
            Content on this site is provided for general information and indicative planning only. Costing calculators, pricing cards, and blog guidance do not replace a site-specific quote.
          </p>
          <p>
            Appointment requests and contact messages do not create a binding service contract until CoolPeak Aircon confirms scope, timing, and availability directly.
          </p>
          <p>
            Site copy, design, and assets are project-owned presentation materials for CoolPeak Aircon and may not be reused without permission.
          </p>
        </article>
      </div>
    </section>
  );
}