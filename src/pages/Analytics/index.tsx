import React from 'react'
import Graphic from '../../components/Grafic'
import Navbar from '../../components/navbar'
import './style.css'

const Analytics = () => {

  return (
    <>
      <Navbar />
      <main>
        <div className="top-box">
          <h3>Gerenciamento de Parcelas</h3>
          <div className="select-box">
            <div className="select-input">
              <h3>Data de Inicio</h3>
              <input
                required
                type="date"
              />
            </div>
            <div className="select-input">
              <h3>Data de Fim</h3>
              <input
                required
                type="date"
              />
            </div>
            <div className='select-input'>
              <h3>Status</h3>
            <select name="choice">
              <option value="first">---- Selecione ----</option>
              <option value="first">Adiantado</option>
              <option value="second">Pendente</option>
              <option value="third">Atrasado</option>
            </select>
            </div>
          </div>
        </div>
        <Graphic />
      </main>
    </>
  );
};

export default Analytics;
