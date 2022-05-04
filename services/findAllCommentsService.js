import axios from "axios";
import { AppError } from "../errors/AppError.js";

export async function findAllCommentsService() {
  const options = {
    method: 'POST',
    url: `${process.env.API_URL}/busca_comentarios`
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}