import { FastifyReply } from "fastify";
//* Helper function to format success response
export const successResponse = (
  reply: FastifyReply,
  statusCode: number = 200,
  data: any
) => {
  return reply
    .status(statusCode)
    .send({ status: statusCode, success: true, data });
};

//* Helper function to format error response
export const errorResponse = (
  reply: FastifyReply,
  statusCode: number,
  message: string,
  data: any
) => {
  console.log({ message, data }); //* Log error details ...
  return reply
    .status(statusCode)
    .send({ status: statusCode, success: false, error: message, data });
};
