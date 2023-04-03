import { dadosUsuario } from '../../utils/axios.routes';
import React, { useEffect, useState } from 'react'
import EmployeeWait from "../../components/Card/EmployeeWait";
import EmployeeFixed from "../../components/Card/EmployeeFixed";
import Navbar from "../../components/navbar";
import "./style.css";

const EmployeeManagement = () => {
  const [data, setData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dadosUsuario(2);
                const data = await response?.data
                setData(data);
            } catch (error) {
                console.error(error);

            }
        };

        fetchData();
    }, []);
  return (
    <>
    <div className="conteiner-employee-management">
      <Navbar data={data}/>
      <h1 className="title-primary">Usuário do Sistema</h1>
      <h2 className="title-secundary">Solicitações Pendentes</h2>
      <EmployeeWait/>
      <EmployeeWait/>
      <EmployeeWait/>
      <h2 className="title-secundary">Funcionários do Sistema</h2>
      <EmployeeFixed/>
      <EmployeeFixed/>
      <EmployeeFixed/>
    </div>
    </>
  );
};

export default EmployeeManagement;
