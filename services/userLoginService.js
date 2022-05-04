import axios from "axios"

export async function userLoginService(email, name) {
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
  }
  catch (error) {
    return error;
  }
}