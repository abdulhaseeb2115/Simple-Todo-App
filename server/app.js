import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error.js";
import todoRoutes from "./routes/todoRoute.js";

dotenv.config({ path: "./config/config.env" }); // process.env path

const app = express(); // create app

// use packages
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
		exposedHeaders: ["Set-Cookie", "Date", "ETag"],
	})
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/todo", todoRoutes); // todo routes

app.use(errorMiddleware); // error middleware

export default app;
