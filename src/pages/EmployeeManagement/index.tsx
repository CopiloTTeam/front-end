import { dadosFuncionarios, dadosUsuario } from '../../utils/axios.routes';
import React, { useContext, useEffect, useState } from 'react'
import EmployeeWait from "../../components/Card/EmployeeWait";
import EmployeeFixed from "../../components/Card/EmployeeFixed";
import Navbar from "../../components/Navbar";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

interface Funcionario {
  credential: any;
  id_funcionario: number;
  nome: string;
  email: string;
  cpf: string;
  cargo: string | null;
}

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext)
  const [data, setData] = useState<any>();
  const [funcionarioo, setFuncionario] = useState<any>();

  useEffect(() => {
    if (!isLogged) {
      navigate('/')
    }
    const fetchData = async () => {
      try {
        // const response = await dadosUsuario(2);
        // const data = await response?.data;
        // setData(data);

        const funcs = await dadosFuncionarios();
        const resp = await funcs?.data;
        setFuncionario(resp);
        // console.log(funcs?.data[0].credential.role);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  if (isLogged && funcionario.cargo == 'Administrador') {

    return (
      <>
        <div className="conteiner-employee-management">
          <Navbar />
          <h1 className="title-primary">Usuário do Sistema</h1>
          <h2 className="title-secundary">Solicitações Pendentes</h2>
          {funcionarioo && funcionarioo.length > 0 ? (
            <>
              {funcionarioo.map((item: Funcionario) => {
                // console.log(item.credential.id);
                
                if (item.credential.role == null && item.credential.id != funcionario.id || item.cargo == undefined && item.credential.id != funcionario.id  ) {
                  // console.log(item.cpf);
                  
                  return (
                    
                    <React.Fragment key={item.cpf}>
                      <EmployeeWait id_funcionario={item.credential.id} nome={item.nome} email={item.email} cpf={item.cpf} />
                    </React.Fragment>
                  );
                } else if (
                  item.cargo != null &&
                  item.cargo != "Administrador" &&
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
          {funcionarioo && funcionarioo.map((item: Funcionario) => {
            if (item.cargo != null && item.cpf != funcionario.cpf) {
              return (
                <React.Fragment key={item.cpf}>
                  <EmployeeFixed id_funcionario={item.id_funcionario} nome={item.nome} email={item.email} cargo={item.cargo} cpf={item.cpf} tipo={"f"} />
                </React.Fragment>
              );
            } else if (item.cargo != null && item.cargo != 'Administrador' && item.cargo != 'Financeiro' && item.cargo != 'Comercial' ) {
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
