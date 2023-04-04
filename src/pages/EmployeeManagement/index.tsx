import { dadosFuncionarios, dadosUsuario } from '../../utils/axios.routes';
import React, { useEffect, useState } from 'react'
import EmployeeWait from "../../components/Card/EmployeeWait";
import EmployeeFixed from "../../components/Card/EmployeeFixed";
import Navbar from "../../components/Navbar";
import "./style.css";
interface Funcionario {
  nome: string;
  email: string;
  cpf: string;
  cargo: string | null;
}
const EmployeeManagement = () => {
  const [data, setData] = useState<any>();
  const [funcionario, setFuncionario] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dadosUsuario(2);
        const data = await response?.data
        setData(data);

        const funcs = await dadosFuncionarios();
        const resp = await funcs?.data;
        setFuncionario(resp)
      } catch (error) {
        console.error(error);

      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="conteiner-employee-management">
        <Navbar data={data} />
        <h1 className="title-primary">Usuário do Sistema</h1>
        <h2 className="title-secundary">Solicitações Pendentes</h2>
        {funcionario && funcionario.map((item: Funcionario) => {
          if (item.cargo == null) {
            return (
              <React.Fragment key={item.cpf}>
                <EmployeeWait nome={item.nome} email={item.email} cpf={item.cpf} />
              </React.Fragment>
            )
          } else {
            return(
              <>
                <h2>Sem Funcionarios para aprovar</h2>
              </>
            )
          }
        })}
        <h2 className="title-secundary">Funcionários do Sistema</h2>
        {funcionario && funcionario.map((item: Funcionario) => {
          if (item.cargo != null) {
            return (
              <React.Fragment key={item.cpf}>
                <EmployeeFixed nome={item.nome} email={item.email} cargo={item.cargo} cpf={item.cpf}/>
              </React.Fragment>
            )
          } else if (item.cargo != null && item.cargo != 'Administrador' && item.cargo != 'Financeiro' && item.cargo != 'Comercial') {
            return(
              <>
                <h2>Sem Funcionarios Cadastrados</h2>
              </>
            )
          }
        })}
        
      </div>
    </>
  );
};

export default EmployeeManagement;
