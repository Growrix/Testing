import { HomeParityContent } from "@/components/site/parity-home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  pathname: "/",
  description:
    "Production-ready Next.js template for automotive detailing services, product commerce, and inventory listing flows.",
});

export default function HomePage() {
  return <HomeParityContent />;
}
