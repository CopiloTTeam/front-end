import React from 'react'
import './style.css'

type UserData = {
  nome: string,
  cpf: string,
  email: string,
  nomeProduto: string,
  valorTotal: string,
  numeroParcelas: string,
  dataVencimento: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function PersonalInformation({ nome, cpf, email, updateFields }: UserFormProps) {
  return (
    <div className="cont">
      <div className="row">
        <div className="first-box">
          <h1>Nome</h1>
          <input
            required
            type="number"
            placeholder="nome"
            value={nome}
            onChange={e => updateFields({ nome: e.target.value })}
          />
        </div>
        <div className="second-box">
          <h1>CPF</h1>
          <input
            required
            type="text"
            placeholder="cpf"
            value={cpf}
            onChange={e => updateFields({ cpf: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="full-box">
          <h1>Email</h1>
          <input
            required
            type="text"
            placeholder="email"
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
          />
        </div>
        
      </div>

    </div>
  )
}
