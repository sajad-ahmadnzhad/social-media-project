import { FastifyReply, FastifyRequest } from "fastify";

export const setHeaders = async (req: FastifyRequest, reply: FastifyReply) => {
  reply.header("access-control-allow-origin", "*");
  reply.header("access-control-allow-methods", "GET,POST,PUT,DELETE");
  reply.header("access-control-allow-headers", "Content-Type, Authorization");
};
