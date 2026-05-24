import { airconProfile } from "@/data/aircon";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.app}>
        <section className={styles.hero}>
          <div className={styles.snowflakes} aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index} className={styles.snowflake}>
                ❄
              </span>
            ))}
          </div>
          <div className={styles.heroSymbol} aria-hidden="true">
            ❄️
          </div>
          <div className={styles.tempBadge}>
            <div className={styles.tempValue}>{airconProfile.setTemp}</div>
            <div className={styles.tempLabel}>Set Temp</div>
          </div>
          <h1 className={styles.heroTitle}>
            {airconProfile.displayName.primary}
            <span className={styles.accentText}>
              {airconProfile.displayName.accent}
            </span>
            <br />
            {airconProfile.displayName.secondary}
          </h1>
          <p className={styles.heroCopy}>{airconProfile.heroCopy}</p>
          <p className={styles.heroMeta}>{airconProfile.heroMeta}</p>
        </section>

        <section className={styles.stats} aria-label="Highlights">
          {airconProfile.stats.map((stat) => (
            <div key={`${stat.value}-${stat.label}`} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>

        <div className={styles.body}>
          <section>
            <h2 className={styles.sectionHeading}>Services</h2>
            <div className={styles.services}>
              {airconProfile.services.map((service) => (
                <article key={service.name} className={styles.serviceCard}>
                  <div>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <div className={styles.serviceName}>{service.name}</div>
                    <div className={styles.serviceDescription}>
                      {service.description}
                    </div>
                    {service.tag ? (
                      <div className={styles.serviceTag}>{service.tag}</div>
                    ) : null}
                  </div>
                  <div className={styles.servicePrice}>
                    {service.price}
                    <span className={styles.serviceSuffix}>{service.suffix}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>Special Summer Offer</h2>
            <div className={styles.promoBox}>
              <h3 className={styles.promoTitle}>{airconProfile.promo.title}</h3>
              <p className={styles.promoCopy}>{airconProfile.promo.description}</p>
              <div className={styles.promoPrice}>{airconProfile.promo.price}</div>
              <div className={styles.promoOld}>
                {airconProfile.promo.previousPrice}
              </div>
              <a className={styles.promoPrimary} href="#contact">
                {airconProfile.promo.primaryCta}
              </a>
              <a className={styles.promoSecondary} href="#contact">
                {airconProfile.promo.secondaryCta}
              </a>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>Brands We Service</h2>
            <div className={styles.brandGrid}>
              {airconProfile.brands.map((brand) => (
                <div key={brand} className={styles.brand}>
                  {brand}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.sectionHeading}>What&apos;s Included in Every Job</h2>
            <div className={styles.includedGrid}>
              {airconProfile.included.map((item) => (
                <div key={item} className={styles.includedItem}>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="contact">
            <h2 className={styles.sectionHeading}>Contact</h2>
            <div className={styles.contactBox}>
              {airconProfile.contact.map((item) => (
                <div key={item.text} className={styles.contactRow}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className={styles.footer}>{airconProfile.footer}</footer>
        <div className={styles.builderBar}>
          <span className={styles.builderText}>{airconProfile.builderBar}</span>
        </div>
      </div>
    </main>
  );
}
