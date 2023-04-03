import React from 'react'
import './style.css'
import Navbar from '../../components/navbar';

const Payout = () => {

    return (
        <>
            <Navbar />
            <div className="payout-container">
                <div className='title'>
                    <h1> Confirmação de Pagamento</h1>
                </div>

                <div className='box-payout'>
                    <div className='information-payout'>
                        <h2> <b>Nome:</b> Nome do amigo</h2>
                        <h2> <b>Titulo:</b> Nome do titulo</h2>
                        <h2> <b>Valor da Parcela:</b> Valor da parcela</h2>
                        <h2> <b>Data de Vencimento:</b> Data de Vencimento da Parcelas</h2>
                    </div>
                    <div className="box-date">
                        <div className="input-date">
                            <h1>Data de Pagamento</h1>
                            <input
                                required
                                type="date"
                            />
                        </div>
                        <div className="input-date">
                            <h1>Data de Crédito</h1>
                            <input
                                required
                                type="date"
                            />
                        </div>
                        <div className="input-date">
                            <h1>Valor do Pagamento</h1>
                            <input
                                required
                                type="text"
                                placeholder="R$ 0,00"
                            />
                        </div>
                    </div>
                    <button> fasdfsa </button>
                </div>
            </div>
        </>
    );
};

export default Payout;
