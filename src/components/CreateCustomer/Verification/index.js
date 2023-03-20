import React  from 'react'
import './style.css'

function Verification({ formData, setFormData }) {
  
  return (
    <div className='container'>
      <div className='row-4'>
        <div className='component'>
          <h2>Nome Completo</h2>
          <p>{formData.nome}</p> 
        <div/>
        </div>
        <div className='component'>
          <h2>CPF</h2>
          <p>{formData.cpf}</p>
        </div>
         <div className='component'>
          <h2>Email</h2>
          <p>{formData.email}</p>
        </div>
      </div>
      <div className='row-4'>
        <div className='component'>
          <h2>Data de Nascimento</h2>
          <p>{formData.data}</p>
        </div>
        <div className='component'>
          <h2>Telefone</h2>
          <p>{formData.telefone}</p>
        </div>
         <div className='component'>
          <h2>Celular</h2>
          <p>{formData.celular}</p>
        </div>
      </div>
      <div className='row'></div>
      <div className='row-4'>
        <div className='component'>
          <h2>CEP</h2>
          <p>{formData.cep}</p>
        </div>
        <div className='component'>
          <h2>Rua</h2>
          <p>{formData.rua}</p>
        </div>
         <div className='component'>
          <h2>Bairro</h2>
          <p>{formData.bairro}</p>
        </div>
      </div>
      <div className='row-4'>
        <div className='component'>
          <h2>Cidade</h2>
          <p>{formData.cidade}</p>
        </div>
        <div className='component'>
          <h2>Estado</h2>
          <p>{formData.estado}</p>
        </div>
         <div className='component'>
          <h2>Numero</h2>
          <p>{formData.numero}</p>
        </div>
        <div className='component'>
          <h2>Complemento</h2>
          <p>{formData.complemento}</p>
        </div>
      </div>
       <div className='row'></div>
    </div>
  )
}

export default Verification
