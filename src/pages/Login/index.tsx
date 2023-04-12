import React, { useState, useContext } from "react";
import "./style.css";
import Rocket from "../../assets/rocket.png";
import { dadosFuncionarioc, login } from "../../utils/axios.routes";
import { useNavigate } from "react-router-dom";
import { AuthContext, FuncionarioInicio } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);
  // console.log(email, password)

  const { setFuncionario, setIsLogged } = useContext(AuthContext);
  let funcionarioo = FuncionarioInicio;
  async function procuraFuncionario(cpf: string) {
    try {
      let funcionario = await dadosFuncionarioc(cpf);
      if (
        funcionario != undefined &&
        funcionario != null &&
        funcionario.status == 200
      ) {
        funcionarioo.id = funcionario?.data.id;
        funcionarioo.cargo = funcionario?.data.cargo;
        funcionarioo.cpf = funcionario?.data.cpf;
        funcionarioo.email = funcionario?.data.email;
        funcionarioo.nome = funcionario?.data.nome;
        funcionarioo.senha = funcionario?.data.senha;
        setFuncionario(funcionarioo);
        setIsLogged(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const data = {
      email: email,
      senha: password,
    };
    try {
      let resp = await login(data);
      if (resp?.data && resp?.status === 200) {
        const cpf = resp.data;
        if (cpf) {
          procuraFuncionario(cpf);
        }
        navigate("/home");
      } else {
        console.log(resp?.status, resp?.data);
      }
    } catch (error) {}
  }

  return (
    <div className="login-container">
      <div className="image-left">
        <img src={Rocket} alt="vasco" />
      </div>
      <div className="form-right">
        <div className="form-box">
          <div className="info">
            <h1> Login </h1>
            <h2> Utilize suas credenciais para acessar o sistema</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="email-box">
              <h3>Email</h3>
              <input
                required
                type="text"
                placeholder="Digite seu Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="pass-box">
              <h3>Senha</h3>
              <input
                required
                type="password"
                placeholder="Digite sua Senha"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="button-box">
              <button type="submit" className="enter-button">
                {" "}
                Entrar{" "}
              </button>
              <p>
                Não Possui Conta ? <Link to="/cadastro"> Cadastre Aqui </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
