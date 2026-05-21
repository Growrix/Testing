import { Hero } from "@/components/site/hero";
import { LeadForm } from "@/components/forms/lead-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Careers",
  pathname: "/careers",
  description: "Career interest flow with validated submission contract.",
});

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Careers"
        subtitle="Join The Team"
        description="Apply for detailing and operations roles using the native form contract."
        image="/images/background/11.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="p-4 rounded-1 bg-dark-2 h-100">
                <h4>Open Roles</h4>
                <ul className="ul-check">
                  <li>Senior Detail Technician</li>
                  <li>Paint Correction Specialist</li>
                  <li>Client Experience Coordinator</li>
                  <li>Fleet Service Scheduler</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 rounded-1 bg-dark-2 h-100">
                <h4>Apply Now</h4>
                <LeadForm kind="career" submitLabel="Submit Application" defaults={{ message: "I am interested in joining the Velocare team." }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
