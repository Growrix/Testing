export type IconName =
  | "clock"
  | "phone"
  | "mail"
  | "map"
  | "search"
  | "menu"
  | "close"
  | "arrow-right"
  | "arrow-left"
  | "quote"
  | "snow"
  | "shield"
  | "repair"
  | "install"
  | "maintenance"
  | "commercial"
  | "air"
  | "check"
  | "share"
  | "chevron-down"
  | "briefcase"
  | "calc"
  | "star";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  items: NavItem[];
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryAction: NavItem;
  secondaryAction: NavItem;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: IconName;
  image: string;
  bulletPoints: string[];
  inclusions: string[];
  process: string[];
}

export interface WelcomeTab {
  id: string;
  label: string;
  intro: string;
  body: string[];
}

export interface PortfolioProject {
  title: string;
  category: string;
  image: string;
  summary: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  published: string;
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  image: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  note: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  copy: string;
}

export interface OfficeLocation {
  title: string;
  address: string;
  territory: string;
}

export interface CareerJob {
  index: string;
  title: string;
  date: string;
  location: string;
  type: string;
  summary: string;
  detail: string;
}

export interface TopLevelPage {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  kind:
    | "about-us"
    | "about-me"
    | "team-01"
    | "team-02"
    | "testimonials"
    | "pricing"
    | "calculator"
    | "partner"
    | "location"
    | "career"
    | "contact"
    | "appointment"
    | "services"
    | "portfolio"
    | "blog";
}

export interface SearchEntry {
  label: string;
  href: string;
  kind: string;
}

const images = {
  heroService:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
  heroInstall:
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80",
  heroCommercial:
    "https://images.unsplash.com/photo-1621905251189-08b45249ff6b?auto=format&fit=crop&w=1400&q=80",
  indoorUnit:
    "https://images.unsplash.com/photo-1621905252333-09f2b0b0b0c5?auto=format&fit=crop&w=1200&q=80",
  filterClean:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  officeTech:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  portraitOne:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  portraitTwo:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  portraitThree:
    "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=900&q=80",
  portraitFour:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  portraitFive:
    "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=900&q=80",
  portraitSix:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  installCrew:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  ducted:
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  tools:
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80",
  ceiling:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  serviceCall:
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  thermostat:
    "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=1200&q=80",
  maintenance:
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
  rooftop:
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  meeting:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  familyHome:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  backgroundFooter:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
};

export const brand = {
  name: "CoolPeak Aircon",
  tagline: "Brisbane climate specialists",
  phone: "(07) 3185 2440",
  emergencyPhone: "1300 020 240",
  email: "hello@coolpeakaircon.com.au",
  address: "18 Commercial Road, Fortitude Valley, Brisbane QLD 4006",
  hours: "Mon - Sat 8:00 - 18:00",
  footerHours: "Mon - Sat: 8 am - 6 pm, Sunday: Emergency callouts",
  socials: [
    { label: "Facebook", short: "f", href: "https://facebook.com" },
    { label: "X", short: "x", href: "https://x.com" },
    { label: "LinkedIn", short: "in", href: "https://linkedin.com" },
    { label: "YouTube", short: "yt", href: "https://youtube.com" },
  ],
  footerBackground: images.backgroundFooter,
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Residential care",
    title: "Air conditioning unit servicing and maintenance.",
    description:
      "Rapid diagnostics, filter restoration, and cooling-performance checks delivered by licensed Brisbane technicians.",
    image: images.heroService,
    primaryAction: { label: "Book now", href: "/request-appointment" },
    secondaryAction: { label: "Read details", href: "/services/servicing-maintenance" },
  },
  {
    eyebrow: "Split & ducted installs",
    title: "Clean installations for homes, townhouses, and small offices.",
    description:
      "We size the system properly, protect the finish, and hand over a quieter, more efficient climate setup.",
    image: images.heroInstall,
    primaryAction: { label: "Get quote", href: "/request-appointment" },
    secondaryAction: { label: "Our services", href: "/services" },
  },
  {
    eyebrow: "Commercial response",
    title: "Upgrade aging plant without wrecking your operating day.",
    description:
      "From tenancy fit-outs to light-commercial maintenance plans, CoolPeak keeps downtime controlled and predictable.",
    image: images.heroCommercial,
    primaryAction: { label: "Talk to us", href: "/contact" },
    secondaryAction: { label: "Commercial page", href: "/services/commercial-systems" },
  },
];

export const serviceHighlights = [
  {
    title: "Rapid service callouts",
    copy: "Same-day troubleshooting across Brisbane metro when cooling stops behaving.",
    icon: "repair" as IconName,
    href: "/services/repairs",
    accent: "blue",
  },
  {
    title: "Residential installs",
    copy: "Split-system and ducted installs designed around the way your rooms actually heat up.",
    icon: "install" as IconName,
    href: "/services/installations",
    accent: "gold",
  },
  {
    title: "Maintenance plans",
    copy: "Seasonal servicing, coil cleaning, and performance checks that extend equipment life.",
    icon: "maintenance" as IconName,
    href: "/services/servicing-maintenance",
    accent: "blue",
  },
];

export const welcomeTabs: WelcomeTab[] = [
  {
    id: "why-us",
    label: "Why choose us",
    intro: "We keep the Hardman reference rhythm but rebuild it around a real Brisbane aircon offer.",
    body: [
      "Licensed residential-first air conditioning specialists with clean install standards.",
      "System sizing and upgrade advice grounded in comfort, not over-selling capacity.",
      "Fast quoting, practical maintenance plans, and clearer handover instructions.",
      "Trusted by homeowners, landlords, and small business operators across Brisbane.",
    ],
  },
  {
    id: "coverage",
    label: "What we cover",
    intro: "CoolPeak handles both installation and aftercare without switching crews halfway through the job.",
    body: [
      "Split-system installation and replacement.",
      "Ducted zoning upgrades and controller refreshes.",
      "Preventive servicing, filter cleaning, and efficiency tuning.",
      "Commercial climate control support for tenancy and retail fit-outs.",
    ],
  },
  {
    id: "efficiency",
    label: "Energy focus",
    intro: "Performance matters more than brute cooling capacity, so we plan for the room and the running cost.",
    body: [
      "Home and office load reviews before installation.",
      "Airflow balancing to reduce hot spots and short cycling.",
      "Advice on timers, zoning, and filter cadence to keep power use sane.",
      "Maintenance reminders that stop simple neglect becoming a callout.",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "repairs",
    title: "Air conditioning repair",
    shortTitle: "Repair services",
    tagline: "Diagnose faults quickly and stabilise cooling before the heat gets worse.",
    summary:
      "From noisy indoor units to poor airflow and short cycling, we isolate the fault, explain the fix, and get you back online with less guesswork.",
    icon: "repair",
    image: images.serviceCall,
    bulletPoints: [
      "Fault diagnosis for wall splits and ducted systems",
      "Thermostat, drainage, and airflow checks",
      "Repair-first recommendations before replacement",
    ],
    inclusions: [
      "Operational testing and airflow review",
      "Condensate and coil inspection",
      "Replacement recommendations when repair spend stops making sense",
    ],
    process: [
      "Inspect the unit and isolate the most likely failure point.",
      "Explain the repair path, parts risk, and practical timeline.",
      "Complete the fix and retest the system under load.",
    ],
  },
  {
    slug: "installations",
    title: "Residential installations",
    shortTitle: "Residential service",
    tagline: "Install split and ducted systems with a cleaner finish and smarter sizing.",
    summary:
      "We survey the home, select sensible unit sizes, and install with close attention to drainage, placement, and noise.",
    icon: "install",
    image: images.heroInstall,
    bulletPoints: [
      "Split-system supply and installation",
      "Multi-room and ducted system planning",
      "Replacement of outdated or underperforming units",
    ],
    inclusions: [
      "Room-by-room capacity guidance",
      "Neat conduit and bracket finishing",
      "Client handover with controller walkthrough",
    ],
    process: [
      "Confirm the best unit type and position for the space.",
      "Install indoor and outdoor components with tidy cable and drain runs.",
      "Test, balance, and walk through operation before sign-off.",
    ],
  },
  {
    slug: "servicing-maintenance",
    title: "Servicing and maintenance",
    shortTitle: "Maintenance installation",
    tagline: "Protect airflow, efficiency, and indoor air quality with scheduled servicing.",
    summary:
      "Seasonal maintenance keeps small issues from turning into breakdowns during the hottest weeks of the year.",
    icon: "maintenance",
    image: images.filterClean,
    bulletPoints: [
      "Deep clean of accessible components and filters",
      "Performance checks for temperature, drainage, and sound",
      "Maintenance plans for landlords and owner-occupiers",
    ],
    inclusions: [
      "Filter clean and hygiene review",
      "Drain and condensate assessment",
      "Operating pressure and control checks",
    ],
    process: [
      "Inspect the system, usage pattern, and immediate hygiene concerns.",
      "Clean and tune the unit to restore airflow and efficiency.",
      "Leave a clear service note and recommended next interval.",
    ],
  },
  {
    slug: "ducted-systems",
    title: "Ducted air systems",
    shortTitle: "Ducted systems",
    tagline: "Whole-home comfort with zoning, quieter operation, and cleaner ceiling integration.",
    summary:
      "Ducted systems suit larger homes and renovation projects where comfort needs to cover more than one or two rooms.",
    icon: "air",
    image: images.ducted,
    bulletPoints: [
      "Zoning and controller upgrades",
      "Whole-home installation planning",
      "Return air and grille placement guidance",
    ],
    inclusions: [
      "Ceiling access planning and layout review",
      "Zone configuration and programming",
      "Operational walkthrough for the whole household",
    ],
    process: [
      "Assess ceiling space, room groupings, and comfort priorities.",
      "Install duct runs, controller, and outlets with a tidy ceiling finish.",
      "Balance zones and verify even performance across the home.",
    ],
  },
  {
    slug: "commercial-systems",
    title: "Commercial systems",
    shortTitle: "Commercial service",
    tagline: "Light-commercial climate control for offices, retail, and fit-out projects.",
    summary:
      "We work with tenancy programs, retail upgrades, and office environments that need downtime managed carefully.",
    icon: "commercial",
    image: images.meeting,
    bulletPoints: [
      "Retail and office fit-out cooling plans",
      "Maintenance scheduling around trading hours",
      "Practical upgrade pathways for aging plant",
    ],
    inclusions: [
      "Site walk and access planning",
      "Phased installation recommendations",
      "Post-install testing and briefing for the site team",
    ],
    process: [
      "Review occupancy, plant condition, and installation constraints.",
      "Plan the works around business continuity and access windows.",
      "Complete the upgrade and confirm controls, noise, and coverage.",
    ],
  },
  {
    slug: "air-quality-upgrades",
    title: "Air quality upgrades",
    shortTitle: "Airflow improvement",
    tagline: "Improve comfort and airflow perception with filter, controller, and circulation upgrades.",
    summary:
      "Not every comfort problem needs a full replacement. Sometimes filtration, zoning, or controller upgrades shift the result enough on their own.",
    icon: "shield",
    image: images.thermostat,
    bulletPoints: [
      "Controller and smart scheduling upgrades",
      "Filter strategy for allergy-sensitive homes",
      "Comfort tuning for rooms that heat up faster than the rest",
    ],
    inclusions: [
      "Usage pattern review",
      "Targeted recommendations instead of blanket replacement",
      "Post-upgrade comfort and settings handover",
    ],
    process: [
      "Review comfort complaints and equipment behaviour.",
      "Choose the upgrade path that solves the biggest issue first.",
      "Implement and tune the settings with the household or site team.",
    ],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Paddington split-system refresh",
    category: "Residential",
    image: images.familyHome,
    summary: "Two-level home fitted with quieter wall units and improved bedroom coverage.",
  },
  {
    title: "New Farm boutique office fit-out",
    category: "Commercial",
    image: images.meeting,
    summary: "Phased installation that protected business hours during a tenancy transition.",
  },
  {
    title: "Clayfield ducted zoning upgrade",
    category: "Ducted",
    image: images.ceiling,
    summary: "Controller and zoning update that reduced uneven cooling across the top floor.",
  },
  {
    title: "Ascot maintenance turnaround",
    category: "Maintenance",
    image: images.filterClean,
    summary: "Heavy filter and coil clean for a rental property before summer occupancy.",
  },
  {
    title: "South Bank rooftop package review",
    category: "Commercial",
    image: images.rooftop,
    summary: "Early-stage condition review and staged replacement plan for a busy dining venue.",
  },
  {
    title: "Tarragindi allergy-response airflow tune",
    category: "Air quality",
    image: images.maintenance,
    summary: "Controller reset and filtration upgrade to improve comfort in a family home.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alex Denham",
    role: "Homeowner",
    company: "New Farm",
    quote:
      "CoolPeak kept the install tidy, explained the controller properly, and the bedroom finally cools without the unit howling all night.",
    image: images.portraitOne,
    rating: 5,
  },
  {
    name: "Julia Dianne",
    role: "Property manager",
    company: "Fortitude Valley",
    quote:
      "They handled tenant access cleanly and gave us a practical maintenance note we could actually file and reuse.",
    image: images.portraitFour,
    rating: 5,
  },
  {
    name: "Jason David",
    role: "Retail operator",
    company: "South Brisbane",
    quote:
      "The crew planned around opening hours and left us with less downtime than we expected.",
    image: images.portraitSix,
    rating: 5,
  },
  {
    name: "Denz Alex",
    role: "Landlord",
    company: "Clayfield",
    quote:
      "Fast quote, no nonsense on the replacement recommendation, and the property was cool again before the next inspection.",
    image: images.portraitTwo,
    rating: 4,
  },
  {
    name: "Kim Lee",
    role: "Apartment owner",
    company: "Teneriffe",
    quote:
      "The tech talked me out of overspending on a bigger unit and sized the room properly instead.",
    image: images.portraitFour,
    rating: 5,
  },
  {
    name: "Denz James",
    role: "Studio manager",
    company: "West End",
    quote:
      "Good communication, good finish, and a much quieter system than the old install.",
    image: images.portraitFive,
    rating: 5,
  },
  {
    name: "Alex D. Denz",
    role: "Facilities coordinator",
    company: "Milton",
    quote:
      "The maintenance checklist was clear enough that we actually changed our recurring service schedule afterwards.",
    image: images.portraitOne,
    rating: 5,
  },
  {
    name: "Mel Carter",
    role: "Townhouse owner",
    company: "Greenslopes",
    quote:
      "They showed up when promised, protected the place, and cleaned up the install route before leaving.",
    image: images.portraitThree,
    rating: 5,
  },
  {
    name: "Nathan Fry",
    role: "Small business owner",
    company: "Woolloongabba",
    quote:
      "Straightforward commercial advice without trying to turn a simple upgrade into a full plant replacement.",
    image: images.portraitSix,
    rating: 4,
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Arima Leo", role: "Installation lead", phone: "972-885-5053", image: images.portraitOne },
  { name: "Arman Bangle", role: "Commissioning technician", phone: "972-885-5056", image: images.portraitTwo },
  { name: "Albert Fro", role: "Service specialist", phone: "972-885-5349", image: images.portraitThree },
  { name: "Albert Bubu", role: "Maintenance coordinator", phone: "122-885-5342", image: images.portraitFive },
  { name: "Melbom Foden", role: "Ducted systems fitter", phone: "122-885-5353", image: images.portraitSix },
  { name: "Jason Phan", role: "Roof and condenser installer", phone: "122-885-5367", image: images.portraitFour },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Seasonal tune-up",
    price: "$50",
    note: "Single-system clean, filter service, and airflow check for routine upkeep.",
  },
  {
    title: "Central home review",
    price: "$80",
    note: "Ducted or multi-room visit with zoning, controls, and temperature balancing review.",
  },
  {
    title: "Priority repair visit",
    price: "$150",
    note: "Urgent diagnosis appointment with a faster response window across metro Brisbane.",
    highlight: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is the standard turnaround for a home install?",
    answer:
      "Most split-system residential installs are completed inside a day once the unit and access details are confirmed. Ducted work varies with ceiling access, zoning, and finish expectations.",
  },
  {
    question: "Do you offer scheduled maintenance visits?",
    answer:
      "Yes. CoolPeak offers recurring seasonal maintenance for owner-occupiers, landlords, and small businesses that prefer predictable upkeep instead of reactive callouts.",
  },
  {
    question: "Can you inspect a system before recommending replacement?",
    answer:
      "Always. We inspect the operating condition first and only recommend replacement when repair cost, noise, efficiency, or reliability genuinely stop making sense.",
  },
  {
    question: "Do you work on small commercial sites?",
    answer:
      "Yes. We support fit-outs, office tenancies, and retail sites where install sequencing and after-hours access matter just as much as the hardware itself.",
  },
];

export const timelineEvents: TimelineEvent[] = [
  { date: "2018", title: "CoolPeak founded", copy: "Started with residential aircon installs in Brisbane's inner north." },
  { date: "2019", title: "Maintenance lane added", copy: "Expanded into scheduled servicing and landlord-ready maintenance plans." },
  { date: "2021", title: "Ducted team formed", copy: "Added dedicated ducted planning and controller-commissioning capacity." },
  { date: "2023", title: "Commercial support launched", copy: "Brought light-commercial support into the same service model for offices and retail." },
  { date: "2025", title: "Energy-first upgrade reviews", copy: "Formalised comfort and efficiency audits for aging systems before replacement." },
];

export const officeLocations: OfficeLocation[] = [
  {
    title: "Fortitude Valley office",
    address: "18 Commercial Road, Fortitude Valley QLD 4006",
    territory: "Central Brisbane and river suburbs",
  },
  {
    title: "Northside service hub",
    address: "62 Arlington Street, Clayfield QLD 4011",
    territory: "Northern suburbs and airport corridor",
  },
  {
    title: "Southside service hub",
    address: "24 Logan Road, Woolloongabba QLD 4102",
    territory: "Inner south and bayside response",
  },
  {
    title: "Commercial response desk",
    address: "81 Montague Road, South Brisbane QLD 4101",
    territory: "Fit-out and small commercial scheduling",
  },
];

export const careerJobs: CareerJob[] = [
  {
    index: "1",
    title: "Installation manager in house",
    date: "May 2, 2026",
    location: "Brisbane, Australia",
    type: "Full time",
    summary: "Lead complex residential installs, mentor junior fitters, and keep finish quality consistent.",
    detail:
      "This role coordinates installation sequencing, site prep, and client handover while staying hands-on across ducted and split-system projects.",
  },
  {
    index: "2",
    title: "Service technician",
    date: "May 9, 2026",
    location: "Fortitude Valley, Australia",
    type: "Full time",
    summary: "Diagnose faults, complete routine service work, and keep maintenance notes usable for the next visit.",
    detail:
      "You will manage same-day service calls, seasonal maintenance visits, and repair recommendations without hiding behind vague language.",
  },
  {
    index: "3",
    title: "Regional distribution manager",
    date: "May 14, 2026",
    location: "Brisbane metro",
    type: "Full time",
    summary: "Coordinate equipment movement, materials staging, and install-day readiness across multiple jobs.",
    detail:
      "You will work between suppliers, office staff, and technicians to keep installs moving without lost stock or late callouts.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "employee-productivity-and-air-conditioning",
    category: "Advice",
    title: "Employee productivity and air conditioning",
    summary:
      "Poor comfort control slows offices down faster than most operators admit. Better zoning and maintenance help more than you think.",
    image: images.meeting,
    published: "May 10, 2026",
    content: [
      "Temperature drift and uneven airflow change the way people use space. Teams start clustering around the few tolerable desks, meeting rooms overheat, and productivity falls in ways that never show up on a service ticket.",
      "The quickest win is not always replacement. In many offices the better move is controller tuning, return-air review, or a maintenance reset that restores airflow without major capital spend.",
      "If the site is expanding or reshuffling desks, revisit the zoning assumptions. A layout that worked two years ago can underperform badly after tenancy changes.",
    ],
  },
  {
    slug: "drops-in-productivity-in-cooler-zones",
    category: "Maintenance",
    title: "Drops in productivity often start with neglected airflow",
    summary:
      "The room may still technically cool, but clogged filters and low airflow make comfort unstable and noisy.",
    image: images.filterClean,
    published: "May 12, 2026",
    content: [
      "Most comfort complaints begin before the unit actually fails. Airflow fades, filters stay dirty too long, and people compensate by forcing lower temperatures and longer runtimes.",
      "That cycle costs more to run and still feels worse. Scheduled servicing fixes the hidden drag before it turns into a repair event during a heat spike.",
      "Property managers especially benefit from pre-summer visits because a quick clean is easier to schedule than a tenant emergency in January.",
    ],
  },
  {
    slug: "how-to-plan-an-aircon-upgrade",
    category: "Planning",
    title: "How to plan an aircon upgrade without overspending",
    summary:
      "A bigger unit is not automatically a better one. The room, solar load, usage pattern, and zoning plan matter more.",
    image: images.thermostat,
    published: "May 16, 2026",
    content: [
      "Upgrade planning should start with the actual discomfort pattern. Which rooms spike first? When does the system get noisy? When do the running costs jump?",
      "Answering those questions often points toward zoning, controller, or targeted replacement decisions instead of blanket system oversizing.",
      "When in doubt, aim for the most honest load estimate and the neatest installation path. Better planning produces quieter, more reliable comfort.",
    ],
  },
];

export const partnerLogos = [
  "Daikin",
  "Mitsubishi Electric",
  "Fujitsu",
  "ActronAir",
  "Panasonic",
  "Samsung",
  "Rinnai",
  "LG",
  "Haier",
  "TCL",
  "Temperzone",
  "Braemar",
];

export const topLevelPages: Record<string, TopLevelPage> = {
  "about-us": {
    slug: "about-us",
    label: "About us",
    eyebrow: "About us",
    title: "Welcome to our CoolPeak air conditioning company",
    description:
      "We bring the Hardman layout into a residential-first aircon business with cleaner trust cues, better route truthfulness, and owned branding.",
    kind: "about-us",
  },
  "about-me": {
    slug: "about-me",
    label: "About me",
    eyebrow: "About me",
    title: "I build calm, efficient climate systems for hard-working homes.",
    description:
      "A founder-style profile page for the lead technician, adapted from the original personal page pattern in the reference set.",
    kind: "about-me",
  },
  "team-01": {
    slug: "team-01",
    label: "Team 01",
    eyebrow: "Awesome team",
    title: "We have a dedicated team",
    description:
      "Crew grid with larger image cards and live share actions, mirroring the first team layout from the reference screenshots.",
    kind: "team-01",
  },
  "team-02": {
    slug: "team-02",
    label: "Team 02",
    eyebrow: "Awesome team",
    title: "We have a dedicated team",
    description:
      "Alternative circular team-card layout with direct-call badges, matching the second team page style.",
    kind: "team-02",
  },
  testimonials: {
    slug: "testimonials",
    label: "Testimonials",
    eyebrow: "Testimonials",
    title: "Client testimonials",
    description:
      "A complete testimonial grid with credible aircon-related social proof instead of filler quotes.",
    kind: "testimonials",
  },
  pricing: {
    slug: "pricing",
    label: "Pricing",
    eyebrow: "Pricing",
    title: "Service plans for different callout and maintenance needs.",
    description:
      "Straightforward price-entry plans for tune-ups, home reviews, and priority repairs.",
    kind: "pricing",
  },
  "costing-calculator": {
    slug: "costing-calculator",
    label: "Costing calculator",
    eyebrow: "Estimate budget",
    title: "Calculate your indicative project cost.",
    description:
      "Interactive budget estimator with area, service type, crew size, and urgency controls.",
    kind: "calculator",
  },
  partner: {
    slug: "partner",
    label: "Partner",
    eyebrow: "Partner",
    title: "Our official partners",
    description:
      "Manufacturer and equipment partner grid replacing generic marketplace logos with aircon-relevant brands.",
    kind: "partner",
  },
  location: {
    slug: "location",
    label: "Location",
    eyebrow: "Location",
    title: "Brisbane-wide location coverage",
    description:
      "Coverage map and office cards adapted from the reference location page.",
    kind: "location",
  },
  career: {
    slug: "career",
    label: "Career",
    eyebrow: "Career",
    title: "Join with our team",
    description:
      "Expandable jobs board with real open states instead of inert arrow buttons.",
    kind: "career",
  },
  contact: {
    slug: "contact",
    label: "Contact",
    eyebrow: "Contact",
    title: "Get in touch!",
    description:
      "Contact page with office card, structured enquiry form, and clear service-area messaging.",
    kind: "contact",
  },
  "request-appointment": {
    slug: "request-appointment",
    label: "Request appointment",
    eyebrow: "Book a visit",
    title: "Request an aircon appointment",
    description:
      "Lead form for installs, repairs, and maintenance visits with full success and failure states.",
    kind: "appointment",
  },
  services: {
    slug: "services",
    label: "Services",
    eyebrow: "Services",
    title: "You can depend on us to get a good service.",
    description:
      "Full service listing and route hub for repair, install, maintenance, and commercial work.",
    kind: "services",
  },
  portfolio: {
    slug: "portfolio",
    label: "Portfolio",
    eyebrow: "Our showcase",
    title: "You can depend on us to get a good portfolio.",
    description:
      "Filterable project gallery with real category states inspired by the homepage showcase.",
    kind: "portfolio",
  },
  blog: {
    slug: "blog",
    label: "Blog",
    eyebrow: "Blog",
    title: "Learn more from our blog.",
    description:
      "Listing page and slug routes for the article cards surfaced on the homepage.",
    kind: "blog",
  },
};

export const navigation: NavGroup[] = [
  {
    label: "Home",
    href: "/",
    items: [
      { label: "Homepage", href: "/", description: "Main service landing page" },
      { label: "About us", href: "/about-us", description: "Company overview" },
      { label: "Pricing", href: "/pricing", description: "Entry-level plans" },
    ],
  },
  {
    label: "Pages",
    items: [
      { label: "About me", href: "/about-me", description: "Founder profile" },
      { label: "Team 01", href: "/team-01", description: "Card team layout" },
      { label: "Team 02", href: "/team-02", description: "Round portrait layout" },
      { label: "Testimonials", href: "/testimonials", description: "Review grid" },
      { label: "Partner", href: "/partner", description: "Manufacturer partners" },
      { label: "Location", href: "/location", description: "Coverage map" },
      { label: "Career", href: "/career", description: "Open roles" },
      { label: "Contact", href: "/contact", description: "Contact form" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "All services", href: "/services", description: "Service hub" },
      ...services.map((service) => ({
        label: service.title,
        href: `/services/${service.slug}`,
        description: service.tagline,
      })),
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    items: [
      { label: "Blog index", href: "/blog", description: "All articles" },
      ...blogPosts.map((post) => ({
        label: post.title,
        href: `/blog/${post.slug}`,
        description: post.category,
      })),
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Portfolio", href: "/portfolio", description: "Project showcase" },
      { label: "Costing calculator", href: "/costing-calculator", description: "Indicative estimate" },
      { label: "Request appointment", href: "/request-appointment", description: "Lead capture form" },
    ],
  },
];

export const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact us", href: "/contact" },
  { label: "Blogs", href: "/blog" },
];

export const footerLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export const topLevelPageSlugs = Object.keys(topLevelPages);

export function getTopLevelPage(slug: string) {
  return topLevelPages[slug];
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const searchEntries: SearchEntry[] = [
  ...topLevelPageSlugs.map((slug) => ({
    label: topLevelPages[slug].label,
    href: `/${slug}`,
    kind: "Page",
  })),
  ...services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
    kind: "Service",
  })),
  ...blogPosts.map((post) => ({
    label: post.title,
    href: `/blog/${post.slug}`,
    kind: "Article",
  })),
  { label: "Homepage", href: "/", kind: "Page" },
];

export const calloutQuote = {
  eyebrow: "Testimonial",
  title: "We provide professional air conditioning installation.",
  copy:
    "Great service when we were in a real mess with our upstairs unit. CoolPeak diagnosed it quickly, fixed the worst of it first, and then planned the smarter long-term upgrade.",
  author: "Jason Lee",
  role: "Facilities lead",
};

export const founderProfile = {
  title: "I build calm, efficient climate systems for hard-working homes.",
  copy:
    "Our lead installer has spent years solving noisy, underperforming cooling setups in Brisbane homes and small commercial sites. The focus is practical comfort, cleaner installs, and advice that still makes sense after the sales pitch fades.",
  skills: [
    { label: "System planning", value: 95 },
    { label: "Energy efficiency", value: 90 },
    { label: "Maintenance strategy", value: 92 },
  ],
  image: images.portraitTwo,
};

export const aboutUsFeatures = [
  { icon: "shield" as IconName, title: "Licensed team", copy: "Qualified installers with cleaner handover standards." },
  { icon: "repair" as IconName, title: "Repair-first advice", copy: "We inspect before pushing full replacement." },
  { icon: "snow" as IconName, title: "Comfort focus", copy: "Sizing and tuning built around the actual room." },
  { icon: "commercial" as IconName, title: "Light-commercial support", copy: "Office and retail works with downtime planning." },
];

export const calculatorOptions = {
  serviceTypes: [
    { label: "Split-system install", multiplier: 1.25 },
    { label: "Ducted system install", multiplier: 2.2 },
    { label: "Repair and diagnostics", multiplier: 0.95 },
    { label: "Maintenance visit", multiplier: 0.7 },
  ],
  workerCounts: [
    { label: "1 technician", multiplier: 1 },
    { label: "2 technicians", multiplier: 1.35 },
    { label: "3 technicians", multiplier: 1.7 },
  ],
};

export const newsletterCopy = {
  title: "Subscribe to newsletter for getting updates.",
  description:
    "Low-noise maintenance reminders, upgrade timing advice, and seasonal cooling tips sent only when they are actually useful.",
};

export const estimateStrip = {
  title: "Call today for a free estimate!",
  subtitle: "Same-day appointments available",
  buttonLabel: `Call now: ${brand.emergencyPhone}`,
  background: images.tools,
};

export const logoBand = partnerLogos.slice(0, 6);

export const homeBlogCallout = {
  title: "Do you need help designing a cleaner service path for your next aircon project?",
  href: "/request-appointment",
  label: "Ask us now",
};
