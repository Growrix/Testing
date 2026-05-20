import { serveSnapshot } from "@/lib/snapshotResponse";

export async function GET(): Promise<Response> {
  return serveSnapshot("/");
}

export async function HEAD(): Promise<Response> {
  const response = await serveSnapshot("/");
  return new Response(null, {
    status: response.status,
    headers: response.headers,
  });
}
