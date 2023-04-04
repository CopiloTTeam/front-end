import React from "react";
import "./style.css";
import { excludeFuncionario, updateFuncionario } from "../../../utils/axios.routes";
interface employeeProps{
  nome: any;
  email: any;
  cpf: any;
  cargo: any;
}
const EmployeeFixed = ({nome, email, cpf, cargo}: employeeProps) => {
  async function onExclude(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await excludeFuncionario(cpf)
    // continua a execução da função normalmente
    console.log('Employee excluded!');
    window.location.reload();
  }

  async function onUpdate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // faz alguma operação assíncrona
    const selectElement = document.querySelector('select[name="select"]') as HTMLSelectElement;
    const selectedValue = selectElement.value;
    await updateFuncionario(cpf, selectedValue)
    // continua a execução da função normalmente
    console.log('Employee updated!');
    window.location.reload();
  }
  return (
    <>
   <details className="card-wait">
        <summary className="outside-wait">
          <h1> <b> {cargo}  - </b>{nome}</h1>
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
            {cargo == 'Financeiro'? 
            <select name="select">
              <option value="Financeiro" selected>Financeiro</option>
              <option value="Comercial">Comercial</option>
              <option value="Administrador">Administrador</option>
            </select>
            :
            ''
            }
            {cargo == 'Comercial'? 
            <select name="select">
              <option value="Financeiro">Financeiro</option>
              <option value="Comercial" selected>Comercial</option>
              <option value="Administrador">Administrador</option>
            </select>
            :
            ''
            }
            {cargo == 'Administrador'? 
            <select name="select">
              <option value="Financeiro">Financeiro</option>
              <option value="Comercial">Comercial</option>
              <option value="Administrador" selected>Administrador</option>
            </select>
            :
            ''
            }
          </div>
        </div>
        <div className="box-confirm">
        <button className="deny" onClick={e => onExclude(e)}>Excluir</button>
            <button className="approve" onClick={e => onUpdate(e)}>Alterar</button>
        </div>
        </div>
      </details>
    </>
  );
};

export default EmployeeFixed;
