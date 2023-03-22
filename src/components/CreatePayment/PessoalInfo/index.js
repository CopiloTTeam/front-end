import React from 'react'
import './style.css'

function PessoalInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='first-box'>
          <h1>Nome Completo</h1>
          <input type="text"
            placeholder='Nome Completo'
            value={formData.nome}
            onChange={(event) => setFormData({ ...formData, nome: event.target.value })} />
        </div>
        <div className='second-box'>
          <h1>CPF</h1>
          <input type="text"
            placeholder='CPF'
            value={formData.cpf}
            onChange={(event) => setFormData({ ...formData, cpf: event.target.value })}
          />
        </div>
      </div>
      <div className='row'>
        <div className='box'>
          <h1>Email</h1>
          <input type="text"
            placeholder='Email'
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        </div>
      </div>
    </div>
  )
}

export default PessoalInfo
