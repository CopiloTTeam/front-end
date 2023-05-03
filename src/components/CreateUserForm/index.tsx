import React, { FormEvent, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { LocalInformation } from './LocalInformation'
import { PersonalInformation } from './PersonalInformation'
import { criarCliente } from '../../utils/axios.routes'
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const UserForm = () => {
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

    if (nome == null || !nome) {
      toast.warning(`Nome não está preenchido`);
      errors = errors+1;
    }
    if (cpf == null || !cpf) {
      toast.warning(`CPF não está preenchido`);
      errors = errors+1;
    }
    if (email == null || !email) {
      toast.warning(`Email não está preenchido`);
      errors = errors+1;
    }
    if (data_nascimento == null || !data_nascimento) {
      toast.warning(`Data Nascimento não está preenchido`);
      errors = errors+1;
    }
    if (cep == null || !cep) {
      toast.warning(`CEP não está preenchido`);
      errors = errors+1;
    }
    if (rua == null || !rua) {
      toast.warning(`Rua não está preenchido`);
      errors = errors+1;
    }
    if (bairro == null || !bairro) {
      toast.warning(`Bairro não está preenchido`);
      errors = errors+1;
    }
    if (cidade == null || !cidade) {
      toast.warning(`Cidade não está preenchido`);
      errors = errors+1;
    }
    if (estado == null || !estado) {
      toast.warning(`Esrado não está preenchido`);
      errors = errors+1;
    }
    if (logradouro == null || !logradouro) {
      toast.warning(`Logradouro não está preenchido`);
      errors = errors+1;
    }
    if (complemento == null || !complemento) {
      toast.warning(`Complemento não está preenchido`);
      errors = errors+1;
    } 
    if (telefone == null || !telefone) {
      toast.warning(`Telefone não está preenchido`);
      errors = errors+1;
    } 
    let dataAtual = new Date();
    let dataComparação = new Date(data_nascimento);
    if(dataComparação > dataAtual){
      toast.error(`A data de Nascimento está maior do que a data atual seu imbecil`)
      errors = errors+1
    }
    if (nome && cpf && email && data_nascimento && cep && rua && bairro && cidade && estado && logradouro && complemento && telefone && (dataComparação < dataAtual)){
      errors = 0;
    }
    if (errors == 0) {
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
            <h2>Cadastro de Clientes</h2>
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
