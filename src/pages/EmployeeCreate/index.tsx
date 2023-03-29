/* Nome, Email, senha, cpf, cargo */

import React from "react";
import "./style.css";

const Register = () => {
  return (
    <div
      className="
    register-container"
    >
      <div className="title">
        <h1> Cadastro </h1>
        <h2>
          {" "}
          Preencha as informações para realizar o cadastro, você terá acesso ao
          sistema após a aprovação do administrador
        </h2>
      </div>
      <div className="name-box">
        <h3>Nome</h3>
        <input required type="text" placeholder="Digite seu Nome" />
      </div>

      <div className="cpf-box">
        <h3>CPF</h3>
        <input required type="text" placeholder="Digite seu CPF" />
      </div>

      <div className="email-box">
        <h3>Email</h3>
        <input required type="text" placeholder="Digite seu Email" />
      </div>

      <div className="pass-box">
        <h3>Senha</h3>
        <input required type="text" placeholder="Digite sua Senha" />
      </div>

      <div className="button-box">
        <button className="enter-button"> Cadastrar </button>
        <p> Ao clicar em "cadastrar" você aceita os termos de uso</p>
      </div>
    </div>
  );
};

export default Register;
