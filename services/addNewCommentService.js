import axios from "axios";

import { AppError } from "../errors/AppError.js";

export async function addNewCommentService(id, comment) {
  if (!id || !comment || !comment.length) {
    throw new Error("Missing parameters");
  }

  const url = `http://${process.env.EXTERNAL_IP}/add_comentario`;

  const options = {
    method: 'POST',
    url,
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