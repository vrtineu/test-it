import { Router } from "express";
import { userLoginController } from "../controllers/userLoginController.js";

const userRoutes = Router();

userRoutes.get("/", function (req, res, next) {
  res.render("login", { title: "Test | Login" });
});

userRoutes.post('/login', userLoginController)

export { userRoutes };
