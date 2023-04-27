import api from "../services/axios.config";

const statuss = ['202','302','200','201']
//login
export const login = async (data: any) => {
  try {
    const response = await api.post('/login', data, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
        // return status.toString() in statuss? true : false ; // Define que apenas status 200 é válido
  }
      // Define que apenas status 200 é válido
    });
    // console.log(response);
    
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export const AllUsers = async () => {
  try {
    const response = await api.get('/listar/cliente', {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}


export const dadosUsuario = async (id: any) => {
  try {
    const response = await api.get(`listar/cliente/${id}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosFuncionario = async (id: any) => {
  try {
    const response = await api.get(`listar/funcionario/${id}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosFuncionarioc = async (cpf: string) => {
  try {
    const response = await api.get(`listar/funcionario/${cpf}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
      }
     
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosTitulos = async () => {
  try {
    const response = await api.get(`/listar/titulo`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const dadosClientes = async () => {
  try {
    const response = await api.get(`/listar/cliente`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ;// Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const gerenciarTitulo = async (id: any) => {
  try {
    const response = await api.get(`/listar/titulo/${id}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const gerenciarParcelaTitulo = async (id: any) => {
  try {
    const response = await api.get(`/listar/parcela/titulo/${id}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const criarCliente = async (cliente: any) => {
  try {
    const response = await api.post(`/cadastrar/cliente`, cliente, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const criarTitulo = async (titulo: any) => {
  try {
    // const cliente = await api.get(`/listar/clientecpf/${titulo.cpf}`)
    const response = await api.post(`/cadastrar/titulo`, {
      cpf: titulo.cpf,
      id_funcionario: titulo.id_funcionario,
      codigo_barra: titulo.codigo_barra,
      data_geracao: titulo.data_geracao,
      nome_produto: titulo.nome_produto,
      parcelas: 12,
      valor: titulo.valor,
      

    }, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ;// Define que apenas status 200 é válido
  }
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
      cpf: cpf,
      email: email,
      credential :{
       password: senha,
       userName: email,
       roles: [
        "Sem_Cargo"
      ]
      }
      
    }, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });
    return response;
  } catch (error) {
    
    console.error(error);
  }
}

export const dadosFuncionarios = async () => {
  try {
    const response = await api.get(`/listar/funcionario`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const excludeFuncionario = async (cpf: any) => {
  try {
    const user = await api.get(`/listar/funcionario/${cpf}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
      return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
    }  
  }

    );
    const payload = {
      nome: user.data.nome,
        cpf: user.data.cpf,
        email: user.data.email,
        credential :{
         password: user.data.senha,
         userName: user.data.email,
         roles: [
          user.data.cargo
        ]
        }
      }


    const response = await api.delete(`/deletar/funcionario`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      data: payload,
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const excludeCliente = async (cpf: any) => {
  try {
    const user = await api.get(`/listar/cliente/${cpf}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
      return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
    }  
  }

    );
    const payload = {
      nome: user.data.nome,
        cpf: user.data.cpf,
        email: user.data.email,
        credential :{
         password: user.data.senha,
         userName: user.data.email,
         roles: [
          user.data.cargo
        ]
        }
      }
    const response = await api.delete(`/deletar/cliente`, { 
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      data: payload,
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const updateFuncionario = async (cpf: any, value: any) => {
  try {
    const user = await api.get(`/listar/funcionario/${cpf}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
      return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
    }
    });
    const funcionario = {
      cpf: "37750825819",
      nome: "Guilherme Duarte Cenzi Dias",
      email: "a@gui.com",
      credential: {
          password: "102030@@",
          userName: "val@valderi",
          roles: [
              "Sem_Cargo"
          ]
      }
        }
        console.log(funcionario)
    const response = await api.put(`/atualizar/funcionario`, {
      data: funcionario,
    }, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
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
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
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
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
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
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ;// Define que apenas status 200 é válido
  }
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const baixaParcela = async (id: any) => {
  try {
    const response = await api.get(`/listar/parcela/${id}`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const ListarCliente = async () => {
  try {
    const response = await api.get(`/listar/cliente`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export const ListarParcela = async () => {
  try {
    const response = await api.get(`/listar/parcela`, {
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      },
      timeout: 5000,
      validateStatus: function (status) {
        return statuss.includes(status.toString()) ; // Define que apenas status 200 é válido
  }});
    return response;
  } catch (error) {
    console.error(error);
  }
}