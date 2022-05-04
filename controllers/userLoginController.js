import { userLoginService } from '../services/userLoginService.js';

export async function userLoginController(req, res) {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const userLogin = await userLoginService(email, name);

  if (!userLogin) {
    return res.status(500).json({ error: 'Login failed' });
  }

  return res.json(userLogin);
}