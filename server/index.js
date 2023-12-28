import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userAuthRouter from "./routes/auth.router.js"
import dbConnect from "./config/dbConnect.js";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


dbConnect();

app.use(
  cors({
    origin:"https://landingmernapp.netlify.app",
    credentials: true,
  })
);

app.use("/user/auth/", userAuthRouter);


app.listen(5000, () => {
  console.log("Server Up at 5000");
});