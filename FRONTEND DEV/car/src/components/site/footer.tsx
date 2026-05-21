import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/data/site";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <Image src="/images/logo-velocare.svg" className="logo-footer" alt={siteConfig.name} width={220} height={54} />
            <div className="spacer-20" />
            <p>
              At {siteConfig.name}, we deliver professional detailing, practical maintenance guidance, and trustworthy product recommendations for owners and fleets.
            </p>
            <div className="social-icons mb-sm-30">
              {siteConfig.social.map((entry) => (
                <a key={entry.href} href={entry.href} target="_blank" rel="noopener noreferrer" aria-label={entry.label}>
                  <i className={entry.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Services</h5>
                  <ul>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={routes.serviceDetail(service.slug)}>{service.subtitle}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Support</h5>
                  <ul>
                    <li><Link href={routes.contact}>Contact</Link></li>
                    <li><Link href={routes.appointment}>Book Appointment</Link></li>
                    <li><Link href={routes.support}>Customer Support</Link></li>
                    <li><Link href={routes.shipping}>Shipping Policy</Link></li>
                    <li><Link href={routes.returns}>Returns Policy</Link></li>
                    <li><Link href={routes.privacy}>Privacy Policy</Link></li>
                    <li><Link href={routes.terms}>Terms & Conditions</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <h5>Get In Touch</h5>
              <div className="d-flex mb-3">
                <i className="icofont-location-pin me-3 id-color fs-20" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="d-flex mb-3">
                <i className="icofont-envelope me-3 id-color fs-20" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="d-flex mb-3">
                <i className="icofont-phone me-3 id-color fs-20" />
                <span>{siteConfig.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright {new Date().getFullYear()} - {siteConfig.name}
                </div>
                <ul className="menu-simple">
                  <li><Link href={routes.terms}>Terms & Conditions</Link></li>
                  <li><Link href={routes.privacy}>Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
