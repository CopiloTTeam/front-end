import React, { useContext, useEffect, useState } from "react";
import ClientGraphic from "../../components/Graphic/ClientGraphic";
import PaymentGraphic from "../../components/Graphic/PaymentGraphic";
import ValueGraphic from "../../components/Graphic/ValueGraphic";
import Navbar from "../../components/Navbar";
import "./style.css";
import { dadosUsuario } from "../../utils/axios.routes";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Analytics = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext);

  const [data, setData] = useState<any>();
  const [selectedButton, setSelectedButton] = useState<string>("");

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
    const fetchData = async () => {
      try {
        const response = await dadosUsuario(2);
        const data = await response?.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderSelectedGraphic = () => {
    switch (selectedButton) {
      case "clientes":
        return <ClientGraphic />;
      case "pagamentos":
        return <PaymentGraphic />;
      case "valores":
        return <ValueGraphic />;
      default:
        return null;
    }
  };

  const handleButtonSelect = (selected: string) => {
    setSelectedButton(selected);
  };

  if (
    isLogged &&
    (funcionario.cargo == "Administrador" || funcionario.cargo == "Financeiro")
  ) {
    return (
      <>
        <Navbar />
        <div className="main">
          <h2>Estatisticas</h2>
          <div className="button-select-graphics">
            <button
              className="button-graphics"
              onClick={() => handleButtonSelect("clientes")}
            >
              Situação dos Clientes
            </button>
            <button
              className="button-graphics"
              onClick={() => handleButtonSelect("pagamentos")}
            >
              Situação dos Pagamento
            </button>
            <button
              className="button-graphics"
              onClick={() => handleButtonSelect("valores")}
            >
              Valores
            </button>
          </div>
          <div className="select-box">
            <div className="select-input">
              <h3>Data de Inicio</h3>
              <input type="date" />
            </div>
            <div className="select-input">
              <h3>Data de Fim</h3>
              <input type="date"/>
            </div>
          </div>
          {renderSelectedGraphic()}
        </div>
      </>
    );
  } else if (isLogged && funcionario.cargo == "Comercial") {
    return (
      <>
        <Navbar />
        <div className="main">
          <h2>Cadastro de Clientes</h2>
          <div className="button-select-graphics">
            <button
              className="button-graphics"
              onClick={() => handleButtonSelect("clientes")}
            >
              Situação dos Clientes
            </button>
            <button
              className="button-graphics"
              onClick={() => handleButtonSelect("pagamentos")}
            >
              Situação dos Pagamento
            </button>
            <button
              className="button-graphics"
              onClick={() => handleButtonSelect("valores")}
            >
              Valores
            </button>
          </div>
          {renderSelectedGraphic()}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
export default Analytics;
