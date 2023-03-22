import React from 'react'

function CobrancaInfo({ formData, setFormData }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='box'>
          <h1>Nome do Produto</h1>
          <input type="text"
            placeholder='Nome do Produto'
            value={formData.nomeProduto}
            onChange={(event) => setFormData({ ...formData, nomeProduto: event.target.value })}
          />
        </div>
      </div>
      <div className='row'>
        <div className='third-box'>
          <h1>Valor Total</h1>
          <input type="number"
            placeholder='Valor Total'
            value={formData.valorTotal}
            onChange={(event) => setFormData({ ...formData, valorTotal: event.target.value })}
          />
        </div>
        <div className='fourth-box'>
          <h1>Numero Total de Parcelas</h1>
          <input type="number"
            placeholder='Numero de Parcelas '
            value={formData.numeroParcelas}
            onChange={(event) => setFormData({ ...formData, numeroParcelas: event.target.value })}
          />
        </div>
        <div className='fifth-box'>
          <h1>Data de Vencimento</h1>
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