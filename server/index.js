import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

let app = express();
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.redirect("http://localhost:5173");
});

export default app;
