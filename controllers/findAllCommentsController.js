import { findAllCommentsService } from '../services/findAllCommentsService.js';

export async function findAllCommentsController(req, res) {
  const comments = await findAllCommentsService();

  if (comments.error) {
    return res.status(500).json(comments.error);
  }

  return res.render('comments', {
    title: 'Test | Comments',
    comments
  });
}

