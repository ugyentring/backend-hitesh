import dotenv from "dotenv";
dotenv.config({
  path: "./env/index",
});

import connectDB from "./db/index.js";
import express from "express";

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
