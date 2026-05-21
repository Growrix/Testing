import { Hero } from "@/components/site/hero";
import { LeadForm } from "@/components/forms/lead-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Appointment",
  pathname: "/appointment",
  description: "Appointment booking flow with required service, date, and time fields.",
});

export default function AppointmentPage() {
  return (
    <>
      <Hero
        title="Book Appointment"
        subtitle="Lead Generation"
        description="Appointment requests validate required service, date, and time details in native Next.js flows."
        image="/images/background/2.webp"
      />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded-1 bg-dark-2">
                <LeadForm kind="appointment" submitLabel="Submit Appointment" showServiceFields />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
