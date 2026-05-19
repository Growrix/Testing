"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FluidImage } from "@/components/fluid-image";
import {
  type CareerJob,
  type FaqItem,
  type HeroSlide,
  type PortfolioProject,
  type TeamMember,
  type WelcomeTab,
  brand,
  calculatorOptions,
  newsletterCopy,
} from "@/data/site";
import { Icon } from "@/components/icons";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeIndex];

  return (
    <section className="hero-carousel">
      <div className="hero-carousel__media" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="hero-carousel__overlay" />
      <div className="container hero-carousel__inner">
        <button
          aria-label="Previous slide"
          className="hero-carousel__arrow hero-carousel__arrow--left"
          onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
          type="button"
        >
          <Icon name="arrow-left" />
        </button>
        <div className="hero-carousel__content">
          <p className="section-eyebrow section-eyebrow--light">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="button-row">
            <Link className="button button--primary" href={slide.primaryAction.href}>
              {slide.primaryAction.label}
            </Link>
            <Link className="button button--secondary" href={slide.secondaryAction.href}>
              {slide.secondaryAction.label}
            </Link>
          </div>
        </div>
        <button
          aria-label="Next slide"
          className="hero-carousel__arrow hero-carousel__arrow--right"
          onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
          type="button"
        >
          <Icon name="arrow-right" />
        </button>
      </div>
      <div className="hero-carousel__dots">
        {slides.map((entry, index) => (
          <button
            key={entry.title}
            aria-label={`Show slide ${index + 1}`}
            className={`hero-carousel__dot${index === activeIndex ? " hero-carousel__dot--active" : ""}`}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

export function WelcomeTabs({ tabs }: { tabs: WelcomeTab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className="welcome-tabs">
      <div className="welcome-tabs__nav" role="tablist" aria-label="Why choose CoolPeak">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            aria-selected={tab.id === currentTab.id}
            className={`welcome-tabs__tab${tab.id === currentTab.id ? " welcome-tabs__tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="welcome-tabs__panel" role="tabpanel">
        <p className="welcome-tabs__intro">{currentTab.intro}</p>
        <ul className="check-list">
          {currentTab.body.map((item) => (
            <li key={item}>
              <Icon name="check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) {
      return;
    }
    setState("success");
    setEmail("");
  }

  return (
    <section className="newsletter-banner">
      <div className="newsletter-banner__copy">
        <p className="section-eyebrow section-eyebrow--gold">News</p>
        <h3>{newsletterCopy.title}</h3>
        <p>{newsletterCopy.description}</p>
      </div>
      <form className="newsletter-banner__form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          type="email"
          value={email}
        />
        <button className="button button--primary" type="submit">
          Subscribe
        </button>
        {state === "success" ? <p className="form-message">You are on the update list.</p> : null}
      </form>
    </section>
  );
}

export function PortfolioFilter({ projects }: { projects: PortfolioProject[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <div className="filter-bar" role="tablist" aria-label="Portfolio filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip${activeCategory === category ? " filter-chip--active" : ""}`}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {visibleProjects.map((project) => (
          <article key={project.title} className="portfolio-card">
            <FluidImage alt={project.title} className="portfolio-card__image" src={project.image} />
            <div className="portfolio-card__body">
              <span className="portfolio-card__category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <article className="accordion__item" key={item.question}>
          <button
            aria-expanded={index === openItem}
            className="accordion__button"
            onClick={() => setOpenItem(index === openItem ? -1 : index)}
            type="button"
          >
            <span>{item.question}</span>
            <Icon name="chevron-down" className={index === openItem ? "accordion__icon accordion__icon--open" : "accordion__icon"} />
          </button>
          {index === openItem ? <p className="accordion__answer">{item.answer}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function BudgetCalculator() {
  const [size, setSize] = useState(100);
  const [serviceType, setServiceType] = useState(calculatorOptions.serviceTypes[0].label);
  const [crewSize, setCrewSize] = useState(calculatorOptions.workerCounts[0].label);
  const [emergency, setEmergency] = useState(false);

  const serviceMultiplier =
    calculatorOptions.serviceTypes.find((item) => item.label === serviceType)?.multiplier ?? 1;
  const crewMultiplier =
    calculatorOptions.workerCounts.find((item) => item.label === crewSize)?.multiplier ?? 1;
  const total = Math.round(size * serviceMultiplier * crewMultiplier + (emergency ? 95 : 0));

  return (
    <section className="calculator-layout">
      <aside className="calculator-aside">
        <FluidImage alt="Technician holding service checklist" src={brand.footerBackground} />
        <p>
          Count on us for dependable, high-quality services night and day, 7 days a week.
        </p>
        <a className="button button--dark" href={`tel:${brand.emergencyPhone.replace(/[^\d+]/g, "")}`}>
          {brand.emergencyPhone}
        </a>
      </aside>
      <div className="calculator-panel">
        <h3>Estimate your budget</h3>
        <p className="calculator-panel__copy">Costing may change according to site access, equipment choice, and ceiling complexity.</p>
        <label className="field-group">
          <span>Conditioned area</span>
          <div className="range-row">
            <input
              max={220}
              min={30}
              onChange={(event) => setSize(Number(event.target.value))}
              type="range"
              value={size}
            />
            <strong>{size} m²</strong>
          </div>
        </label>
        <label className="field-group">
          <span>Service type</span>
          <select onChange={(event) => setServiceType(event.target.value)} value={serviceType}>
            {calculatorOptions.serviceTypes.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="field-group">
          <span>Worker number</span>
          <select onChange={(event) => setCrewSize(event.target.value)} value={crewSize}>
            {calculatorOptions.workerCounts.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="switch-row">
          <span>Need emergency attendance</span>
          <button
            aria-pressed={emergency}
            className={`switch${emergency ? " switch--active" : ""}`}
            onClick={() => setEmergency(!emergency)}
            type="button"
          >
            <span className="switch__thumb" />
          </button>
        </label>
        <div className="calculator-total">
          <span>Total ($)</span>
          <strong>{total}</strong>
        </div>
      </div>
    </section>
  );
}

type FormMode = "contact" | "appointment";

export function EnquiryForm({ mode }: { mode: FormMode }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    if (!name || !phone) {
      setStatus("error");
      setMessage("Name and phone are required before we can book the call.");
      return;
    }
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("success");
      setMessage(
        mode === "appointment"
          ? "Appointment request captured. A CoolPeak coordinator will call you back shortly."
          : "Message sent. We will get back to you as soon as possible.",
      );
      event.currentTarget.reset();
    }, 700);
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" placeholder="Your name" type="text" />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" placeholder="Mail" type="email" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" placeholder="Your phone" type="tel" />
        </label>
        <label>
          <span>{mode === "appointment" ? "Service type" : "Subject"}</span>
          <select name="subject">
            <option value="">Select…</option>
            <option value="Repairs">Repairs</option>
            <option value="Installation">Installation</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Commercial">Commercial systems</option>
          </select>
        </label>
        {mode === "appointment" ? (
          <>
            <label>
              <span>Suburb</span>
              <input name="suburb" placeholder="Brisbane suburb" type="text" />
            </label>
            <label>
              <span>Preferred callback</span>
              <select name="callback">
                <option value="">Select…</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="After-hours">After hours</option>
              </select>
            </label>
          </>
        ) : null}
      </div>
      <label className="form-panel__message">
        <span>Your message</span>
        <textarea name="message" placeholder="Type message" rows={6} />
      </label>
      <div className="button-row button-row--form">
        <button className="button button--primary" type="submit">
          {mode === "appointment" ? "Request appointment" : "Send message"}
        </button>
        <a className="button button--ghost" href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>
          Call {brand.phone}
        </a>
      </div>
      {status !== "idle" ? <p className={`form-message form-message--${status}`}>{message}</p> : null}
    </form>
  );
}

export function CareerBoard({ jobs }: { jobs: CareerJob[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="career-board">
      {jobs.map((job, index) => (
        <article className={`career-row${index === openIndex ? " career-row--open" : ""}`} key={job.title}>
          <div className="career-row__meta">
            <span>/{job.index}</span>
            <div>
              <h3>{job.title}</h3>
              <p>
                {job.date} <span className="career-row__divider">|</span> {job.location}
              </p>
            </div>
          </div>
          <div className="career-row__summary">
            <p>{job.summary}</p>
            {index === openIndex ? <p className="career-row__detail">{job.detail}</p> : null}
            <strong>{job.type}</strong>
          </div>
          <button
            aria-label={`Toggle ${job.title}`}
            className="career-row__toggle"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            type="button"
          >
            <Icon name="arrow-right" />
          </button>
        </article>
      ))}
    </div>
  );
}

export function ShareButton({ member }: { member: TeamMember }) {
  const [status, setStatus] = useState<"idle" | "copied">("idle");

  async function handleShare() {
    const payload = `${member.name} | ${member.role} | ${member.phone}`;
    if (navigator.share) {
      await navigator.share({ title: member.name, text: payload });
    } else {
      await navigator.clipboard.writeText(payload);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1800);
    }
  }

  return (
    <button className="share-button" onClick={handleShare} type="button">
      <Icon name="share" />
      <span>{status === "copied" ? "Copied" : "Share"}</span>
    </button>
  );
}
