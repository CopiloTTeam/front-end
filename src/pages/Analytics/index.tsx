import React, { useContext, useEffect, useState } from 'react'
import Graphic from '../../components/Grafic'
import Navbar from '../../components/Navbar'
import './style.css'
import { dadosUsuario } from '../../utils/axios.routes';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Analytics = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext)

  const [data, setData] = useState<any>();

  useEffect(() => {
    if(!isLogged){
      navigate('/')
    }
      const fetchData = async () => {
          try {
              const response = await dadosUsuario(2);
              const data = await response?.data
              setData(data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchData();
  }, []);
  if(isLogged && (funcionario.cargo == 'Administrador' || funcionario.cargo == 'Financeiro')){
    return (
      <>
      <Navbar/>
      <div className='main'>
        <div className="top-box">
          <h3>Clientes Adimpletes e Inadimplentes</h3>
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
              <option value="first">Data de Crédito</option>
              <option value="second">Data de Pagamento</option>
              <option value="third">Data de Vencimento</option>
            </select>
            </div>
          </div>
        </div>
        <Graphic />
      </div>
    </>
  );
} else if(isLogged && funcionario.cargo == 'Comercial'){
  return(
    <>
      <Navbar/>
      <div className='main'>
        <div className="top-box">
          <h3>Clientes Atrasados com o pagamento</h3>
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
              <option value="third">Data de Vencimento</option>
            </select>
            </div>
          </div>
        </div>
        <Graphic />
      </div>
    </>
  )
} else{
  return(
    <></>
  )
};

}
export default Analytics;
