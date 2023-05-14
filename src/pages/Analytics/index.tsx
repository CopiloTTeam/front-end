import React, { useContext, useEffect, useState } from "react";
import Graphic from "../../components/Grafic";
import Navbar from "../../components/Navbar";
import "./style.css";
import { dadosUsuario } from "../../utils/axios.routes";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Analytics = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext);

  const [data, setData] = useState<any>();

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
  if (
    isLogged &&
    (funcionario.cargo == "Administrador" || funcionario.cargo == "Financeiro")
  ) {
    return (
      <>
        <Navbar />
        <div className="container-stats">
          <h2>Cadastro de Clientes</h2>
          <div className="button-select-graphics">
            <button className="button-graphics">Situação dos Clientes</button>
            <button className="button-graphics">Situação dos Pagamento</button>
            <button className="button-graphics">Valores</button>
          </div>
        </div>
      </>
    );
  } else if (isLogged && funcionario.cargo == "Comercial") {
    return (
      <>
        <Navbar />
        <div className="container-stats">
          <h2>Cadastro de Clientes</h2>
          <div className="button-select-graphics">
            <button className="button-graphics">Situação dos Clientes</button>
            <button className="button-graphics">Situação dos Pagamento</button>
            <button className="button-graphics">Valores</button>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
export default Analytics;
