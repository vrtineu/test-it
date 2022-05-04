import { addNewCommentService } from '../services/addNewCommentService.js';

export async function addNewCommentController(req, res) {
  const { id, comment } = req.body;

  if (!id || !comment) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const addNewComment = await addNewCommentService(id, comment);

  if (addNewComment.error) {
    return res.status(500).json(addNewComment.error);
  }

  return res.json(addNewComment);
}