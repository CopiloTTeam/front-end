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
      const response = await api.get(`/listar/titulo`);
      return response;
  } catch (error){
      console.error(error);
  }
}

export const dadosClientes = async () => {
  try {
      const response = await api.get(`/listar/cliente`);
      return response;
  } catch (error){
      console.error(error);
  }
}