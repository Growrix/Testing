import Link from "next/link";

export const metadata = {
  title: "Privacy policy | CoolPeak Aircon",
  description: "Privacy policy for CoolPeak Aircon website enquiries and callback requests.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section section--soft">
      <div className="container legal-layout">
        <p className="page-intro__breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>Privacy policy</strong>
        </p>
        <article>
          <h1>Privacy policy</h1>
          <p>
            CoolPeak Aircon only collects the details needed to respond to enquiries, schedule appointments, and provide service-related follow-up.
          </p>
          <p>
            Information submitted through contact and appointment forms may include your name, phone number, email, suburb, and project notes. That information is used only for service communication and internal scheduling.
          </p>
          <p>
            We do not sell submitted information to third parties. If external tools are attached later for analytics or notifications, this policy will be updated before those tools become active.
          </p>
        </article>
      </div>
    </section>
  );
}