import { Router } from "express";

import { addNewCommentController } from "../controllers/addNewCommentsController.js";
import { findAllCommentsController } from "../controllers/findAllCommentsController.js";

const commentsRoutes = Router();

commentsRoutes.get('/', findAllCommentsController);
commentsRoutes.post('/', addNewCommentController);

export { commentsRoutes };
