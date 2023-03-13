import React from 'react'

function LocalInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row-1'>
        <input type="number"
          placeholder='CEP'
          value={formData.cep}
          onChange={(event) => setFormData({ ...formData, cep: event.target.value })}
        />
        <input type="text"
          placeholder='Rua'
          value={formData.rua}
          onChange={(event) => setFormData({ ...formData, rua: event.target.value })}
        />
      </div>
      <div className='row-2'>
        <input type="text"
          placeholder='Bairro'
          value={formData.bairro}
          onChange={(event) => setFormData({ ...formData, bairro: event.target.value })}
        />
        <input type="text"
          placeholder='Cidade'
          value={formData.cidade}
          onChange={(event) => setFormData({ ...formData, cidade: event.target.value })}
        />
      </div>
      <div className='row-3'>
        <input type="text"
          placeholder='Estado'
          value={formData.estado}
          onChange={(event) => setFormData({ ...formData, estado: event.target.value })}
        />
        <input type="number"
          placeholder='Numero'
          value={formData.numero}
          onChange={(event) => setFormData({ ...formData, numero: event.target.value })}
        />
        <input type="text"
          placeholder='Complemento'
          value={formData.complemento}
          onChange={(event) => setFormData({ ...formData, complemento: event.target.value })}
        />
      </div>
    </div>
  )
}

export default LocalInfo
