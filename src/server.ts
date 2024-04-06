import path from "path";
import app from "./app";
import { config } from "dotenv";
import { Sequelize } from "@sequelize/core";
const PORT = Number(process.env.PORT) || 5000;

const productionMode = process.env.NODE_ENV == "production";

if (!productionMode) {
  config({ path: path.join(__dirname, ".env") });
}
// * Start Server
const start = async () => {
  try {
    await app.listen({ port: PORT });
  } catch (error) {
    app.log.error(error);
  }
};
// * Connect to DB
const connectToDB = async () => {
  try {
    const { USER, PASS, HOST, DATABASE } = process.env;

    const connection = new Sequelize({
      username: USER,
      password: PASS,
      host: HOST,
      database: DATABASE,
      dialect: "mysql",
      logging: false,
    });

    await connection.authenticate();
    console.log("Connect to database successfully");
  } catch (error) {
    console.log("Connect to database error");
    app.log.error(error);
    process.exit(1)
  }
};

const run = async () => {
  start();
  await connectToDB();
};

run();
