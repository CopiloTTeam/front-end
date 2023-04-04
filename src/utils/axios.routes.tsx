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
        const response = await api.get(`listar/cliente/${id}`, {
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
        // id_cliente: 2, 
        // id_funcionario: 1,
        // codigo_barras: "3213.32131.312312",
        // data_geracao: "2021-05-01",
        // data_vencimento: "2021-05-01",
        // nome_produto: "teste",
        // numero_boleto: "123123",
        // parcelas: 10,
        // qr_code: "123123",
        // valor: 1000,

        nome_produto: titulo.nomeProduto,
        valor: titulo.valorTotal,
        parcelas: titulo.numeroParcelas,
        dataVencimento: titulo.dataVencimento,
        id_funcionario: 1,
        data_vencimento: titulo.dataVencimento,
        // Date of client
        nome: "",
        cpf: titulo.cpf,
        email: "",
        // qr_code: "teste",

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
