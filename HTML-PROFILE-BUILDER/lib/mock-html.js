function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function fontQuery(fontFamily, weights) {
  const family = fontFamily.replaceAll(' ', '+');
  return `${family}:wght@${weights}`;
}

function renderServices(brief) {
  if (brief.services.length === 0) {
    return '';
  }

  const items = brief.services
    .map(
      (service) => `
        <article class="card service-card">
          <div>
            <h3>${escapeHtml(service.name)}</h3>
            <p>${escapeHtml(service.description)}</p>
          </div>
          <strong>${escapeHtml(service.price)}</strong>
        </article>`
    )
    .join('');

  return `
    <section aria-labelledby="services-title">
      <div class="section-heading">
        <p class="eyebrow">Main offering</p>
        <h2 id="services-title">Services</h2>
      </div>
      <div class="stack">${items}
      </div>
    </section>`;
}

function renderProofStats(brief) {
  if (brief.optionalSections.proofStats.length === 0) {
    return '';
  }

  const items = brief.optionalSections.proofStats
    .map(
      (entry) => `
        <article class="stat-card">
          <strong>${escapeHtml(entry.value)}</strong>
          <span>${escapeHtml(entry.label)}</span>
        </article>`
    )
    .join('');

  return `<section class="stats-grid" aria-label="Proof stats">${items}</section>`;
}

function renderPortfolio(brief) {
  if (brief.optionalSections.portfolioLabels.length === 0) {
    return '';
  }

  const items = brief.optionalSections.portfolioLabels
    .map((label) => `<article class="portfolio-card">${escapeHtml(label)}</article>`)
    .join('');

  return `
    <section aria-labelledby="portfolio-title">
      <div class="section-heading">
        <p class="eyebrow">Highlights</p>
        <h2 id="portfolio-title">Portfolio</h2>
      </div>
      <div class="portfolio-grid">${items}</div>
    </section>`;
}

function renderTechStack(brief) {
  if (brief.optionalSections.techStack.length === 0) {
    return '';
  }

  const items = brief.optionalSections.techStack.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  return `
    <section aria-labelledby="stack-title">
      <div class="section-heading">
        <p class="eyebrow">Capabilities</p>
        <h2 id="stack-title">Tech Stack</h2>
      </div>
      <ul class="chip-list">${items}</ul>
    </section>`;
}

function renderProcessSteps(brief) {
  if (brief.optionalSections.processSteps.length === 0) {
    return '';
  }

  const items = brief.optionalSections.processSteps
    .map((step, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><p>${escapeHtml(step)}</p></li>`)
    .join('');

  return `
    <section aria-labelledby="process-title">
      <div class="section-heading">
        <p class="eyebrow">How it works</p>
        <h2 id="process-title">Process</h2>
      </div>
      <ol class="process-list">${items}</ol>
    </section>`;
}

function renderTeam(brief) {
  if (brief.team.length === 0) {
    return '';
  }

  const items = brief.team
    .map(
      (member) => `
        <article class="card team-card">
          <div class="avatar">${escapeHtml(member.initials)}</div>
          <div>
            <h3>${escapeHtml(member.name)}</h3>
            <p>${escapeHtml(member.role)}</p>
          </div>
        </article>`
    )
    .join('');

  return `
    <section aria-labelledby="team-title">
      <div class="section-heading">
        <p class="eyebrow">People</p>
        <h2 id="team-title">Team</h2>
      </div>
      <div class="stack">${items}</div>
    </section>`;
}

function renderContactLinks(brief) {
  const links = [
    `<a href="tel:${escapeHtml(brief.contact.phone)}">Call</a>`,
    `<a href="https://wa.me/${escapeHtml(brief.contact.whatsapp)}" target="_blank" rel="noreferrer">WhatsApp</a>`,
    `<a href="mailto:${escapeHtml(brief.contact.email)}">Email</a>`,
    `<a href="${escapeHtml(brief.location.googleMapsLink)}" target="_blank" rel="noreferrer">Map</a>`
  ];

  if (brief.social.facebook) {
    links.push(`<a href="${escapeHtml(brief.social.facebook)}" target="_blank" rel="noreferrer">Facebook</a>`);
  }

  if (brief.social.instagram) {
    links.push(`<a href="${escapeHtml(brief.social.instagram)}" target="_blank" rel="noreferrer">Instagram</a>`);
  }

  if (brief.social.website) {
    links.push(`<a href="${escapeHtml(brief.social.website)}" target="_blank" rel="noreferrer">Website</a>`);
  }

  return links.join('');
}

function buildPrimaryCta(brief) {
  if (brief.optionalSections.bookingLink) {
    return {
      href: brief.optionalSections.bookingLink,
      label: 'Book Now',
      external: true
    };
  }

  if (brief.contact.whatsapp) {
    return {
      href: `https://wa.me/${brief.contact.whatsapp}`,
      label: brief.businessType === 'agency' ? 'Get a Free Quote' : 'Chat on WhatsApp',
      external: true
    };
  }

  return {
    href: `tel:${brief.contact.phone}`,
    label: 'Call Now',
    external: false
  };
}

function generateMockHtml({ brief, theme, themeName }) {
  const primaryCta = buildPrimaryCta(brief);
  const quickInfoItems = [brief.location.address];

  if (brief.optionalSections.statusLabel) {
    quickInfoItems.unshift(brief.optionalSections.statusLabel);
  }

  if (brief.optionalSections.deliveryInfo) {
    quickInfoItems.push(brief.optionalSections.deliveryInfo);
  }

  if (brief.optionalSections.ratingLabel) {
    quickInfoItems.push(brief.optionalSections.ratingLabel);
  }

  const quickInfoMarkup = quickInfoItems.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(brief.businessName)}</title>
    <meta name="description" content="${escapeHtml(brief.tagline)}" />
    <meta property="og:title" content="${escapeHtml(brief.businessName)}" />
    <meta property="og:description" content="${escapeHtml(brief.tagline)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=${fontQuery(theme.fontHeading, theme.fontHeadingWeights)}&family=${fontQuery(theme.fontBody, theme.fontBodyWeights)}&display=swap" rel="stylesheet" />
    <style>
      :root {
        --color-primary: ${theme.colorPrimary};
        --color-accent: ${theme.colorAccent};
        --color-bg: ${theme.colorBg};
        --color-surface: ${theme.colorSurface};
        --color-text: ${theme.colorText};
        --color-muted: ${theme.colorMuted};
        --color-border: ${theme.colorBorder};
        --color-text-on-primary: ${theme.colorTextOnPrimary};
        --color-text-on-hero: ${theme.colorTextOnHero};
        --color-muted-on-hero: ${theme.colorMutedOnHero};
        --color-hero-chip-bg: ${theme.colorHeroChipBg};
        --color-hero-chip-text: ${theme.colorHeroChipText};
        --color-hero-chip-border: ${theme.colorHeroChipBorder};
        --font-heading: '${theme.fontHeading}', serif;
        --font-body: '${theme.fontBody}', sans-serif;
        --radius: ${theme.borderRadius};
      }

      * { box-sizing: border-box; }
      body {
        margin: 0;
        background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent 40%), var(--color-bg);
        color: var(--color-text);
        font-family: var(--font-body);
      }

      a { color: inherit; text-decoration: none; }
      img { display: block; max-width: 100%; }
      main {
        max-width: 420px;
        margin: 0 auto;
        padding: 24px 16px 40px;
      }

      .hero {
        background: ${theme.heroGradient};
        color: var(--color-text-on-hero);
        border-radius: calc(var(--radius) * 1.5);
        padding: 24px;
        position: relative;
        overflow: hidden;
      }

      .hero::after {
        content: '';
        position: absolute;
        inset: auto -40px -40px auto;
        width: 140px;
        height: 140px;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 50%;
      }

      .logo-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }

      .logo-wrap img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 18px;
        border: 1px solid var(--color-hero-chip-border);
        background: var(--color-hero-chip-bg);
      }

      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 999px;
        background: var(--color-hero-chip-bg);
        color: var(--color-hero-chip-text);
        border: 1px solid var(--color-hero-chip-border);
        font-size: 13px;
      }

      .status-pill::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--color-accent);
      }

      h1, h2, h3 {
        font-family: var(--font-heading);
        margin: 0;
      }

      h1 { margin-top: 20px; font-size: 34px; line-height: 1.05; }
      .tagline { margin: 12px 0 0; color: var(--color-muted-on-hero); }
      .quick-info, .chip-list, .contact-links {
        list-style: none;
        padding: 0;
        margin: 20px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .quick-info li {
        background: var(--color-hero-chip-bg);
        border: 1px solid var(--color-hero-chip-border);
        color: var(--color-hero-chip-text);
        border-radius: 999px;
        padding: 10px 14px;
      }

      .chip-list li, .contact-links a {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        border-radius: 999px;
        padding: 10px 14px;
      }

      .section-heading {
        margin-bottom: 14px;
      }

      .eyebrow {
        margin: 0 0 8px;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 12px;
        color: var(--color-muted);
      }

      section {
        margin-top: 28px;
      }

      .stack { display: grid; gap: 12px; }
      .card {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        border-radius: var(--radius);
        padding: 16px;
      }

      .service-card {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
      }

      .service-card p, .team-card p, .contact-panel p, footer p {
        margin: 8px 0 0;
        color: var(--color-muted);
      }

      .stats-grid, .portfolio-grid {
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .stat-card, .portfolio-card {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        border-radius: var(--radius);
        padding: 16px;
      }

      .stat-card strong {
        display: block;
        font-size: 24px;
        color: var(--color-primary);
      }

      .team-card {
        display: grid;
        grid-template-columns: 52px 1fr;
        gap: 14px;
        align-items: center;
      }

      .avatar {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--color-primary);
        color: var(--color-text-on-primary);
        font-weight: 700;
      }

      .process-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
      }

      .process-list li {
        display: grid;
        grid-template-columns: 48px 1fr;
        gap: 12px;
        align-items: start;
        padding: 16px;
        border-radius: var(--radius);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
      }

      .process-list span {
        display: inline-grid;
        place-items: center;
        border-radius: 14px;
        background: var(--color-primary);
        color: var(--color-text-on-primary);
        min-height: 48px;
        font-weight: 700;
      }

      .contact-panel {
        padding: 18px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        border-radius: var(--radius);
      }

      .cta {
        display: block;
        margin-top: 28px;
        padding: 16px 20px;
        border-radius: 999px;
        background: var(--color-primary);
        color: var(--color-text-on-primary);
        text-align: center;
        font-weight: 700;
      }

      footer {
        margin-top: 28px;
        padding-bottom: 24px;
      }
    </style>
  </head>
  <body data-theme="${escapeHtml(themeName)}">
    <main>
      <header class="hero">
        <div class="logo-wrap">
          <img src="${escapeHtml(brief.assets.logoPath)}" alt="${escapeHtml(brief.businessName)} logo" />
          ${brief.optionalSections.statusLabel ? `<div class="status-pill">${escapeHtml(brief.optionalSections.statusLabel)}</div>` : ''}
        </div>
        <h1>${escapeHtml(brief.businessName)}</h1>
        <p class="tagline">${escapeHtml(brief.tagline)}</p>
        <ul class="quick-info">${quickInfoMarkup}</ul>
      </header>

      ${renderProofStats(brief)}

      ${renderServices(brief)}

      ${renderPortfolio(brief)}

      ${renderTechStack(brief)}

      ${renderProcessSteps(brief)}

      <section aria-labelledby="about-title">
        <div class="section-heading">
          <p class="eyebrow">About</p>
          <h2 id="about-title">Story</h2>
        </div>
        <article class="card">
          <p>${escapeHtml(brief.aboutText)}</p>
        </article>
      </section>

      ${renderTeam(brief)}

      <section aria-labelledby="hours-title">
        <div class="section-heading">
          <p class="eyebrow">Timing</p>
          <h2 id="hours-title">Opening Hours</h2>
        </div>
        <article class="card">
          <p>Mon-Fri: ${escapeHtml(brief.hours.mondayFriday)}</p>
          <p>Saturday: ${escapeHtml(brief.hours.saturday)}</p>
          <p>Sunday: ${escapeHtml(brief.hours.sunday)}</p>
          <p>Public Holidays: ${escapeHtml(brief.hours.publicHolidays)}</p>
        </article>
      </section>

      <section aria-labelledby="contact-title">
        <div class="section-heading">
          <p class="eyebrow">Reach out</p>
          <h2 id="contact-title">Contact</h2>
        </div>
        <div class="contact-panel">
          <p>${escapeHtml(brief.location.address)}</p>
          <div class="contact-links">${renderContactLinks(brief)}</div>
        </div>
      </section>

      <a class="cta" href="${escapeHtml(primaryCta.href)}"${primaryCta.external ? ' target="_blank" rel="noreferrer"' : ''}>${escapeHtml(primaryCta.label)}</a>

      <footer>
        <p>${escapeHtml(brief.businessName)} profile bundle.</p>
      </footer>
    </main>
  </body>
</html>`;
}

export { generateMockHtml };