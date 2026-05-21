"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { siteConfig } from "@/data/site";
import { routes } from "@/lib/routes";
import { useShop } from "@/components/commerce/shop-state";

type NavItem = {
  label: string;
  href: string;
};

const primaryNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Shop", href: routes.shop },
  { label: "Listing", href: routes.listing },
  { label: "Blog", href: routes.blog },
  { label: "Contact", href: routes.contact },
];

function isActive(pathname: string, href: string) {
  if (href === routes.home) {
    return pathname === routes.home;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { cartCount, wishlistCount } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () =>
      primaryNav.map((item) => ({
        ...item,
        active: isActive(pathname, item.href),
      })),
    [pathname],
  );

  return (
    <header className="transparent">
      <div id="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between xs-hide">
                <div className="d-flex">
                  <div className="topbar-widget">
                    <Link href={routes.appointment}>
                      <Image src="/images/svg-white/bell.svg" alt="Promo" width={16} height={16} />
                      Book this week and get 15% off your first detailing package.
                    </Link>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="topbar-widget me-5">
                    <a href={siteConfig.phoneHref}>
                      <Image src="/images/svg-white/phone.svg" alt="Phone" width={16} height={16} />
                      Call us: {siteConfig.phone}
                    </a>
                  </div>
                  <div className="topbar-widget">
                    <a href={siteConfig.emailHref}>
                      <Image src="/images/svg-white/envelope.svg" alt="Email" width={16} height={16} />
                      Message us: {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <Link href={routes.home}>
                    <Image className="logo-main" src="/images/logo-velocare.svg" alt={siteConfig.name} width={224} height={54} />
                    <Image className="logo-mobile" src="/images/logo-velocare-mobile.svg" alt={siteConfig.shortName} width={160} height={40} />
                  </Link>
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu" className={menuOpen ? "show" : ""}>
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <Link className={item.active ? "active" : ""} href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href={routes.appointment} className="btn-main fx-slide hover-white">
                    <span>Make Appointment</span>
                  </Link>
                  <button
                    id="menu-btn"
                    type="button"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((value) => !value)}
                  />
                </div>
                <div className="d-flex align-items-center gap-3 ms-3">
                  <Link className="de-icon-counter" href={routes.wishlist}>
                    <Image src="/images/ui/heart.svg" alt="Wishlist" width={22} height={22} />
                    <span className="d-counter">{wishlistCount}</span>
                  </Link>
                  <Link className="de-icon-counter" href={routes.cart}>
                    <Image src="/images/ui/cart.svg" alt="Cart" width={22} height={22} />
                    <span className="d-counter">{cartCount}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
