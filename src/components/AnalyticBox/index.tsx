import React from 'react'
import './style.css'

const AnalyticBox = () => {
    return (
        <>
            <div className="bg">
                <div className="box-container">
                    <div className="box">
                        <p>Clientes Inadimplentes:</p>
                        <h1>999</h1>
                    </div>
                    <div className="box">
                        <p>Expectatviva de Crédito:</p>
                        <h1>R$999.999,99</h1>
                    </div>
                    <div className="box">
                        <p>Boletos Gerados:</p>
                        <h1>999</h1>
                    </div>
                </div>
            </div>
            <div className='grafico'>
                
            </div>
        </>
    )
}

export default AnalyticBox
