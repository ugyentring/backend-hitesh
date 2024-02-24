import dotenv from "dotenv";
dotenv.config({
  path: "./env/index",
});

import connectDB from "./db/index.js";

connectDB();
