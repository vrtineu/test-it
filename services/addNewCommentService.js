import axios from "axios";
import { AppError } from "../errors/AppError.js";

export async function addNewCommentService(id, comment) {
  if (!id || !comment) {
    throw new Error("Missing parameters");
  }

  const options = {
    method: 'POST',
    url: `${process.env.API_URL}/add_comentario`,
    data: {
      id_usuario: id,
      comentario: comment
    }
  };

  try {
    await axios(options);

    return { success: true };
  } catch (error) {
    throw new AppError(error);
  }
}