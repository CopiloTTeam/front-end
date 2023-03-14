import React from 'react'
import '../../styles/multistepForm.css'

function PessoalInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>CPF</p>
          <input type="text"
            placeholder='CPF'
            value={formData.cpf}
            onChange={(event) => setFormData({ ...formData, cpf: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Nome Completo</p>
          <input type="text"
            placeholder='Nome Completo'
            value={formData.nome}
            onChange={(event) => setFormData({ ...formData, nome: event.target.value })} />
        </div>
      </div>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>Email</p>
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
