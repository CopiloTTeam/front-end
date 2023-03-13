import React from 'react'
import '../../styles/multistepForm.css'

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row-1'>
       {/* label */}
        <input type="text"
          placeholder='Nome Completo'
          value={formData.nome}
          onChange={(event) => setFormData({ ...formData, nome: event.target.value })} 
        />
        <input type="number"
          placeholder='CPF'
          value={formData.cpf}
          onChange={(event) => setFormData({ ...formData, cpf: event.target.value })} />
      </div>
      <div className='row-2'>
        <input type="text"
          placeholder='Email'
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        <input type="date"
          placeholder='Data de Nascimento'
          value={formData.data}
          onChange={(event) => setFormData({ ...formData, data: event.target.value })} />
      </div>
      <div className='row-3'>
        <input type="number"
          placeholder='Telefone'
          value={formData.telefone}
          onChange={(event) => setFormData({ ...formData, telefone: event.target.value })} />
        <input type="number"
          placeholder='Celular'
          value={formData.celular}
          onChange={(event) => setFormData({ ...formData, celular: event.target.value })} />
      </div>
    </div>
  )
}

export default PersonalInfo
