import Image from "next/image";
import { Hero } from "@/components/site/hero";
import { team } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Team",
  pathname: "/team",
  description: "Meet the core Velocare crew behind detailing and delivery workflows.",
});

export default function TeamPage() {
  return (
    <>
      <Hero
        title="Meet Our Team"
        subtitle="People"
        description="Operators, technicians, and support specialists behind the Velocare template brand."
        image="/images/background/1.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            {team.map((member) => (
              <div className="col-lg-3 col-md-6" key={member.name}>
                <div className="rounded-1 bg-dark-2 overflow-hidden h-100 text-center p-3">
                  <Image src={member.image} alt={member.name} className="w-100 mb-3" width={640} height={640} />
                  <h4 className="mb-1">{member.name}</h4>
                  <p className="mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
