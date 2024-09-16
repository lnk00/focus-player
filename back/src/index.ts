import { serve } from "@hono/node-server";
import { Hono } from "hono";
import spotify from "./spotify";

const app = new Hono();

app.get("/", (c) => c.text("Focus player api v1.0.0"));
app.route("/spotify", spotify);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
