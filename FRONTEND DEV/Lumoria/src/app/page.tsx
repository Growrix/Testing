import { screenshotRouteMap } from "@/data/screenshotRoutes";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-6 py-10">
      <h1 className="text-4xl font-semibold">Lumoria Replica Proxy</h1>
      <p className="max-w-3xl text-lg">
        The middleware proxies all page routes to the live Lumoria source so every
        referenced screenshot URL can be reproduced with matching layout and
        styling.
      </p>

      <section className="grid gap-3 md:grid-cols-2">
        {screenshotRouteMap.map((entry) => (
          <a
            key={entry.screenshot}
            href={entry.path}
            className="rounded-xl border border-(--lumoria-color-border) bg-white px-4 py-3 transition hover:border-primary"
          >
            <p className="text-(--lumoria-color-secondary) font-semibold">
              {entry.path}
            </p>
            <p className="text-sm">{entry.screenshot}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
