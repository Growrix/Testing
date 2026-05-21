import { notFound } from "next/navigation";
import { vehicles } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/site/hero";
import { LeadForm } from "@/components/forms/lead-form";

type VehicleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((entry) => entry.slug === slug);

  if (!vehicle) {
    return createPageMetadata({
      title: "Vehicle Not Found",
      pathname: "/listing",
    });
  }

  return createPageMetadata({
    title: vehicle.title,
    description: vehicle.description,
    pathname: `/listing/${vehicle.slug}`,
  });
}

export default async function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = vehicles.find((entry) => entry.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <>
      <Hero
        title={vehicle.title}
        subtitle={vehicle.type}
        description={vehicle.description}
        image={vehicle.image}
      />

      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h3>Specifications</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="ul-check">
                    {vehicle.specsLeft.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="ul-check">
                    {vehicle.specsRight.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-4 rounded-1 bg-dark-2">
                <h4 className="mb-3">Send Listing Inquiry</h4>
                <LeadForm
                  kind="listing_inquiry"
                  submitLabel="Send Inquiry"
                  vehicle={vehicle.title}
                  defaults={{ service: "Listing Inquiry" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
