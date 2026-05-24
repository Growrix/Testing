export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  icon: string;
  name: string;
  description: string;
  price: string;
  suffix: string;
  tag?: string;
};

export type ContactItem = {
  icon: string;
  text: string;
};

export const airconProfile = {
  name: "CoolBreeze AC Services",
  displayName: {
    primary: "Cool",
    accent: "Breeze",
    secondary: "AC Services",
  },
  heroCopy:
    "Installation, servicing & repair for all AC brands. Homes & offices across Dhaka.",
  heroMeta: "⭐ 4.9 · 520 reviews · 12 years in business",
  setTemp: "18°C",
  stats: [
    { value: "24/7", label: "Emergency" },
    { value: "Same", label: "Day Service" },
    { value: "All", label: "Brands" },
    { value: "Free", label: "Inspection" },
  ] satisfies Stat[],
  services: [
    {
      icon: "🔧",
      name: "AC Installation",
      description: "Split, window & cassette units — all brands",
      price: "৳2,000",
      suffix: "from",
      tag: "Includes free bracket",
    },
    {
      icon: "🧹",
      name: "AC Servicing & Clean",
      description: "Deep clean, filter wash, gas check, health report",
      price: "৳800",
      suffix: "per unit",
      tag: "Most Popular",
    },
    {
      icon: "❄️",
      name: "Gas Refill (Regas)",
      description: "R22, R32, R410A — all refrigerant types",
      price: "৳1,500",
      suffix: "from",
    },
    {
      icon: "⚡",
      name: "AC Repair",
      description: "PCB, compressor, fan motor, drainage — all faults",
      price: "৳1,000",
      suffix: "from",
    },
    {
      icon: "🔄",
      name: "AC Relocation",
      description: "Uninstall, move, reinstall at new location",
      price: "৳2,500",
      suffix: "from",
    },
  ] satisfies Service[],
  promo: {
    title: "❄️ Full Service Package",
    description:
      "Deep clean + gas top-up + electrical check + 3-month warranty. Perfect before summer.",
    price: "৳1,800",
    previousPrice: "Was ৳2,800 — Save ৳1,000",
    primaryCta: "Book Summer Service",
    secondaryCta: "📞 Call for same-day slot",
  },
  brands: [
    "General",
    "Samsung",
    "LG",
    "Gree",
    "Midea",
    "Daikin",
    "Sharp",
    "Carrier",
    "All brands",
  ],
  included: [
    "Full inspection",
    "Written report",
    "Genuine parts",
    "90-day warranty",
    "Tidy clean-up",
    "Follow-up call",
  ],
  contact: [
    { icon: "📞", text: "+880 1700-000000" },
    { icon: "💬", text: "WhatsApp (send a photo of your AC)" },
    { icon: "📍", text: "Serves all Dhaka & Narayanganj" },
    { icon: "⏰", text: "8am–9pm · Emergency 24/7" },
  ] satisfies ContactItem[],
  footer: "© 2025 CoolBreeze AC Services · Licensed HVAC Technicians · Dhaka",
  builderBar: "Built By Growrix OS",
} as const;
