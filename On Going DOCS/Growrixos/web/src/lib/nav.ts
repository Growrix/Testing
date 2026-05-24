export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SaaS Applications", href: "/services/saas-applications", description: "Product strategy + engineering for new and rebuilt SaaS." },
      { label: "Websites", href: "/services/websites", description: "Design-forward marketing sites built for conversion." },
      { label: "HTML Business Profiles", href: "/services/html-business-profiles", description: "Category-based HTML business profile templates with fast purchase paths." },
      { label: "MCP Servers", href: "/services/mcp-servers", description: "Production-ready Model Context Protocol servers for agents." },
      { label: "Automation", href: "/services/automation", description: "Operational systems that remove repetitive work." },
      { label: "SEO Service", href: "/additional-services", description: "One-time Technical SEO, analytics, and setup services." },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  Services: [
    { label: "SaaS Applications", href: "/services/saas-applications" },
    { label: "Websites", href: "/services/websites" },
    { label: "HTML Business Profiles", href: "/services/html-business-profiles" },
    { label: "MCP Servers", href: "/services/mcp-servers" },
    { label: "Automation", href: "/services/automation" },
    { label: "SEO Service", href: "/additional-services" },
  ],
  Products: [
    { label: "HTML Business Profiles", href: "/products?category=html-business-profiles" },
    { label: "Templates", href: "/products?category=templates" },
    { label: "Ready Websites", href: "/products?category=ready-websites" },
    { label: "B2B SaaS", href: "/products?industry=b2b-saas" },
    { label: "Mobile Apps", href: "/products?industry=mobile-apps" },
    { label: "Service Businesses", href: "/products?industry=service-businesses" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "AI Growrix OS", href: "/ai-concierge" },
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "WhatsApp", href: "https://wa.me/8801986925425" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export const WHATSAPP_HREF = "https://wa.me/8801986925425";
