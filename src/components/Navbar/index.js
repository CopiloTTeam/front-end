import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import "./style.css";
import "../../styles/global/global.css";

import AddUser from "../../assets/img/adicionarUser.png";
import AddBoleto from "../../assets/img/adicionarBoleto.png";
import Analytics from "../../assets/img/estatistica.png";
import Perfil from "../../assets/img/perfil.png";
import Logout from "../../assets/img/logout.png";

const Navbar = () => {
  const location = useLocation();
  const [closeMenu, setCloseMenu] = useState(true);
  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div
        className={
          closeMenu === false ? "burgerContainer" : "burgerContainer active"
        }
      >
        <div
          className="burgerTrigger"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className="burgerMenu"></div>
      </div>
      <a href="/Perfil">
        <div className="profileContainer">
          <img src={Perfil} alt="perfil" className="profile" />
          <div className="profileContents">
            <p className="name">Olá, Bobby</p>
            <p>Comercial</p>
          </div>
        </div>
      </a>
      <div className="contentsContainer">
        <ul>
          <a href="/Cadastro">
            <li className={location.pathname === "/Cadastro" ? "active" : ""}>
              <img src={AddUser} alt="adicionarUser" className="icon" />
              <p>Cadastrar Cliente</p>
            </li>
          </a>
          <a href="/Boletos">
            <li className={location.pathname === "/Boletos" ? "active" : ""}>
              <img src={AddBoleto} alt="adicionarBoleto" className="icon" />
              <p>Criar Boleto</p>
            </li>
          </a>
          <a href="/Home">
            <li
              className={location.pathname === "/Home" ? "active" : ""}
            >
              <img src={Analytics} alt="Home" className="icon" />
              <p>Home</p>
            </li>
          </a>
          <a href="/logout">
            <li className="logout">
              <img src={Logout} alt="logout" className="icon" />
              <p>Desconectar</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
