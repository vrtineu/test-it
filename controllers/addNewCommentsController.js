import { addNewCommentService } from '../services/addNewCommentService.js';

export async function addNewCommentController(req, res) {
  const { id, comment } = req.body;

  const addNewComment = await addNewCommentService(id, comment);

  return res.json(addNewComment);
}