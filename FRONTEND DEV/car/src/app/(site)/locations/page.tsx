import Image from "next/image";
import { Hero } from "@/components/site/hero";
import { locations } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Locations",
  pathname: "/locations",
  description: "Service locations and contact channels for Velocare operations.",
});

export default function LocationsPage() {
  return (
    <>
      <Hero
        title="Our Locations"
        subtitle="Workshop"
        description="Visit a nearby branch for service drop-off, inspection, or consultation."
        image="/images/background/10.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            {locations.map((location) => (
              <div className="col-lg-4" key={location.name}>
                <div className="rounded-1 bg-dark-2 overflow-hidden h-100">
                  <Image src={location.image} alt={location.name} className="w-100" width={900} height={600} />
                  <div className="p-4">
                    <h4>{location.name}</h4>
                    <p className="mb-2">{location.address}</p>
                    <p className="mb-2">{location.phone}</p>
                    <p className="mb-2">{location.email}</p>
                    <small>{location.hours}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
