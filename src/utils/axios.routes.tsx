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
        const response = await api.get(`listar/funcionario/${id}`, {
          timeout: 5000
        });
        return response;
    } catch (error){
        console.error(error);
    }
}

export const dadosTitulos = async () => {
  try {
      const response = await api.get(`/listar/titulo`,  {
        timeout: 5000
      });
      return response;
  } catch (error){
      console.error(error);
  }
}

export const dadosClientes = async () => {
  try {
      const response = await api.get(`/listar/cliente`,  {
        timeout: 5000
      });
      return response;
  } catch (error){
      console.error(error);
  }
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

export const criarCliente = async (cliente: any) => {
  try {
      const response = await api.post(`/cadastrar/cliente`, cliente, {
        timeout: 5000
      });
      return response;
  } catch (error){
      console.error(error);
  }
}

export const criarTitulo = async (titulo: any) => {
  try {
    // const cliente = await api.get(`/listar/clientecpf/${titulo.cpf}`)
      const response = await api.post(`/cadastrar/titulo`, {
        parcelas: titulo.numeroParcelas,
        id_funcionario: 2,
        // id_cliente: cliente,
        data_vencimento: titulo.dataVencimento,
        valor: titulo.valorTotal,
        nome_produto: titulo.nomeProduto
      }, {
        timeout: 5000
      });
      return response;
  } catch (error){
      console.error(error);
  }
}

export const criarFuncionario = async (nome: String, email: String, cpf: String, senha: String) => {
  try {
      const response = await api.post(`/funcionarios/cadastrar`, {
        nome: nome,
        email:email,
        cpf: cpf,
        senha: senha
      }, {
        timeout: 5000
      });
      return response;
  } catch (error){
      console.error(error);
  }
}
