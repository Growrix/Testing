import { serveSnapshot } from "@/lib/snapshotResponse";

type RouteContext = {
  params: Promise<{ slug: string[] }>;
};

function toRoutePath(slug: string[]): string {
  if (!slug || slug.length === 0) {
    return "/";
  }

  return `/${slug.join("/")}`;
}

export async function GET(_: Request, context: RouteContext): Promise<Response> {
  const { slug } = await context.params;
  return serveSnapshot(toRoutePath(slug));
}

export async function HEAD(_: Request, context: RouteContext): Promise<Response> {
  const { slug } = await context.params;
  const response = await serveSnapshot(toRoutePath(slug));

  return new Response(null, {
    status: response.status,
    headers: response.headers,
  });
}
