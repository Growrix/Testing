import type { IconName } from "@/data/site";

const iconPaths: Record<IconName, string> = {
  clock: "M12 8v4l3 3M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.66 4.57a2 2 0 0 1-.57 1.72L7.9 11.3a16 16 0 0 0 4.8 4.8l1.29-1.3a2 2 0 0 1 1.72-.56l4.57.65A2 2 0 0 1 22 16.92Z",
  mail: "M4 4h16v16H4z M4 6l8 6 8-6",
  map: "M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  search: "m21 21-4.35-4.35 M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  "arrow-right": "M5 12h14M13 5l7 7-7 7",
  "arrow-left": "M19 12H5m7 7-7-7 7-7",
  quote: "M10 17H5l2-4H5V7h5v6L8 17Zm9 0h-5l2-4h-2V7h5v6l-2 4Z",
  snow: "M12 2v20M4.93 6l14.14 12M4.93 18 19.07 6M2 12h20",
  shield: "M12 3 5 6v6c0 5 3.5 7.74 7 9 3.5-1.26 7-4 7-9V6l-7-3Z",
  repair: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-3.3-3.3 2.4-1.8Z",
  install: "M12 3v6m0 0 3-3m-3 3-3-3M5 13v6h14v-6M8 19v-4h8v4",
  maintenance: "M4 13h4l2 5 4-12 2 7h4",
  commercial: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
  air: "M4 9c3 0 3 2 6 2s3-2 6-2 3 2 6 2M4 15c3 0 3 2 6 2s3-2 6-2 3 2 6 2",
  check: "M5 13l4 4L19 7",
  share: "M16 6a3 3 0 1 0-2.83-4H13a3 3 0 0 0 0 6 3 3 0 0 0 1.66-.5l-5.3 3.18a3 3 0 1 0 0 2.64l5.3 3.18A3 3 0 1 0 16 18a2.98 2.98 0 0 0-1.34.32l-5.3-3.18a3.02 3.02 0 0 0 0-2.28l5.3-3.18A2.98 2.98 0 0 0 16 10a3 3 0 1 0 0-6Z",
  "chevron-down": "m6 9 6 6 6-6",
  briefcase: "M4 7h16v12H4zM9 7V5h6v2M4 12h16",
  calc: "M7 3h10v18H7zM9 7h6M9 12h2m4 0h.01M9 16h2m4 0h.01",
  star: "m12 3 2.9 5.88 6.5.95-4.7 4.58 1.1 6.47L12 17.77 6.2 20.88l1.1-6.47L2.6 9.83l6.5-.95L12 3Z",
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
