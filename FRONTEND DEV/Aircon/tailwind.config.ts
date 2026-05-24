import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-page-bg)",
        app: "var(--color-app-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accentStrong: "var(--color-accent-strong)",
        accentSoft: "var(--color-accent-soft)",
        heading: "var(--color-text-heading)",
        body: "var(--color-text-body)",
        muted: "var(--color-text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        panel: "var(--radius-panel)",
        button: "var(--radius-button)",
        chip: "var(--radius-chip)",
      },
      spacing: {
        section: "var(--space-section-top)",
        page: "var(--space-page-x)",
        card: "var(--space-card)",
      },
    },
  },
};

export default config;
