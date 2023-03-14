import React from 'react'

function CobrancaInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>Nome do Produto</p>
          <input type="text"
            placeholder='Nome do Produto'
            value={formData.nomeProduto}
            onChange={(event) => setFormData({ ...formData, nomeProduto: event.target.value })}
          />
        </div>
      </div>
      <div className='row-cn'>
        <div className='bx-input'>
          <p>Valor Total</p>
          <input type="number"
            placeholder='Valor Total'
            value={formData.valorTotal}
            onChange={(event) => setFormData({ ...formData, valorTotal: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Numero Total de Parcelas</p>
          <input type="number"
            placeholder='Numero de Parcelas '
            value={formData.numeroParcelas}
            onChange={(event) => setFormData({ ...formData, numeroParcelas: event.target.value })}
          />
        </div>
        <div className='bx-input'>
          <p>Data de Vencimento</p>
          <input type="date"
            placeholder='Data de Vencimento '
            value={formData.dataVencimento}
            onChange={(event) => setFormData({ ...formData, dataVencimento: event.target.value })}
          />
        </div>
      </div>
    </div>
  )
}

export default CobrancaInfo