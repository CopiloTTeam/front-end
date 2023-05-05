import { AllUsers } from "../../../utils/axios.routes";
import "./style.css";
import React, { useEffect, useState} from 'react'

type UserData = {
  cpf: string,
  data_geracao: string,
  valor:string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function BilingInformation({ cpf, data_geracao, valor, updateFields }: UserFormProps) {
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
    if (Usuarios && cpf) {
      const usuarioEncontrado = Usuarios.find((usuario: any) => usuario.cpf === cpf);
      if (usuarioEncontrado) {
        setNomeUsuario(usuarioEncontrado.nome);
      }
    }
  }, [cpf, Usuarios]);

  return (
    <div className="cont">
      <div className="row">
        <div className="full-box">
           <h1>CPF do cliente</h1>
          <div className="tel-plus">
            <input
              required
              type="text"
              placeholder="CPF do cliente"
              value={cpf} onChange={e => updateFields({ cpf: e.target.value })}
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
          <input
            required
            type="text"
            placeholder="Valor"
            value={valor} onChange={e => updateFields({ valor: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}

