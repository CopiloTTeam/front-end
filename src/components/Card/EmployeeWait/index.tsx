import React from "react";
import "./style.css";
interface employeeProps {
  nome: any;
  email: any;
  cpf: any;
}
const EmployeeWait = ({nome, email, cpf} : employeeProps) => {
  return (
    <>
      <details className="card-wait">
        <summary className="outside-wait">
          <h1>{nome}</h1>
          <img
            src="https://img.icons8.com/ios/50/000000/expand-arrow.png"
            alt="expand-arrow"
          />
        </summary>
        <div className="inside-box">
          <div className="information-wait-box">
            <h2>
              <b> Email:</b>{email}
            </h2>
            <h2>
              <b> CPF: </b>{cpf}
            </h2>
            <div className="select-function">
              <label> Definir um cargo:</label>
              <select name="select">
                <option value="Financeiro">Financeiro</option>
                <option value="Comercial">Comercial</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>
          </div>
          <div className="box-confirm">
            <button className="deny">Recusar</button>
            <button className="approve">Confirmar</button>
          </div>
        </div>
      </details>
    </>
  );
};

export default EmployeeWait;
