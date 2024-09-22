require("dotenv").config();

import cors, { CorsOptions } from "cors";
import express, { Application } from "express";
import cookieParser from "cookie-parser";

const app: Application = express();
const url = `${process.env.BASE_URL}:${process.env.PORT}`;

const corsOptions: CorsOptions = {
  origin: "*",
};

app.set("trust proxy", true);
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is up and running" });
});

// start the server
app.listen(
  parseInt(process.env.PORT || "8081", 10),
  () => {
    console.info(`Server started`);
  }
);
