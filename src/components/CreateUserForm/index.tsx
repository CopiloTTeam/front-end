import React, { FormEvent, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { LocalInformation } from './LocalInformation'
import { PersonalInformation } from './PersonalInformation'
import { criarCliente } from '../../utils/axios.routes'
import { useNavigate } from 'react-router-dom';
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
      // <Validation {...data} updateFields={updateFields}/>,
    ])
    
    async function submitData(data: any) {
      try {
        let resp = await criarCliente(data);
        toast.success('Cliente criado com sucesso!');
        return true;
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
