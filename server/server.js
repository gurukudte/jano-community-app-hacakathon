import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connect.js";
import { authRouter } from "./components/index.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/auth", authRouter);
app.get("/api", (req, res) => {
  res.status(200).json("Welcome to jano api");
});
app.get("/", (req, res) => {
  res.status(200).json("Welcome to JANO");
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
  connectDB();
});
