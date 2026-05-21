import Image from "next/image";
import { Hero } from "@/components/site/hero";
import { testimonials } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Testimonials",
  pathname: "/testimonials",
  description: "Customer testimonials for service and fleet operations.",
});

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        title="Client Testimonials"
        subtitle="Social Proof"
        description="Feedback from detailing clients, recurring fleet operators, and vehicle owners."
        image="/images/background/9.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-lg-4" key={item.name}>
                <div className="p-4 rounded-1 bg-dark-2 h-100">
                  <p>{item.quote}</p>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <Image src={item.image} alt={item.name} className="rounded-circle" width={52} height={52} />
                    <div>
                      <h5 className="mb-0">{item.name}</h5>
                      <small>{item.role}</small>
                    </div>
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
