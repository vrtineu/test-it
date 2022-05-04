import { Router } from "express";

import { commentsRoutes } from "./comments.routes.js";
import { userRoutes } from "./user.routes.js";

const router = Router();

router.use('/', userRoutes);
router.use('/comments', commentsRoutes);

export default router;
