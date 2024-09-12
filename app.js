import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import sellerRouter from "./routes/sellers.js";
import buyerRouter from "./routes/buyers.js";

export const app = express();

config({ path: "./data/config.env" });

// Using middlewares
app.use(express.json());
app.use(cookieParser());



app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//using routes
app.use("/api/v1/sellers", sellerRouter);
app.use("/api/v1/buyers", buyerRouter);

