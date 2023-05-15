import { dadosUsuario, ListarCliente } from '../../utils/axios.routes';
import React, { useContext, useEffect, useState } from 'react'
import EmployeeWait from "../../components/Card/EmployeeWait";
import EmployeeFixed from "../../components/Card/EmployeeFixed";
import Navbar from "../../components/Navbar";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ClientFixed from '../../components/Card/ClientFixed';

interface Cliente {
  contato: {
    email: string;
    telefone: string;
  }
  nome: string;
  cpf: string;
  cargo: string | null;
}

const ClienteManagement = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext)
  const [cliente, setCliente] = useState<any>();

  useEffect(() => {
    if (!isLogged) {
      navigate('/')
    }
    const fetchData = async () => {
      try {
        const funcs = await ListarCliente();
        const resp = await funcs?.data;
        setCliente(resp);
        console.log(resp)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  if (isLogged && (funcionario.cargo == 'Administrador' || funcionario.cargo == 'Comercial')) {
    return (
      <>
        <div className="conteiner-employee-management">
          <Navbar />
          <h1 className="title-primary">Clientes do Sistema</h1>
          {cliente && cliente.map((item: Cliente) => {

            return (
              <React.Fragment key={item.cpf}>
                <ClientFixed cpf={item.cpf} email={item.contato.email} nome={item.nome} telefone={item.contato.telefone}></ClientFixed>
              </React.Fragment>
            )
          }
          )}
          {!cliente && <ClientFixed cpf={''} email={''} nome={''} telefone={''} />}
        </div>
      </>
    );
  } else {
    return (
      <></>
    )
  }
};

export default ClienteManagement;
