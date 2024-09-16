import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("spotify"));

export default app;
