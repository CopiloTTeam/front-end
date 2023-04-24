import api from "../services/axios.config";

//login
export const login = async (data: any) => {
  try {
    const response = await api.post('/login', data, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const AllUsers = async () => {
  try {
    const response = await api.get('/listar/cliente', {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}


export const dadosUsuario = async (id: any) => {
  try {
    const response = await api.get(`listar/cliente/${id}`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosFuncionario = async (id: any) => {
  try {
    const response = await api.get(`listar/funcionario/${id}`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosFuncionarioc = async (cpf: string) => {
  try {
    const response = await api.get(`listar/funcionarioc/${cpf}`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosTitulos = async () => {
  try {
    const response = await api.get(`/listar/titulo`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosClientes = async () => {
  try {
    const response = await api.get(`/listar/cliente`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const gerenciarTitulo = async (id: any) => {
  try {
    const response = await api.get(`/listar/titulo/${id}`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const gerenciarParcelaTitulo = async (id: any) => {
  try {
    const response = await api.get(`/listar/parcela/titulo/${id}`, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const criarCliente = async (cliente: any) => {
  try {
    const response = await api.post(`/cadastrar/cliente`, cliente, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const criarTitulo = async (titulo: any) => {
  try {
    const response = await api.post(`/cadastrar/titulo`, {
      cpf_cliente: titulo.cpf_cliente,
      cpf_funcionario: titulo.cpf_funcionario,
      codigo_barra: titulo.codigo_barra,
      data_geracao: titulo.data_geracao,
      nome_produto: titulo.nome_produto,
      parcelas: 12,
      valor: titulo.valor,
      

    }, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const criarFuncionario = async (nome: String, email: String, cpf: String, senha: String) => {
  try {
    const response = await api.post(`/funcionarios/cadastrar`, {
      nome: nome,
      email: email,
      cpf: cpf,
      senha: senha
    }, {
      timeout: 5000
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosFuncionarios = async () => {
  try {
    const response = await api.get(`/listar/funcionario`, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const excludeFuncionario = async (cpf: any) => {
  try {
    const response = await api.delete(`/deletar/funcionario/${cpf}`, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const excludeCliente = async (cpf: any) => {
  try {
    const response = await api.delete(`/deletar/cliente/${cpf}`, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const updateFuncionario = async (cpf: any, value: any) => {
  try {
    const response = await api.put(`/atualizar/funcionarioc/${cpf}`, {
      cargo: value
    }, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
export const updateFuncionarioId = async (
   id: any,
   nome: any , 
   email: any ,
   senha: any , 
   cpf: any ) => {
  try {

    const response = await api.put(`/atualizar/funcionario/${id}`, {
      nome: nome,
      email: email,
      cpf: cpf,
      senha: senha
    }, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}



export const updateCliente = async (cpf: any, value: any) => {
  try {
    const response = await api.put(`/atualizar/funcionarioc/${cpf}`, {
      cargo: value
    }, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const updateParcela = async(id:any , valorPago:any) => {
  try {
    const response = await api.put(`/atualizar/parcela/${id}`, {
      valor_pago: valorPago,
    }, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const baixaParcela = async (id: any) => {
  try {
    const response = await api.get(`/listar/parcela/${id}`, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const ListarCliente = async () => {
  try {
    const response = await api.get(`/listar/cliente`, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const ListarParcela = async () => {
  try {
    const response = await api.get(`/listar/parcela`, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}