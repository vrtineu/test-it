import axios from "axios"
import { AppError } from "../errors/AppError.js";

export async function userLoginService(email, name) {
  if (!email || !name) {
    throw new AppError("Missing parameters");
  }

  const options = {
    method: 'POST',
    url: `${process.env.API_URL}/cadastro`,
    data: {
      email,
      nome: name
    }
  }

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}