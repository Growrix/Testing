import Link from "next/link";
import Image from "next/image";
import { galleryItems, testimonials, vehicles } from "@/data/site";
import { routes } from "@/lib/routes";
import { ProductCards } from "@/components/site/product-cards";
import { ServiceCards } from "@/components/site/service-cards";
import { BlogCards } from "@/components/site/blog-cards";

export function HomeParityContent() {
  return (
    <>
      <section className="text-light no-top no-bottom relative overflow-hidden">
        <div className="mh-700">
          <div className="abs w-100 bottom-0 z-2 pb-4">
            <div className="container">
              <div className="row g-4 justify-content-between align-items-bottom">
                <div className="col-lg-8">
                  <div className="subtitle wow fadeInUp">Car Detailing Service</div>
                  <h1 className="fs-72 fs-xs-10vw text-uppercase wow fadeInUp">
                    The Ultimate <span className="id-color">Car Detailing</span> Service
                  </h1>
                </div>
                <div className="col-lg-3">
                  <div className="spacer-double" />
                  <p className="mb-0 wow fadeInUp" data-wow-delay=".2s">
                    At Velocare Auto Studio, we deliver reliable, efficient detailing for personal cars and fleets, restoring showroom shine and preserving value.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  style={{ backgroundImage: "url(/images/slider/1.webp)", backgroundPosition: "center", backgroundSize: "cover" }}
                >
                  <div className="gradient-edge-top h-20 op-5" />
                  <div className="gradient-edge-bottom h-50" />
                  <div className="sw-overlay op-6" />
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  style={{ backgroundImage: "url(/images/slider/2.webp)", backgroundPosition: "center", backgroundSize: "cover" }}
                >
                  <div className="gradient-edge-top h-20 op-5" />
                  <div className="gradient-edge-bottom h-50" />
                  <div className="sw-overlay op-6" />
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="swiper-inner"
                  style={{ backgroundImage: "url(/images/slider/3.webp)", backgroundPosition: "center", backgroundSize: "cover" }}
                >
                  <div className="gradient-edge-top h-20 op-5" />
                  <div className="gradient-edge-bottom h-50" />
                  <div className="sw-overlay op-6" />
                </div>
              </div>
            </div>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="subtitle">Services</div>
              <h2 className="mb-0">Professional Detailing Modules</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link href={routes.services} className="btn-main fx-slide"><span>View All Services</span></Link>
            </div>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section className="bg-dark-2">
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle">Shop</div>
              <h2 className="mb-0">Detailing Product Catalog</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link href={routes.shop} className="btn-main fx-slide"><span>Open Shop</span></Link>
            </div>
          </div>
          <ProductCards slugs={["nanoskin-nano-suds-wash-shine-shampoo", "premium-microfiber-cleaning-towel", "kenolon-ceramic-shield-v1-box-sio2-coating-kit", "black-magic-all-wheel-foaming-cleaner"]} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle">Inventory Listing</div>
              <h2 className="mb-0">Available Vehicle Showcase</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link href={routes.listing} className="btn-main fx-slide"><span>View Listings</span></Link>
            </div>
          </div>
          <div className="row g-4">
            {vehicles.slice(0, 3).map((vehicle) => (
              <div className="col-lg-4" key={vehicle.slug}>
                <Link href={routes.listingDetail(vehicle.slug)} className="d-block h-100 hover relative">
                  <div className="relative rounded-1 overflow-hidden">
                    <h3 className="abs rounded-3 text-white lh-1 p-2 m-4 bottom-0 inset-s-0 z-3">{vehicle.price}</h3>
                    <Image src={vehicle.image} className="w-100 hover-scale-1-2" alt={vehicle.title} width={1200} height={800} />
                    <div className="gradient-edge-bottom op-5" />
                  </div>
                  <h3 className="m-0 mt-3">{vehicle.title}</h3>
                  <small>{vehicle.type}</small>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-2">
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle">Content</div>
              <h2 className="mb-0">Recent Guides & Articles</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link href={routes.blog} className="btn-main fx-slide"><span>Read Blog</span></Link>
            </div>
          </div>
          <BlogCards limit={3} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="subtitle">Gallery</div>
              <h2 className="mb-0">Studio Work Highlights</h2>
            </div>
          </div>
          <div className="row g-4">
            {galleryItems.map((item) => (
              <div className="col-lg-3 col-md-4 col-6" key={item.src}>
                <Link href={routes.gallery} className="d-block hover relative overflow-hidden text-light">
                  <Image src={item.src} className="w-100 hover-scale-1-1" alt={item.alt} width={600} height={600} />
                  <div className="abs p-3 bottom-0 w-100">
                    <small>{item.category}</small>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-2">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6">
              <div className="subtitle">Testimonials</div>
              <h2 className="mb-0">Trusted by Owners and Fleets</h2>
            </div>
          </div>
          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-lg-4" key={item.name}>
                <div className="p-4 rounded-1 bg-dark-3 h-100">
                  <p className="mb-3">{item.quote}</p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={item.image} alt={item.name} className="rounded-circle" width={48} height={48} />
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

      <section>
        <div className="container text-center">
          <h2 className="mb-3">Production Frontend Contracts Included</h2>
          <p className="mb-4">
            Lead forms, shop state, listing detail routes, blog slugs, legal pages, and canonical metadata are native Next.js contracts in this template lane.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href={routes.appointment} className="btn-main fx-slide"><span>Book Appointment</span></Link>
            <Link href={routes.checkout} className="btn-main btn-line"><span>Checkout Flow</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
