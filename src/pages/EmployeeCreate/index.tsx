
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";

import "./style.css";
import { criarFuncionario } from "../../utils/axios.routes";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import EyeOff from "../../assets/eyeOff.png";
import EyeOn from "../../assets/eyeOn.png";

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  const handleShowSenha = () => {
    setShowSenha(!showSenha);
  };

  async function submitdata(
    nome: String,
    email: String,
    cpf: String,
    senha: String
  ) {
    try {
      const response = await criarFuncionario(nome, email, cpf, senha);
      return response?.status === 201;
    } catch (error) {
      return false;
    }
  }

  async function onsubmit(e: FormEvent) {
    e.preventDefault();

    const success = await submitdata(nome, email, cpf, senha);
    if (success) {
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } else {
      toast.error(`Erro ao cadastrar`);
    }
  }
  // if (isLogged){

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
          <input
            required
            type="text"
            placeholder="Digite seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="cpf-box">
          <h3>CPF</h3>
          <input
            required
            type="text"
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="email-box">
          <h3>Email</h3>
          <input
            required
            type="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="pass-title">
          <h3>Senha</h3>
          <div className="pass-box-container">
            <input
              required
              type={showSenha ? "text" : "password"}
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <a className="button-password" onClick={handleShowSenha}>
              {showSenha ? <img className="passwordImg" src={EyeOff}/> : <img className="passwordImg" src={EyeOn}/>}
            </a>
          </div>
        </div>

        <div className="button-box">
          <button className="enter-button" type="submit">
            {" "}
            Cadastrar{" "}
          </button>
          <p> Ao clicar em "cadastrar" você aceita os termos de uso</p>
        </div>
      </form>
    </div>
  );
};

export default Register;
