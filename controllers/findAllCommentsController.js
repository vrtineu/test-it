import { findAllCommentsService } from '../services/findAllCommentsService.js';

export async function findAllCommentsController(req, res) {
  const comments = await findAllCommentsService();

  return res.render('comments', {
    title: 'Test | Comments',
    comments
  });
}

