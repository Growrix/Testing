import Link from "next/link";
import { FluidImage } from "@/components/fluid-image";
import { Icon } from "@/components/icons";
import {
  aboutUsFeatures,
  blogPosts,
  brand,
  calloutQuote,
  careerJobs,
  estimateStrip,
  faqItems,
  footerLinks,
  founderProfile,
  heroSlides,
  homeBlogCallout,
  logoBand,
  officeLocations,
  partnerLogos,
  portfolioProjects,
  pricingPlans,
  quickLinks,
  serviceHighlights,
  services,
  teamMembers,
  testimonials,
  timelineEvents,
  topLevelPages,
  type BlogPost,
  type Service,
  type TopLevelPage,
  welcomeTabs,
} from "@/data/site";
import {
  BudgetCalculator,
  CareerBoard,
  EnquiryForm,
  FaqAccordion,
  HeroCarousel,
  NewsletterBanner,
  PortfolioFilter,
  ShareButton,
  WelcomeTabs,
} from "@/components/interactive";

export function HomePage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <section className="container feature-cards feature-cards--hero">
        {serviceHighlights.map((item) => (
          <article className={`feature-card feature-card--${item.accent}`} key={item.title}>
            <div className="feature-card__icon">
              <Icon name={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <Link href={item.href}>Read more</Link>
          </article>
        ))}
      </section>

      <section className="section section--pattern">
        <div className="container welcome-layout">
          <div>
            <p className="section-eyebrow">About us</p>
            <h2>Welcome to our good services.</h2>
            <WelcomeTabs tabs={welcomeTabs} />
          </div>
          <div className="welcome-media">
            <div className="welcome-media__badge">100% quality work guaranteed</div>
            <div className="welcome-media__grid">
              <FluidImage alt="Aircon filter before service" src={services[2].image} />
              <FluidImage alt="Indoor unit after servicing" src={services[0].image} />
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <NewsletterBanner />
      </section>

      <section className="section section--soft">
        <div className="container">
          <p className="section-eyebrow">Services</p>
          <h2>You can depend on us to get a good services.</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-card__icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <Link href={`/services/${service.slug}`}>Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container">
          <p className="section-eyebrow">Our showcase</p>
          <h2>You can depend on us to get a good portfolio.</h2>
          <PortfolioFilter projects={portfolioProjects} />
          <div className="section-cta">
            <Link className="button button--primary" href="/portfolio">
              Load more
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonial-spotlight">
        <div className="container testimonial-spotlight__inner">
          <div className="testimonial-spotlight__copy">
            <p className="section-eyebrow section-eyebrow--light">Testimonials</p>
            <h2>{calloutQuote.title}</h2>
          </div>
          <article className="testimonial-spotlight__card">
            <div className="rating-row">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon key={index} name="star" />
              ))}
            </div>
            <p>{calloutQuote.copy}</p>
            <strong>{calloutQuote.author}</strong>
            <span>{calloutQuote.role}</span>
          </article>
        </div>
      </section>

      <LogoBand />

      <section className="section section--pattern">
        <div className="container blog-preview">
          <div className="blog-preview__heading">
            <div>
              <p className="section-eyebrow">Blog</p>
              <h2>Learn more from blog.</h2>
            </div>
            <Link className="blog-preview__callout" href={homeBlogCallout.href}>
              <span>{homeBlogCallout.title}</span>
              <strong>{homeBlogCallout.label}</strong>
            </Link>
          </div>
          <div className="blog-preview__grid">
            <article className="blog-preview__feature">
              <FluidImage alt={blogPosts[0].title} src={blogPosts[0].image} />
              <div>
                <p className="blog-meta">{blogPosts[0].category}</p>
                <h3>{blogPosts[0].title}</h3>
                <p>{blogPosts[0].summary}</p>
                <Link className="button button--ghost" href={`/blog/${blogPosts[0].slug}`}>
                  Read more
                </Link>
              </div>
            </article>
            <div className="blog-preview__stack">
              {blogPosts.slice(1).map((post) => (
                <article className="blog-preview__item" key={post.slug}>
                  <FluidImage alt={post.title} src={post.image} />
                  <div>
                    <p className="blog-meta">{post.category}</p>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <Link href={`/blog/${post.slug}`}>Read more</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PageIntro({ page }: { page: TopLevelPage }) {
  return (
    <section className="page-intro container">
      <p className="page-intro__breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <strong>{page.label}</strong>
      </p>
      <p className="section-eyebrow">{page.eyebrow}</p>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </section>
  );
}

export function AboutUsPage() {
  const page = topLevelPages["about-us"];
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <div className="feature-row">
          {aboutUsFeatures.map((feature) => (
            <article className="mini-feature" key={feature.title}>
              <Icon name={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--pattern">
        <div className="container split-panel">
          <div className="split-panel__images">
            <FluidImage alt="Technician working at indoor unit" src={services[1].image} />
            <FluidImage alt="Technician with tablet and service notes" src={services[0].image} />
          </div>
          <div className="split-panel__details">
            <h2>Cool, efficient systems with cleaner finish quality.</h2>
            <p>
              We have rebuilt the reference theme around a real aircon installer narrative: licensed work, practical comfort advice, and a much more truthful route set.
            </p>
            <div className="contact-pills">
              <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>
          </div>
        </div>
      </section>
      <TimelineSection />
      <FaqAndSpotlight />
      <PricingSection />
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function AboutMePage() {
  const page = topLevelPages["about-me"];
  return (
    <>
      <PageIntro page={page} />
      <section className="section container founder-layout">
        <FluidImage alt="Lead installer portrait" className="founder-layout__image" src={founderProfile.image} />
        <div>
          <h2>{founderProfile.title}</h2>
          <p>{founderProfile.copy}</p>
          <div className="skill-bars">
            {founderProfile.skills.map((skill) => (
              <div className="skill-bars__item" key={skill.label}>
                <div className="skill-bars__label">
                  <span>{skill.label}</span>
                  <strong>{skill.value}%</strong>
                </div>
                <div className="skill-bars__track">
                  <span className="skill-bars__fill" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TimelineSection />
      <FaqAndSpotlight />
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function TeamPage({ variant }: { variant: "grid" | "circle" }) {
  const page = topLevelPages[variant === "grid" ? "team-01" : "team-02"];
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <div className={`team-grid${variant === "circle" ? " team-grid--circle" : ""}`}>
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <FluidImage alt={member.name} className="team-card__image" src={member.image} />
              {variant === "circle" ? (
                <a className="team-card__phone" href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}>
                  <Icon name="phone" />
                  <span>{member.phone}</span>
                </a>
              ) : (
                <ShareButton member={member} />
              )}
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function TestimonialsPage() {
  const page = topLevelPages.testimonials;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={`${testimonial.name}-${testimonial.company}`}>
              <Icon className="testimonial-card__quote" name="quote" />
              <p>{testimonial.quote}</p>
              <div className="testimonial-card__author">
                <FluidImage alt={testimonial.name} src={testimonial.image} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function PricingPage() {
  const page = topLevelPages.pricing;
  return (
    <>
      <PageIntro page={page} />
      <PricingSection />
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function CalculatorPage() {
  const page = topLevelPages["costing-calculator"];
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <BudgetCalculator />
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function PartnerPage() {
  const page = topLevelPages.partner;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <div className="partner-grid">
          {partnerLogos.map((partner) => (
            <div className="partner-grid__item" key={partner}>
              {partner}
            </div>
          ))}
        </div>
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function LocationPage() {
  const page = topLevelPages.location;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <div className="map-frame">
          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=152.95%2C-27.53%2C153.08%2C-27.41&layer=mapnik"
            title="Brisbane coverage map"
          />
        </div>
        <div className="office-grid">
          {officeLocations.map((office) => (
            <article className="office-card" key={office.title}>
              <div className="office-card__pin">
                <Icon name="map" />
              </div>
              <h3>{office.title}</h3>
              <p>{office.address}</p>
              <strong>{office.territory}</strong>
            </article>
          ))}
        </div>
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function CareerPage() {
  const page = topLevelPages.career;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <CareerBoard jobs={careerJobs} />
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function ContactPage() {
  const page = topLevelPages.contact;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container contact-layout">
        <aside className="contact-card">
          <div>
            <Icon name="map" />
            <div>
              <strong>Head office address:</strong>
              <p>{brand.address}</p>
            </div>
          </div>
          <div>
            <Icon name="phone" />
            <div>
              <strong>Call for help:</strong>
              <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>{brand.phone}</a>
              <a href={`tel:${brand.emergencyPhone.replace(/[^\d+]/g, "")}`}>{brand.emergencyPhone}</a>
            </div>
          </div>
          <div>
            <Icon name="mail" />
            <div>
              <strong>Mail for information:</strong>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <span>{brand.hours}</span>
            </div>
          </div>
        </aside>
        <EnquiryForm mode="contact" />
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function AppointmentPage() {
  const page = topLevelPages["request-appointment"];
  return (
    <>
      <PageIntro page={page} />
      <section className="section container appointment-layout">
        <div className="appointment-layout__copy">
          <h2>Fast scheduling for installs, repairs, and maintenance visits.</h2>
          <p>
            Give us the suburb, the system type, and the most annoying symptom. We will respond with the fastest practical path instead of a vague callback promise.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" />
              <span>Residential and light-commercial work across Brisbane metro.</span>
            </li>
            <li>
              <Icon name="check" />
              <span>Maintenance, diagnostics, upgrades, and new installs.</span>
            </li>
            <li>
              <Icon name="check" />
              <span>Direct call option if you would rather talk than type.</span>
            </li>
          </ul>
        </div>
        <EnquiryForm mode="appointment" />
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function ServicesPage() {
  const page = topLevelPages.services;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container service-grid">
        {services.map((service) => (
          <article className="service-card service-card--full" key={service.slug}>
            <FluidImage alt={service.title} className="service-card__image" src={service.image} />
            <div>
              <div className="service-card__icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="check-list check-list--compact">
                {service.bulletPoints.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`}>Read more</Link>
            </div>
          </article>
        ))}
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <>
      <section className="page-intro container">
        <p className="page-intro__breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <strong>{service.title}</strong>
        </p>
        <p className="section-eyebrow">{service.shortTitle}</p>
        <h1>{service.title}</h1>
        <p>{service.tagline}</p>
      </section>
      <section className="section section--pattern">
        <div className="container service-detail">
          <FluidImage alt={service.title} className="service-detail__image" src={service.image} />
          <div>
            <h2>{service.summary}</h2>
            <ul className="check-list">
              {service.inclusions.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section container">
        <p className="section-eyebrow">Process</p>
        <h2>How the work moves from first call to handover.</h2>
        <div className="process-grid">
          {service.process.map((item, index) => (
            <article className="process-card" key={item}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function PortfolioPage() {
  const page = topLevelPages.portfolio;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container">
        <PortfolioFilter projects={portfolioProjects} />
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function BlogPage() {
  const page = topLevelPages.blog;
  return (
    <>
      <PageIntro page={page} />
      <section className="section container blog-listing">
        {blogPosts.map((post) => (
          <article className="blog-listing__card" key={post.slug}>
            <FluidImage alt={post.title} src={post.image} />
            <div>
              <p className="blog-meta">
                {post.category} · {post.published}
              </p>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link href={`/blog/${post.slug}`}>Read article</Link>
            </div>
          </article>
        ))}
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function BlogDetailPage({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="page-intro container">
        <p className="page-intro__breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <strong>{post.title}</strong>
        </p>
        <p className="section-eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
      </section>
      <article className="section container article-layout">
        <FluidImage alt={post.title} className="article-layout__image" src={post.image} />
        <div className="article-layout__content">
          <p className="blog-meta">Published {post.published}</p>
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="button button--primary" href="/request-appointment">
            Ask about this topic
          </Link>
        </div>
      </article>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundImage: `linear-gradient(rgba(6, 34, 65, 0.88), rgba(6, 34, 65, 0.94)), url(${brand.footerBackground})` }}>
      <div className="container site-footer__hero">
        <h2>
          To hire us or need any urgent help? <span>Email us</span> anytime!
        </h2>
      </div>
      <div className="container site-footer__grid">
        <div>
          <div className="brand-mark brand-mark--footer">
            <span className="brand-mark__badge">CP</span>
            <span>
              <strong>{brand.name}</strong>
              <small>{brand.tagline}</small>
            </span>
          </div>
          <p>
            CoolPeak offers a fully comprehensive air conditioning service and brings over a decade of hands-on comfort planning to every job.
          </p>
        </div>
        <div>
          <h3>Quick links</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Official info</h3>
          <ul className="footer-links footer-links--contact">
            <li>
              <Icon name="map" />
              <span>{brand.address}</span>
            </li>
            <li>
              <Icon name="phone" />
              <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>{brand.phone}</a>
            </li>
            <li>
              <Icon name="clock" />
              <span>{brand.footerHours}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <div className="site-footer__legal">
          <span>Copyright © 2026 All Rights Reserved.</span>
          {footerLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="site-footer__socials">
          {brand.socials.map((social) => (
            <a href={social.href} key={social.label} rel="noreferrer" target="_blank">
              {social.short}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function EstimateStrip() {
  return (
    <section className="estimate-strip" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.9)), url(${estimateStrip.background})` }}>
      <div className="container estimate-strip__inner">
        <h2>{estimateStrip.title}</h2>
        <div className="estimate-strip__seal">Free estimates fast</div>
        <a className="button button--primary" href={`tel:${brand.emergencyPhone.replace(/[^\d+]/g, "")}`}>
          {estimateStrip.buttonLabel}
        </a>
        <p>{estimateStrip.subtitle}</p>
      </div>
    </section>
  );
}

export function LogoBand() {
  return (
    <section className="logo-band">
      <div className="container logo-band__inner">
        {logoBand.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </section>
  );
}

export function NotFoundPageContent() {
  return (
    <>
      <section className="not-found container">
        <p className="page-intro__breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <strong>Not found</strong>
        </p>
        <div className="not-found__code">404</div>
        <div className="not-found__illustration">
          <span />
          <span />
        </div>
        <h1>Page not found</h1>
        <p>We are sorry to say that your page is not found!</p>
        <Link className="button button--primary" href="/">
          Go home
        </Link>
      </section>
      <EstimateStrip />
      <LogoBand />
    </>
  );
}

function PricingSection() {
  return (
    <section className="section container">
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article className={`pricing-card${plan.highlight ? " pricing-card--highlight" : ""}`} key={plan.title}>
            <strong>{plan.price}</strong>
            <h3>{plan.title}</h3>
            <Link className="button button--danger button--sm" href="/request-appointment">
              Get offer
            </Link>
            <p>{plan.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="timeline-section" style={{ backgroundImage: `linear-gradient(rgba(8, 47, 90, 0.86), rgba(8, 47, 90, 0.88)), url(${brand.footerBackground})` }}>
      <div className="container">
        <h2>We have started in 2018, with a plan.</h2>
        <div className="timeline-grid">
          {timelineEvents.map((event) => (
            <article className="timeline-item" key={event.date + event.title}>
              <span>{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqAndSpotlight() {
  return (
    <>
      <section className="section section--pattern">
        <div className="container faq-layout">
          <div className="faq-layout__media">
            <FluidImage alt="Technician standing beside indoor unit" src={services[0].image} />
            <FluidImage alt="Technician with clipboard" src={services[1].image} />
          </div>
          <div>
            <p className="section-eyebrow">Faq</p>
            <h2>Common questions from users as well as customers ask about us.</h2>
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <section className="testimonial-spotlight" style={{ backgroundImage: `linear-gradient(rgba(6,34,65,.88), rgba(6,34,65,.88)), url(${services[4].image})` }}>
        <div className="container testimonial-spotlight__inner">
          <div className="testimonial-spotlight__copy">
            <p className="section-eyebrow section-eyebrow--light">Testimonial</p>
            <h2>We offer expert bespoke comfort planning, including major project support.</h2>
            <Link className="button button--danger button--sm" href="/testimonials">
              Testimonials
            </Link>
          </div>
          <article className="testimonial-spotlight__card">
            <div className="rating-row">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon key={index} name="star" />
              ))}
            </div>
            <p>{testimonials[0].quote}</p>
            <strong>{testimonials[0].name}</strong>
            <span>{testimonials[0].role}</span>
          </article>
        </div>
      </section>
    </>
  );
}
