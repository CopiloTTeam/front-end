/* Nome, Email, senha, cpf, cargo */
import "./style.css";
import { criarFuncionario, dadosUsuario } from '../../utils/axios.routes';
import React, {  useState, FormEvent, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext)
  if(!isLogged){
    navigate('/')
  }
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");


  async function submitdata(nome: String, email: String, cpf: String, senha: String) {
    await criarFuncionario(nome, email, cpf, senha);
    navigate('/');
  }

  function onsubmit(e: FormEvent){
    e.preventDefault()
    submitdata(nome, email, cpf, senha)
  }
  if (isLogged){

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
      <form onSubmit={onsubmit}>
      <div className="name-box">
        <h3>Nome</h3>
        <input required type="text" placeholder="Digite seu Nome"  value={nome} onChange={e => setNome(e.target.value)}/>
      </div>

      <div className="cpf-box">
        <h3>CPF</h3>
        <input required type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
      </div>

      <div className="email-box">
        <h3>Email</h3>
        <input required type="text" placeholder="Digite seu Email" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>

      <div className="pass-box">
        <h3>Senha</h3>
        <input required type="text" placeholder="Digite sua Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
      </div>

      <div className="button-box">
        <button className="enter-button" type='submit'> Cadastrar </button>
        <p> Ao clicar em "cadastrar" você aceita os termos de uso</p>
      </div>
    </form>
    </div>
  );
} else {
  return(
    <></>
  )
}
};

export default Register;
