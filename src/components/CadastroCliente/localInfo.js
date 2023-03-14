import React from 'react'

function LocalInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>CEP</p>
          <input type="number"
            placeholder='CEP'
            value={formData.cep}
            onChange={(event) => setFormData({ ...formData, cep: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Rua</p>
          <input type="text"
            placeholder='Rua'
            value={formData.rua}
            onChange={(event) => setFormData({ ...formData, rua: event.target.value })}
          />
        </div>
      </div>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>Bairro</p>
          <input type="text"
            placeholder='Bairro'
            value={formData.bairro}
            onChange={(event) => setFormData({ ...formData, bairro: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Cidade</p>
          <input type="text"
            placeholder='Cidade'
            value={formData.cidade}
            onChange={(event) => setFormData({ ...formData, cidade: event.target.value })}
          />
        </div>
      </div>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>Estado</p>
          <input type="text"
            placeholder='Estado'
            value={formData.estado}
            onChange={(event) => setFormData({ ...formData, estado: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Numero</p>
          <input type="number"
            placeholder='Numero'
            value={formData.numero}
            onChange={(event) => setFormData({ ...formData, numero: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Telefone</p>
          <input type="text"
            placeholder='Complemento'
            value={formData.complemento}
            onChange={(event) => setFormData({ ...formData, complemento: event.target.value })}
          />
        </div>
      </div>
    </div>
  )
}

export default LocalInfo
