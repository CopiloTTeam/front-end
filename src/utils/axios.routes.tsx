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