import React from 'react'
import '../../styles/box.css'

const Box = () => {
    return (
        <>
            <div className='container-box'>
                <div className='box'>
                    <h1>Clientes Inadimplentes</h1>
                    <p>999</p>
                </div>
                <div className='box'>
                    <h1>Boletos Gerados</h1>
                    <p>999</p>
                </div>
                <div className='box'>
                    <h1>Expectativa de Crédito</h1>
                    <p>R$999.999,99</p>
                </div>
            </div>
        </>
    )
}

export default Box
