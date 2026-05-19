"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { brand, navigation, searchEntries } from "@/data/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredEntries = query
    ? searchEntries.filter((entry) => entry.label.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : searchEntries.slice(0, 8);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__info">
            <span>
              <Icon name="clock" />
              Working hours: {brand.hours}
            </span>
            <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>
              <Icon name="phone" />
              Call us: {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`}>
              <Icon name="mail" />
              Mail us: {brand.email}
            </a>
          </div>
          <div className="topbar__socials">
            {brand.socials.map((social) => (
              <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
                {social.short}
              </a>
            ))}
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand-mark" href="/">
            <span className="brand-mark__badge">CP</span>
            <span>
              <strong>{brand.name}</strong>
              <small>{brand.tagline}</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((group) => (
              <div className="site-nav__item" key={group.label}>
                <Link className="site-nav__label" href={group.href ?? group.items[0].href}>
                  {group.label}
                  <Icon name="chevron-down" />
                </Link>
                <div className="site-nav__dropdown">
                  {group.items.map((item) => (
                    <Link className="site-nav__dropdown-link" href={item.href} key={item.href}>
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div className="site-header__actions">
            <button aria-label="Search site" className="icon-button" onClick={() => setSearchOpen(true)} type="button">
              <Icon name="search" />
            </button>
            <Link className="button button--danger" href="/request-appointment">
              Request an appointment
            </Link>
            <button aria-label="Open menu" className="icon-button icon-button--mobile" onClick={() => setMobileOpen(!mobileOpen)} type="button">
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="mobile-panel">
            {navigation.map((group) => (
              <details className="mobile-panel__group" key={group.label}>
                <summary>{group.label}</summary>
                <div className="mobile-panel__links">
                  {group.items.map((item) => (
                    <Link href={item.href} key={item.href} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link className="button button--danger mobile-panel__button" href="/request-appointment" onClick={() => setMobileOpen(false)}>
              Request an appointment
            </Link>
          </div>
        ) : null}
      </header>
      {searchOpen ? (
        <div className="search-overlay" role="dialog" aria-modal="true">
          <div className="search-overlay__panel">
            <div className="search-overlay__header">
              <h2>Search the site</h2>
              <button aria-label="Close search" className="icon-button" onClick={() => setSearchOpen(false)} type="button">
                <Icon name="close" />
              </button>
            </div>
            <label className="search-field" htmlFor="site-search">
              <Icon name="search" />
              <input
                id="site-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services, articles, and pages"
                type="search"
                value={query}
              />
            </label>
            <div className="search-results">
              {filteredEntries.map((entry) => (
                <Link className="search-results__item" href={entry.href} key={`${entry.kind}-${entry.href}`} onClick={() => setSearchOpen(false)}>
                  <strong>{entry.label}</strong>
                  <span>{entry.kind}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
