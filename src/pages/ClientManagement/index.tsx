import { dadosUsuario, ListarCliente } from '../../utils/axios.routes';
import React, { useContext, useEffect, useState } from 'react'
import EmployeeWait from "../../components/Card/EmployeeWait";
import EmployeeFixed from "../../components/Card/EmployeeFixed";
import Navbar from "../../components/Navbar";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

interface Cliente {
  id_funcionario: number;
  nome: string;
  email: string;
  cpf: string;
  cargo: string | null;
}

const ClienteManagement = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext);
  const [cliente, setCliente] = useState<any>();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
    const fetchData = async () => {
      try {
        const funcs = await ListarCliente();
        const resp = await funcs?.data;
        setCliente(resp);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Order the clients by name
  cliente?.sort((a: Cliente, b: Cliente) => {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  });

  // Filter the clients based on search value
  const filteredClientes = cliente?.filter((item: Cliente) =>
    item.nome.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (isLogged && (funcionario.cargo === 'Administrador' || funcionario.cargo === 'Comercial')) {
    return (
      <>
        <div className="conteiner-employee-management">
          <Navbar />
          <div className='head-gerenciarcliente'>
            <h1 className="title-primary">Cliente do sistema</h1>
            <input type='text' className='input-table' placeholder='Digite aqui' value={searchValue} onChange={handleSearchChange} />
          </div>
          {filteredClientes && filteredClientes.map((item: Cliente) => (
            <React.Fragment key={item.cpf}>
              <EmployeeFixed id_funcionario={item} nome={item.nome} email={item.email} cargo={item.cpf} cpf={item.cpf} tipo={null} />
            </React.Fragment>
          ))}
          {!filteredClientes && <EmployeeFixed id_funcionario="" nome="" email="" cargo="" cpf={null} tipo={null} />}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ClienteManagement;
