/* Nome, Email, senha, cpf, cargo */

import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className="login-container" >
      <div className="image-left">

      </div>
      <div className="form-right">
        <div className="info">
          <h1> Cadastro </h1>
          <h2> Preencha as informações para realizar o cadastro, você terá acesso ao sistema após a aprovação do administrador</h2>
        </div>
        <div className="email-box">
          <h3>Email</h3>
          <input
            required
            type="text"
            placeholder="Digite seu Email"
          />
        </div>

        <div className="pass-box">
          <h3>Senha</h3>
          <input
            required
            type="text"
            placeholder="Digite sua Senha"
          />
        </div>
        <div className='button-box'>
          <button className="enter-button"> Entrar </button>
         <p>Não Possui Conta ? <a href='/cadastro'> Cadastre Aqui </a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
