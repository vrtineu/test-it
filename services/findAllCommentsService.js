import axios from "axios";

import { AppError } from "../errors/AppError.js";

export async function findAllCommentsService() {
  const url = `http://${process.env.EXTERNAL_IP}/busca_comentarios`;

  const options = {
    method: 'POST',
    url,
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    throw new AppError(error);
  }
}