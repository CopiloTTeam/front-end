import "./style.css";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react'
import { dadosUsuario } from '../../utils/axios.routes';


const Payout = () => {
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
      <Navbar data={data}/>
      <div className="payout-container">
        <div className="title">
          <h1> Confirmação de Pagamento</h1>
        </div>

        <div className="box-payout">
          <div className="information-payout">
            <h2>
              {" "}
              <b>Nome:</b> Nome do amigo
            </h2>
            <h2>
              {" "}
              <b>Titulo:</b> Nome do titulo
            </h2>
            <h2>
              {" "}
              <b>Valor da Parcela:</b> Valor da parcela
            </h2>
            <h2>
              {" "}
              <b>Data de Vencimento:</b> Data de Vencimento da Parcelas
            </h2>
          </div>
          <hr></hr>
          <div className="box-date">
            <div className="input-date">
              <h1>Data de Pagamento</h1>
              <input required type="date" />
            </div>
            <div className="input-date">
              <h1>Data de Crédito</h1>
              <input required type="date" />
            </div>
            <div className="input-date">
              <h1>Valor do Pagamento</h1>
              <input required type="text" placeholder="R$ 0,00" />
            </div>
          </div>
          <div className="button-payout">
            <button> Confirmar </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payout;
