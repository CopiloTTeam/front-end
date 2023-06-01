import React from 'react'
import Logo from "../../assets/CopiloTTeam.png"

const Boleto = () => {
  return (
    <div>
      <div className='boletoContainer'>
        <div className='head-content'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
            <h2>CopiloTTeam</h2>
          </div>
          <div className='head-text'>
            <h2>23791.11103.60000.000103 01000.222206 1 48622000000000</h2>
          </div>
        </div>
        <div className='mid-content'>
          <div className='right-side'>
            <div className='item'>
              <p>Local de Pagamento</p>
              <h2>pagável preferêncialmente nas agências do bradesco</h2>
            </div>
            <div className='item'>
              <p>Cedente</p>
              <h2>NF-e Associação NF-e</h2>
            </div>
            <div className='item-flex'>
              <div className='item'>
                <p>Data do Documento</p>
                <h2>25/01/2011</h2>
              </div>
              <div className='item'>
                <p>N° Documento</p>
                <h2>NF 1 1/1</h2>
              </div>
              <div className='item'>
                <p>Espécie doc.</p>
                <h2>.</h2>
              </div>
              <div className='item'>
                <p>Aceite</p>
                <h2>N</h2>
              </div>
              <div className='item'>
                <p>Data Processamento</p>
                <h2>25/01/2011</h2>
              </div>
            </div>
            <div className='item-flex'>
              <div className='item'>
                <p>Uso do Banco</p>
                <h2>.</h2>
              </div>
              <div className='item'>
                <p>Carteira</p>
                <h2>6</h2>
              </div>
              <div className='item'>
                <p>Espécie </p>
                <h2>R$</h2>
              </div>
              <div className='item'>
                <p>Quantidade</p>
                <h2>.</h2>
              </div>
              <div className='item'>
                <p>Valor</p>
                <h2>.</h2>
              </div>
            </div>
            <div className='instruction'>
              <p>Instruções</p>
              <h3>Não receber após o vencimento</h3>
              <h3>Boleto 1 de 1 referenta NF 1 de 06/05/2008 com chave</h3>
              <h3>3508-0599-9990-9091-0270-5500-1000-0000-0151-8005-1273</h3>
            </div>
          </div>
          <div className='left-side'>
            <div className='item'>
              <p>Vencimento</p>
            </div>
            <div className='item'>
              <p>Agência/Código cedente</p>
            </div>
            <div className='item'>
              <p>Carteira/Nosso Número</p>
            </div>
            <div className='item'>
              <p>Valor Documento</p>
            </div>
            <div className='item'>
              <p>Desconto/Abatimento</p>
            </div>
            <div className='item'>
              <p>Outras Opções</p>
            </div>
            <div className='item'>
              <p>Mora/Multa</p>
            </div>
            <div className='item'>
              <p>Outros Acréscimos</p>
            </div>
            <div className='item'>
              <p>Valor Cobrado</p>
            </div>
          </div>
        </div>
        <div className='bottom-content'>
        <p>Código de barras</p>
        </div>
      </div>
    </div>
  )
}

export default Boleto
