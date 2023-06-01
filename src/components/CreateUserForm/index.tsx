import React, { FormEvent, useContext, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { LocalInformation } from './LocalInformation'
import { PersonalInformation } from './PersonalInformation'
import { criarCliente, criarLog } from '../../utils/axios.routes'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthContext'


const UserForm = () => {
  const { isLogged, funcionario } = useContext(AuthContext)
  const navigate = useNavigate();

  type FormData = {
    nome: string,
    cpf: string,
    email: string,
    data: string,
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    logradouro: string,
    complemento: string,
    telefone: string
  }
  const INITIAL_DATA: FormData = {
    nome: "",
    cpf: "",
    email: "",
    data: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    logradouro: "",
    complemento: "",
    telefone: ""
  }
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <LocalInformation {...data} updateFields={updateFields} />,
      <PersonalInformation {...data} updateFields={updateFields} />,
    ])

  function verificarCampos(data: any) {
    let errors = 0;
    let nome = data.nome;
    let cpf = data.cpf;
    let email = data.email;
    let data_nascimento = data.data;
    let cep = data.cep;
    let rua = data.rua;
    let bairro = data.bairro;
    let cidade = data.cidade;
    let estado = data.estado;
    let logradouro = data.logradouro;
    let complemento = data.complemento;
    let telefone = data.telefone;

    var strCPF = cpf.replace(/[^\d]+/g, '');
    var Soma;
    Soma = 0;
    var Resto;
    let CPFvalido = true;
    if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" || strCPF == "99999999999") {
      CPFvalido = false;
    }
    for (let i: number = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) CPFvalido = false;

    Soma = 0;
    for (let i: number = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) CPFvalido = false;

    if (nome == null || !nome) {
      toast.warning(`Nome não está preenchido`);
    }
    else if (strCPF == null || !strCPF) {
      toast.warning(`O campo de cpf está Vazio!`);
    }
    else if (strCPF.length < 11) {
      toast.warning(`O campo de cpf está incompleto!`);
    }
    else if (CPFvalido == false) {
      toast.warning(`O campo de cpf está inválido!`);
    }
    else if (email == null || !email) {
      toast.warning(`Email não está preenchido`);
    }
    else if (data_nascimento == null || !data_nascimento) {
      toast.warning(`Data Nascimento não está preenchido`);
    }
    else if (cep == null || !cep) {
      toast.warning(`CEP não está preenchido`);
    }
    else if (rua == null || !rua) {
      toast.warning(`Rua não está preenchido`);
    }
    else if (bairro == null || !bairro) {
      toast.warning(`Bairro não está preenchido`);
    }
    else if (cidade == null || !cidade) {
      toast.warning(`Cidade não está preenchido`);
    }
    else if (estado == null || !estado) {
      toast.warning(`Estado não está preenchido`);
    }
    else if (logradouro == null || !logradouro) {
      toast.warning(`Logradouro não está preenchido`);
    }
    else if (complemento == null || !complemento) {
      toast.warning(`Complemento não está preenchido`);
    }
    else if (telefone == null || !telefone) {
      toast.warning(`Telefone não está preenchido`);
    }
    else if (nome && cpf && email && data_nascimento && cep && rua && bairro && cidade && estado && logradouro && complemento && telefone) {
      return true
    }
    return false
  }
  async function submitData(data: any) {
    try {
      let verifica = verificarCampos(data);
      if (verifica == true) {
        let resp = await criarCliente(data);
        if (resp?.status === 201) {
          toast.success('Cliente criado com sucesso!');
          await criarLog({
            idFuncionario: funcionario.cpf,
            idCliente: data.cpf,
            descricao: `O funcionario ${funcionario.nome} acabou de cadastrar o cliente ${data.nome}`
          })
          return true;
        }
        toast.error('Não foi possível criar o cliente. Por favor, tente novamente mais tarde.');
        return false
      }
    } catch (error) {
      toast.error('Não foi possível criar o cliente. Por favor, tente novamente mais tarde.');
      console.error(error);
      return false;
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLastStep) {
      submitData(data).then((success) => {
        if (success) {
          navigate('/home');
        }
      });
    }
    next();
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2>Cadastro de clientes</h2>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
        </form>
        <div className='btn-form'>
          {!isFirstStep && <button className='red' type="button" onClick={back}>Voltar</button>}
          <button className='green' type="submit" onClick={onSubmit}>
            {isLastStep ? "Concluir" : "Avançar"}
          </button>
        </div>
      </div>
    </>
  )
}

export default UserForm
