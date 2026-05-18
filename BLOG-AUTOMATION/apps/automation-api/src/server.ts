import { createApp } from "./app";

const port = Number(process.env.APP_PORT ?? 4010);
const app = createApp();

app.listen(port, () => {
  console.log(`BLOG-AUTOMATION automation API listening on http://localhost:${port}`);
});