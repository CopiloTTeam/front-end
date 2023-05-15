import { AllUsers } from "../../../utils/axios.routes";
import "./style.css";
import React, { useEffect, useState } from 'react'
import ReactInputMask from "react-input-mask";
import CurrencyInput from "react-currency-input-field";



type UserData = {
  cpf_cliente: string,
  cpf_funcionario: string
  data_geracao: string,
  valor: string
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function BilingInformation({ cpf_cliente, cpf_funcionario, data_geracao, valor, updateFields }: UserFormProps) {
  const [Usuarios, setUsuarios] = useState<any>();
  const [nomeUsuario, setNomeUsuario] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const titulos = await AllUsers();
        const data = titulos?.data;
        setUsuarios(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Usuarios && cpf_cliente) {
      const usuarioEncontrado = Usuarios.find((usuario: any) => usuario.cpf === cpf_cliente);
      if (usuarioEncontrado) {
        setNomeUsuario(usuarioEncontrado.nome);
      }
    }
  }, [cpf_cliente, Usuarios]);

  return (
    <div className="cont">
      <div className="row">
        <div className="full-box">
          <h1>CPF do cliente</h1>
          <div className="tel-plus">
            <ReactInputMask
              required
              mask="999.999.999-99"
              type="text"
              placeholder="CPF do cliente"
              value={cpf_cliente} onChange={e => updateFields({ cpf_cliente: e.target.value })}
            />
          </div>
        </div>
        <div className="full-box">

          <h1>Nome do Cliente</h1>
          <input
            required
            type="text"
            value={nomeUsuario || ""}
            placeholder="Nome do Cliente"
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="full-box">
          <h1>CPF do funcionario</h1>
          <div className="tel-plus">
            <input
              required
              type="text"
              placeholder="CPF do funcionario"
              value={cpf_funcionario} onChange={e => updateFields({ cpf_funcionario: e.target.value })}
            />
          </div>
        </div>
        <div className="full-box">
          <h1>Data de Geração</h1>
          <input
            required
            type="date"
            placeholder="Data de Vencimento"
            value={data_geracao} onChange={e => updateFields({ data_geracao: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="full-box">
          <h1>Valor</h1>
          <CurrencyInput
            required
            placeholder="Valor"
            prefix="R$"
            decimalSeparator=","
            groupSeparator="."
            value={valor} 
            onValueChange={(value) => updateFields({ valor: value })}
            decimalScale={2}
            fixedDecimalLength={2}
            allowNegativeValue={false}
          />
        </div>
      </div>
    </div>
  )
}

