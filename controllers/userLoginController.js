import { userLoginService } from '../services/userLoginService.js';

export async function userLoginController(req, res) {
  const { email, name } = req.body;

  const userLogin = await userLoginService(email, name);

  return res.status(201).json(userLogin);
}