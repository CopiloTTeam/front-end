import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css'

const PlotManagement = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className='plot-container'>
                    <div className='plot-info'>
                        <h3>Nome: </h3><p>Bobby</p>
                        <h3>Titulo:</h3><p> Martelo de Borracha 50g</p>
                    </div>
                        <details>

                            <summary>
                                <h3>Parcela/Maio</h3>
                                <p>Status</p>
                            </summary>
                            <div className="card-completo">
                                <div className="conteudo">
                                </div>
                            </div>
                        </details>
                    <details>
                        <summary>
                            <h3>Parcela/Junho</h3>
                            <p>Status</p>
                        </summary>
                        <div className="card-completo">
                            <div className="conteudo">
                            </div>
                        </div>
                    </details>
                </div>
            </main>
        </>
    )
}

export default PlotManagement