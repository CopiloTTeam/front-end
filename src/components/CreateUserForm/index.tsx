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
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    logradouro: string;
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
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "5rem"}}>
            <h2>Cadastro de Clientes</h2>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
        </form>
        <div>
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
