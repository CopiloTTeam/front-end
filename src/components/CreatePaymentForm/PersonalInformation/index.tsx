import React from 'react'
import './style.css'

type UserData = {
  codigo_barra: string,
  qr_code: string,
  numero_boleto: string,
  nome_produto: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function PersonalInformation({ codigo_barra, qr_code, numero_boleto,nome_produto, updateFields }: UserFormProps) {
  return (
    <div className="cont">
      <div className="row">
        <div className="first-box">
          <h1>Codigo de barras</h1>
          <input
            required
            type="number"
            placeholder="Codigo de barras"
            value={codigo_barra}
            onChange={e => updateFields({ codigo_barra: e.target.value })}
          />
        </div>
        <div className="second-box">
          <h1>Numero do Boleto</h1>
          <input
            required
            type="text"
            placeholder="Numero do Boleto"
            value={numero_boleto}
            onChange={e => updateFields({ numero_boleto: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="full-box">
          <h1>Nome do Produto</h1>
          <input
            required
            type="text"
            placeholder="Nome do Produto"
            value={nome_produto}
            onChange={e => updateFields({ nome_produto: e.target.value })}
          />
        </div>

      </div>



    </div>
  )
}
