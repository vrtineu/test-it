import axios from "axios";

export async function addNewCommentService(id, comment) {
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
    return { error };
  }
}