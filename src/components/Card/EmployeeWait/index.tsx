import React from "react";
import "./style.css";

const EmployeeWait = () => {
  return (
    <>
      <details className="card-wait">
        <summary className="outside-wait">
          <h1>Nome do carinha</h1>
          <img
            src="https://img.icons8.com/ios/50/000000/expand-arrow.png"
            alt="expand-arrow"
          />
        </summary>
        <div className="inside-box">
          <div className="information-wait-box">
            <h2>
              <b> Email:</b>emaildocarinha@gmail.com
            </h2>
            <h2>
              <b> CPF: </b>111.111.111.00
            </h2>
            <div className="select-function">
              <label> Definir um cargo:</label>
              <select name="select">
                <option value="finance">Financeiro</option>
                <option value="comercial">Comercial</option>
                <option value="adm">Administrador</option>
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
