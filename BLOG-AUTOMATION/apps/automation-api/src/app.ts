import express, { type Request, type Response } from "express";
import { type RouteContract } from "@blog-automation/contracts";
import { acceptedEnvelope, okEnvelope } from "@blog-automation/shared";
import { automationApiRouteCatalog, buildScaffoldPayload } from "./route-catalog";

function registerRoute(app: express.Express, route: RouteContract) {
  const handler = (request: Request, response: Response) => {
    const briefIdParam = Array.isArray(request.params.id) ? request.params.id[0] : request.params.id;
    const payload = buildScaffoldPayload(route, { briefId: briefIdParam });
    response.status(route.method === "GET" ? 200 : 202).json(
      acceptedEnvelope(payload, {
        capability: route.capability,
        routeId: route.id
      })
    );
  };

  if (route.method === "GET") {
    app.get(route.path, handler);
    return;
  }

  app.post(route.path, handler);
}

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_request, response) => {
    response.status(200).json(
      okEnvelope({
        service: "automation-api",
        status: "healthy",
        milestone: "milestone-1"
      })
    );
  });

  for (const route of automationApiRouteCatalog) {
    registerRoute(app, route);
  }

  return app;
}