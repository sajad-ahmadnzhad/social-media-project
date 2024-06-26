import fastify from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import path from "path";
import fastifyStatic from "@fastify/static";
import { setHeaders } from "./middlewares/headers";
import errorHandler from "./middlewares/errorHandler";
const app = fastify({ logger: true });

app.addHook("onRequest", setHeaders);

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

// TODO: Needed Feature
app.setErrorHandler(errorHandler);

export default app;
