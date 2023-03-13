import React from 'react'

function CobrancaInfo ({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row-1'>
        <input type="text"
          placeholder='Nome do Produto'
          value={formData.nomeProduto}
          onChange={(event) => setFormData({ ...formData, nomeProduto: event.target.value })} 
        />
      </div>
      <div className='row-2'>
        <input type="number"
          placeholder='Valor Total'
          value={formData.valorTotal}
          onChange={(event) => setFormData({ ...formData, valorTotal: event.target.value })} 
          />
          <input type="number"
          placeholder='Numero de Parcelas '
          value={formData.numeroParcelas}
          onChange={(event) => setFormData({ ...formData, numeroParcelas: event.target.value })} 
          />
          <input type="date"
          placeholder='Data de Vencimento '
          value={formData.dataVencimento}
          onChange={(event) => setFormData({ ...formData, dataVencimento: event.target.value })} 
          />
      </div>
    </div>
  )
}

export default CobrancaInfo