import { ServiceCards } from "@/components/site/service-cards";
import { Hero } from "@/components/site/hero";
import { CtaStrip } from "@/components/site/cta-strip";
import { createPageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata = createPageMetadata({
  title: "Services",
  pathname: "/services",
  description: "Browse detailing services including wash, correction, coating, and restoration workflows.",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Professional Detailing Services"
        subtitle="Service Modules"
        description="Each service route is backed by typed data and native Next.js ownership."
        image="/images/background/5.webp"
        cta={{ label: "Book Appointment", href: routes.appointment }}
      />
      <section>
        <div className="container">
          <ServiceCards />
        </div>
      </section>
      <CtaStrip
        title="Need a custom detailing plan?"
        description="Use our contact or quote flow to request fleet, recurring, or specialty detailing packages."
        button={{ label: "Request Quote", href: routes.contact }}
      />
    </>
  );
}
