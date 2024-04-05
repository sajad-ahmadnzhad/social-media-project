import fastify from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import path from "path";
import fastifyStatic from "@fastify/static";
const app = fastify({ logger: true });

app.register(fastifyView, {
  engine: { ejs },
  root: path.join(__dirname, "views"),
});
app.register(fastifyStatic, {
  prefix: "/js",
  root: path.join(__dirname, "..", "public/js"),
  decorateReply: false,
});
app.register(fastifyStatic, {
  prefix: "/css",
  root: path.join(__dirname, "..", "public/css"),
  decorateReply: false,
});
app.register(fastifyStatic, {
  prefix: "/images",
  root: path.join(__dirname, "..", "public/images"),
  decorateReply: false,
});
app.register(fastifyStatic, {
  prefix: "/fonts",
  root: path.join(__dirname, "..", "public/fonts"),
  decorateReply: false,
});

app.get("/", (req, reply) => reply.view("index.ejs"));

export default app;
