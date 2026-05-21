import { notFound } from "next/navigation";
import { services } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { Hero } from "@/components/site/hero";
import { CtaStrip } from "@/components/site/cta-strip";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      pathname: "/services",
    });
  }

  return createPageMetadata({
    title: service.subtitle,
    description: service.description,
    pathname: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        image={service.heroImage}
        cta={{ label: "Book This Service", href: routes.appointment }}
      />

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h3>What&apos;s Included</h3>
              <ul className="ul-check">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Benefits</h3>
              <ul className="ul-check">
                {service.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Ideal For</h3>
              <ul className="ul-check">
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to schedule this service?"
        description="Appointments are frontend-ready and validated. Delivery integration can be attached when provider details are available."
        button={{ label: "Schedule Appointment", href: routes.appointment }}
      />
    </>
  );
}
