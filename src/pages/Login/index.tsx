import React from 'react'
import './style.css'
import Rocket from '../../assets/rocket.png'

const Login = () => {
  return (
    <div className="login-container" >
      <div className="image-left">
        <img src={Rocket} alt='rocket' />
      </div>
      <div className="form-right">
        <div className='form-box'>
          <div className="info">
            <h1> Login </h1>
            <h2> Utilize suas credenciais para acessar o sistema</h2>
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
    </div>
  )
}

export default Login
