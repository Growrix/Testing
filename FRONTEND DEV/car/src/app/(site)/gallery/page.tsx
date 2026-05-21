import Image from "next/image";
import { Hero } from "@/components/site/hero";
import { galleryItems } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Gallery",
  pathname: "/gallery",
  description: "Exterior, interior, and facility gallery for visual parity and portfolio coverage.",
});

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Studio Gallery"
        subtitle="Visual Portfolio"
        description="A unified gallery route replaces fragmented legacy gallery variants."
        image="/images/background/8.webp"
      />
      <section>
        <div className="container">
          <div className="row g-4">
            {galleryItems.map((item) => (
              <div className="col-lg-3 col-md-4 col-6" key={item.src}>
                <div className="d-block hover relative overflow-hidden text-light rounded-1">
                  <Image src={item.src} className="w-100 hover-scale-1-1" alt={item.alt} width={600} height={600} />
                  <div className="abs p-3 bottom-0 w-100">
                    <small>{item.category}</small>
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
