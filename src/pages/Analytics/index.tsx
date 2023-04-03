import React, { useEffect, useState } from 'react'
import Graphic from '../../components/Grafic'
import Navbar from '../../components/Navbar'
import './style.css'
import { dadosUsuario } from '../../utils/axios.routes';

const Analytics = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await dadosUsuario(3);
              const data = await response?.data
              setData(data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchData();
  }, []);
  return (
    <>
      <Navbar data={data} />
      <div className='main'>
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
      </div>
    </>
  );
};

export default Analytics;
