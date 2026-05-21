import { Hero } from "@/components/site/hero";
import { VehicleCards } from "@/components/site/vehicle-cards";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Vehicle Listing",
  pathname: "/listing",
  description: "Browse the inventory listing module with type filtering and native detail routes.",
});

type ListingPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

export default async function ListingPage({ searchParams }: ListingPageProps) {
  const query = await searchParams;
  const type = firstValue(query.type)?.toLowerCase() ?? "";
  const heading = type ? `Vehicle Listing - ${type.replace(/-/g, " ")}` : "Vehicle Listing";

  return (
    <>
      <Hero
        title={heading}
        subtitle="Inventory Module"
        description="Native route and filtering contract without query-driven DOM mutation."
        image="/images/background/7.webp"
      />
      <section>
        <div className="container">
          <VehicleCards type={type || undefined} />
        </div>
      </section>
    </>
  );
}
