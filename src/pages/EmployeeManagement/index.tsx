import React from "react";
import EmployeeWait from "../../components/Card/EmployeeWait";
import ExployeeFixed from "../../components/Card/ExployeeFixed";
import Navbar from "../../components/Navbar";
import "./style.css";

const EmployeeManagement = () => {
  return (
    <>
    <div className="conteiner-employee-management">
      <Navbar/>
      <h1 className="title-primary">Usuário do Sistema</h1>
      <h2 className="title-secundary">Solicitações Pendentes</h2>
      <EmployeeWait/>
      <EmployeeWait/>
      <EmployeeWait/>
      <h2 className="title-secundary">Funcionários do Sistema</h2>
      <ExployeeFixed/>
      <ExployeeFixed/>
      <ExployeeFixed/>
    </div>
    </>
  );
};

export default EmployeeManagement;
