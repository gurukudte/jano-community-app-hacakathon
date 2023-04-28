import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/api", (req, res) => {
  res.status(200).json("Welcome to jano api");
});
app.get("/", (req, res) => {
  res.status(200).json("Welcome to JANO");
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
