import React from 'react'
import './style.css'

type UserData = {
  cep: string,
  rua: string,
  bairro: string,
  cidade: string,
  estado: string,
  logradouro: string,
  complemento: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export function PersonalInformation({ cep, rua, bairro, cidade, estado, logradouro, complemento, updateFields }: UserFormProps) {
  return (
    <div className="cont">
      <div className="row">
        <div className="first-box">
          <h1>CEP</h1>
          <input
            required
            type="number"
            placeholder="CEP"
            value={cep}
            onChange={e => updateFields({ cep: e.target.value })}
          />
        </div>
        <div className="second-box">
          <h1>Rua</h1>
          <input
            required
            type="text"
            placeholder="Rua"
            value={rua}
            onChange={e => updateFields({ rua: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="third-box">
          <h1>Bairro</h1>
          <input
            required
            type="text"
            placeholder="Bairro"
            value={bairro}
            onChange={e => updateFields({ bairro: e.target.value })}
          />
        </div>
        <div className="fourth-box">
          <h1>Cidade</h1>
          <input
            required
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={e => updateFields({ cidade: e.target.value })}
          />
        </div>

        <div className="fifth-box">
          <h1>Estado</h1>
          <input
            required
            type="text"
            placeholder="Estado"
            value={estado}
            onChange={e => updateFields({ estado: e.target.value })}
          />
        </div>
      </div>

      <div className="row">
        <div className="sixth-box">
          <h1>Numero</h1>
          <input
            required
            type="number"
            placeholder="Numero"
            value={logradouro}
            onChange={e => updateFields({ logradouro: e.target.value })}
          />
        </div>
        <div className="seventh-box">
          <h1>Complemento</h1>
          <input
            required
            type="text"
            placeholder="Complemento"
            value={complemento}
            onChange={e => updateFields({ complemento: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}
