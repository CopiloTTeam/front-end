import "./style.css";
import React, {useEffect, useState} from 'react'
import { ListarParcela } from "../../utils/axios.routes"

const AnalyticBox = () => {
  const [dados, setDados]= useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await ListarParcela ();
        setDados(resp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="bg">
        <div className="box-container">
          <div className="box">
            <p>Clientes Inadimplentes:</p>
            <h1>999</h1>
          </div>
          <div className="box">
            <p>Expectaviva de Crédito:</p>
            <h1>R$999.999,99</h1>
          </div>
          <div className="box">
            <p>Boletos Gerados:</p>
            <h1>{}</h1>
          </div>
        </div>
      </div>
      <div className="grafico"></div>
    </>
  );
};

export default AnalyticBox;
