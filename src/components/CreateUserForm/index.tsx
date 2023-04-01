import React, { FormEvent, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { LocalInformation } from './LocalInformation'
import { PersonalInformation } from './PersonalInformation'

const UserForm = () => {
  type FormData = {
    nome: string,
    cpf: string,
    email: string,
    data: string,
    telefone: string,
    celular: string,
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    numero: string,
    complemento: string,
  }
  const INITIAL_DATA: FormData = {
    nome: "",
    cpf: "",
    email: "",
    data: "",
    telefone: "",
    celular: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    numero: "",
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

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    next()
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2>Cadastro de Clientes</h2>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
        </form>
        <div className='btn-form'>
          {!isFirstStep && <button className='red' type="button" onClick={back}>Voltar</button>}
          <button className='green' type="submit" onClick={next}>
            {isLastStep ? "Concluir" : "Avançar"}
          </button>
        </div>
      </div>

    </>

  )

}

export default UserForm
