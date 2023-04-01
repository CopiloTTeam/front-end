import api from "../services/axios.config";

//login
export const login = async (data:any) => {
  try {
    const response = await api.post('/login', data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const dadosUsuario = async (id:any) => {
    try {
        const response = await api.get(`listar/funcionario/${id}`);
        return response;
    } catch (error){
        console.error(error);
    }
}

export const dadosTitulos = async () => {
  try {
<<<<<<< Updated upstream
      const response = await api.get(`/listar/titulo`);
=======
      const response = await api.get(`/listar/titulo`,  {
        timeout: 5000
      });
>>>>>>> Stashed changes
      return response;
  } catch (error){
      console.error(error);
  }
}

export const dadosClientes = async () => {
  try {
<<<<<<< Updated upstream
      const response = await api.get(`/listar/cliente`);
=======
      const response = await api.get(`/listar/cliente`,  {
        timeout: 5000
      });
>>>>>>> Stashed changes
      return response;
  } catch (error){
      console.error(error);
  }
<<<<<<< Updated upstream
}
=======
}

export const gerenciarTitulo = async (id:any) => {
  try {
      const response = await api.get(`/listar/titulo/${id}`,  {
        timeout: 5000
      });
      return response;
  } catch (error){
      console.error(error);
  }
}
>>>>>>> Stashed changes
