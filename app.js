import express from "express";
import 'express-async-errors'
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { AppError } from "./errors/AppError.js";
import indexRouter from "./routes/index.js";

const app = express();

app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), "public")));

app.use("/", indexRouter);

app.use((err, _req, res, _next) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
		});
	}

	return res.status(500).json({
		message: `Internal server error: ${err.message}`,
	});
});

export default app;
