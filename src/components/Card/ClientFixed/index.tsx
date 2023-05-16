import React from "react";
import "./style.css";
import { excludeCliente, updateCliente } from "../../../utils/axios.routes";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

interface employeeProps{
  nome: any;
  email: any;
  cpf: any;
  tipo: any;
  telefone: any;
}
const ClientFixed = ({nome, email, cpf, tipo, telefone}: employeeProps) => {

  async function onExclude(cpf: any) {

    await excludeCliente(cpf)
    toast.success('Cliente excluído com sucesso!');
  }

  async function onUpdate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const selectElement = document.querySelector('select[name="select"]') as HTMLSelectElement;
    const selectedValue = selectElement.value;
    await updateCliente(cpf, selectedValue)
  }

  if (tipo == "f"){

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
          <h2>
            <b> Telefone:</b>{telefone}
          </h2>
         
        </div>
        <div className="box-confirm">
        <button className="deny" onClick={e => onExclude(cpf)}>Excluir</button>
            <button className="approve" onClick={e => onUpdate(e)}>Alterar</button>
        </div>
        </div>
      </details>
    </>
  );
}else if(cpf == null ) {  
  
return (
  <div className="information-wait-box">
  <h2>
    <b> Sem clientes Cadastrados</b>
  </h2>
</div>
);
} else {
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
      <button className="deny" onClick={e => onExclude(e)}>Excluir</button>
          <button className="approve" onClick={e => onUpdate(e)}>Alterar</button>
      </div>
      </div>
    </details>
  </>
);
}
};

export default ClientFixed;
