import "./style.css";
import React, { useContext, useEffect, useState } from 'react'
import { ListarParcela } from "../../utils/axios.routes"
import { AuthContext } from "../../contexts/AuthContext";

const AnalyticBox = () => {
  const [dados, setDados] = useState<any>();
  const { isLogged, funcionario } = useContext(AuthContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const resp = await ListarParcela();
        // setDados(resp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (isLogged) {
    if (funcionario.cargo == 'Administrador') {
      return (
        <>
          <div className="bg">
            <div className="box-container">
              <div className="box">
                <p>Crédito Real:</p>
                <h1>{  }</h1>
              </div>
              <div className="box">
                <p>Expectaviva de Crédito:</p>
                <h1>{  }</h1>
              </div>
              <div className="box">
                <p>Títulos Gerados:</p>
                <h1>{ }</h1>
              </div>
            </div>
          </div>
          <div className="grafico"></div>
        </>
      );
    } else if(funcionario.cargo == 'Financeiro'){
      return(
        <>
          <div className="bg">
            <div className="box-container">
              <div className="box">
                <p>Clientes Inadimplentes:</p>
                <h1>{   }</h1>
              </div>
              <div className="box">
                <p>Clientes Adimplentes:</p>
                <h1>{   }</h1>
              </div>
              <div className="box">
                <p>Títulos Pagos Hoje:</p>
                <h1>{   }</h1>
              </div>
            </div>
          </div>
          <div className="grafico"></div>
        </>
      )
    } else if(funcionario.cargo == 'Comercial'){
      return(
        <>
          <div className="bg">
            <div className="box-container">
              <div className="box">
                <p>Total de Títulos Vendidos:</p>
                <h1>999</h1>
              </div>
              <div className="box">
                <p>Total de Titulos vendidos Hoje:</p>
                <h1>R$999.999,99</h1>
              </div>
              <div className="box">
                <p>Total de clientes inadimplentes:</p>
                <h1>{ }</h1>
              </div>
            </div>
          </div>
          <div className="grafico"></div>
        </>
      )
    } else {
      return(
        <></>
      );
    }
  } else {
    return(
      <></>
    )
  }
};

export default AnalyticBox;
