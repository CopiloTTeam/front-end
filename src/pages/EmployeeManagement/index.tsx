import { dadosFuncionarios, dadosUsuario } from '../../utils/axios.routes';
import React, { useContext, useEffect, useState } from 'react'
import EmployeeWait from "../../components/Card/EmployeeWait";
import EmployeeFixed from "../../components/Card/EmployeeFixed";
import Navbar from "../../components/Navbar";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

interface Funcionario {
  nome: string;
  email: string;
  cpf: string;
  cargo: string | null;
}

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext)
  const [data, setData] = useState<any>();
  const [funcionario, setFuncionario] = useState<any>();

  useEffect(() => {
    if(!isLogged){
      navigate('/')
    }
    const fetchData = async () => {
      try {
        const response = await dadosUsuario(2);
        const data = await response?.data;
        setData(data);

        const funcs = await dadosFuncionarios();
        const resp = await funcs?.data;
        setFuncionario(resp);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  if (isLogged){

    return (
      <>
      <div className="conteiner-employee-management">
        <Navbar />
        <h1 className="title-primary">Usuário do Sistema</h1>
        <h2 className="title-secundary">Solicitações Pendentes</h2>
        {funcionario && funcionario.length > 0 ? (
          <>
            {funcionario.map((item: Funcionario) => {
              if (item.cargo == null || item.cargo == undefined) {
                return (
                  <React.Fragment key={item.cpf}>
                    <EmployeeWait nome={item.nome} email={item.email} cpf={item.cpf} />
                  </React.Fragment>
                );
              } else if (
                item.cargo != null &&
                item.cargo != "admin" &&
                item.cargo != "Financeiro" &&
                item.cargo != "Comercial"
                ) {
                  return null; // ignora funcionários com cargos específicos
                } 
              })}
            
          </>
        ) : (
          <h2>SEM SOLICITACOES</h2>
          )}
        
        <h2 className="title-secundary">Funcionários do Sistema</h2>
        {funcionario && funcionario.map((item: Funcionario) => {
          if (item.cargo != null) {
            return (
              <React.Fragment key={item.cpf}>
                <EmployeeFixed nome={item.nome} email={item.email} cargo={item.cargo} cpf={item.cpf} tipo={"f"}/>
              </React.Fragment>
            );
          } else if (item.cargo != null && item.cargo != 'Administrador' && item.cargo != 'Financeiro' && item.cargo != 'Comercial') {
            return (
              <>
                <h2>Sem Funcionarios Cadastrados</h2>
              </>
            );
          }
        })}
      </div>
    </>
  );
} else {
  return (
    <></>
  )
}
};

export default EmployeeManagement;
