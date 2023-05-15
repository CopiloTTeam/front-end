import React, { useState } from "react";
import "./style.css";
import { excludeCliente, excludeFuncionario, updateFuncionario } from "../../../utils/axios.routes";
import { toast } from "react-toastify";

interface employeeProps{
  id_funcionario: any;
  nome: any;
  email: any;
  cpf: any;
  cargo: any;
  tipo: any;
}

const EmployeeFixed = ({id_funcionario, nome, email, cpf, cargo, tipo}: employeeProps) => {

  const [selectedCargo, setSelectedCargo] = useState(cargo);

  async function onExcludecli(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await excludeCliente(cpf)
    window.location.reload();
    toast.success('Cliente excluído com sucesso!');
  }

  async function onExclude(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await excludeFuncionario(cpf)
    window.location.reload();
    toast.success('Funcionário excluído com sucesso!');
  }

  async function onUpdate() {
    await updateFuncionario(cpf, selectedCargo);    
    window.location.reload();
    toast.success('Cargo alterado com sucesso!');
  }

  function handleCargoChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCargo(e.target.value);
  }

  if (tipo == "f"){
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
            <b> Id :</b>{id_funcionario}
          </h2>
          <h2>
            <b> Email:</b>{email}
          </h2>
          <h2>
            <b> CPF: </b>{cpf}
          </h2>
          <div className="select-function">
            <label> Definir um cargo:</label>
            <select name="CARGO" value={selectedCargo} onChange={handleCargoChange}>
              <option value="Financeiro">Financeiro</option>
              <option value="Comercial">Comercial</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
        </div>
        <div className="box-confirm">
        <button className="deny" onClick={e => onExclude(e)}>Excluir</button>
        <button className="approve" onClick={onUpdate}>Alterar</button>
        </div>
        </div>
      </details>
    </>
  );
  } else if(cpf == null ) {  
    return (
      <div className="information-wait-box">
        <h2>
          <b> Sem clientes Cadastrados</b>
        </h2>
      </div>
    );
  }else {
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

      </div>
      <div className="box-confirm">
      <button className="deny" onClick={e => onExcludecli(e)}>Excluir</button>
      </div>
      </div>
    </details>
  </>
);
}
};

export default EmployeeFixed;
