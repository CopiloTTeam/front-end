import React  from 'react'
import './style.css'

function Verification({ formData, setFormData }) {
  
  return (
    <div className='container'>
      <div className='row-1'>
        <div className='component'>
          <h1>Nome Completo</h1>
          <p>{formData.nome}</p> 
        <div/>
        </div>
        <div className='component'>
          <h1>CPF</h1>
          <p>{formData.cpf}</p>
        </div>
         <div className='component'>
          <h1>Email</h1>
          <p>{formData.email}</p>
        </div>
      </div>
      <div className='row-2'>
        <div className='component'>
          <h1>Data de Nascimento</h1>
          <p>{formData.data}</p>
        </div>
        <div className='component'>
          <h1>Telefone</h1>
          <p>{formData.telefone}</p>
        </div>
         <div className='component'>
          <h1>Celular</h1>
          <p>{formData.celular}</p>
        </div>
      </div>
      <div className='row-3'>
        <div className='component'>
          <h1>CEP</h1>
          <p>{formData.cep}</p>
        </div>
        <div className='component'>
          <h1>Rua</h1>
          <p>{formData.rua}</p>
        </div>
         <div className='component'>
          <h1>Bairro</h1>
          <p>{formData.bairro}</p>
        </div>
      </div>
      <div className='row-4'>
        <div className='component'>
          <h1>Cidade</h1>
          <p>{formData.cidade}</p>
        </div>
        <div className='component'>
          <h1>Estado</h1>
          <p>{formData.estado}</p>
        </div>
         <div className='component'>
          <h1>Numero</h1>
          <p>{formData.numero}</p>
        </div>
        <div className='component'>
          <h1>Complemento</h1>
          <p>{formData.complemento}</p>
        </div>
      </div>
    </div>
  )
}

export default Verification
