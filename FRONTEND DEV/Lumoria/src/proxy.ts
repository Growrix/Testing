import { NextRequest, NextResponse } from "next/server";

const LUMORIA_ORIGIN = "https://lumoria.wpenginepowered.com";

const PASSTHROUGH_PREFIXES = ["/_next", "/api"];
const PASSTHROUGH_PATHS = new Set(["/favicon.ico", "/robots.txt", "/sitemap.xml"]);

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const shouldPassthrough =
    PASSTHROUGH_PATHS.has(pathname) ||
    PASSTHROUGH_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (shouldPassthrough) {
    return NextResponse.next();
  }

  const normalizedPath =
    pathname === "/" || pathname.endsWith("/") || pathname.includes(".")
      ? pathname
      : `${pathname}/`;

  const upstreamUrl = new URL(`${normalizedPath}${search}`, LUMORIA_ORIGIN);
  return NextResponse.rewrite(upstreamUrl);
}

export const config = {
  matcher: ["/:path*"],
};
