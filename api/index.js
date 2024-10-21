import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "console";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(5000, () => {
  console.log("Server is listening on port 5000 !!");
});
