import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import { AppError } from "./errors/AppError.js";

const app = express();

app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), "public")));

app.use("/", indexRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

app.use((err, req, res, next) => {
	if (err instanceof AppError) {

	}
})

// app.use(function (err, req, res, next) {
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get("env") === "development" ? err : {};

// 	res.status(err.status || 500);
// 	res.render("error");
// });

export default app;
