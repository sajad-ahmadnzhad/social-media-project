import path from "path";
import app from "./app";
import { config } from "dotenv";
config({path: path.join(__dirname , '.env')});
const PORT = Number(process.env.PORT) || 5000;

const start = async () => {
  try {
    await app.listen({ port: PORT });
  } catch (error) {
    app.log.error(error);
  }
};

const run = () => {
  start();
};

run();
