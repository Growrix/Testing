import path from "node:path";
import { readFile } from "node:fs/promises";

const SNAPSHOT_ROOT = path.join(
  /*turbopackIgnore: true*/ process.cwd(),
  "public",
  "lumoria-pages"
);

function normalizeRoutePath(routePath: string): string {
  const withoutQuery = routePath.split("?")[0] ?? "";
  const withoutHash = withoutQuery.split("#")[0] ?? "";
  const clean = withoutHash.trim();

  if (!clean || clean === "/") {
    return "/";
  }

  return `/${clean.replace(/^\/+|\/+$/g, "")}/`;
}

function snapshotFilePath(routePath: string): string {
  if (routePath === "/") {
    return path.join(SNAPSHOT_ROOT, "index.html");
  }

  const parts = routePath.slice(1, -1).split("/");
  return path.join(SNAPSHOT_ROOT, ...parts, "index.html");
}

function htmlResponse(html: string, status: number): Response {
  return new Response(html, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export async function serveSnapshot(routePath: string): Promise<Response> {
  const normalized = normalizeRoutePath(routePath);

  try {
    const file = snapshotFilePath(normalized);
    const html = await readFile(file, "utf8");
    const status = normalized === "/404/" ? 404 : 200;
    return htmlResponse(html, status);
  } catch {
    try {
      const fallback = await readFile(snapshotFilePath("/404/"), "utf8");
      return htmlResponse(fallback, 404);
    } catch {
      return htmlResponse(
        "<!doctype html><html><head><title>Not Found</title></head><body><h1>Snapshot not found</h1></body></html>",
        404
      );
    }
  }
}
