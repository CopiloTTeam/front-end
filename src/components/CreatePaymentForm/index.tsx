import React, { FormEvent, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { BilingInformation } from './BilingInformation'
import { PersonalInformation } from './PersonalInformation'
import '../../styles/global.css'
import { criarTitulo } from '../../utils/axios.routes'
import { useNavigate } from 'react-router-dom';

// import Validation from './Validation'

const PaymentForm = () => {
  const navigate = useNavigate();
  type FormData = {
    id_titulo: string;
    id_cliente: string,
    id_funcionario: string
    data_geracao: string,
    valor:string,
    codigo_barra:string,
    qr_code:string,
    numero_boleto:string,
    nome_produto:string,  
  }
  const INITIAL_DATA: FormData = {
    id_titulo: "",
    id_cliente: "",
    id_funcionario: "",
    data_geracao: "",
    valor:"",
    codigo_barra:"",
    qr_code:"",
    numero_boleto:"",
    nome_produto:"",  
  }
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <PersonalInformation {...data} updateFields={updateFields} />,
       <BilingInformation {...data} updateFields={updateFields} />,
      // <Validation {...data} updateFields={updateFields}/>,
    ])

    async function submitData(data: any) {
      var resp = await criarTitulo(data)
      return resp;
    }
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (isLastStep){
      submitData(data)
      navigate('/home');
      
    }
    next()
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2>Criar Boleto</h2>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
        </form>
        <div className='btn-form'>
          {!isFirstStep && <button className="red" type="button" onClick={back}>Voltar</button>}
          <button className="green" type="submit" onClick={onSubmit}>
            {isLastStep ? "Concluir" : "Avançar"}
          </button>
        </div>
      </div>

    </>

  )

}

export default PaymentForm
