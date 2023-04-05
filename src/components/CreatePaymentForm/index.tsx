import React, { FormEvent, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { BilingInformation } from './BilingInformation'
import { PersonalInformation } from './PersonalInformation'
import '../../styles/global.css'
import { criarTitulo } from '../../utils/axios.routes'
import { useNavigate } from 'react-router-dom';


const PaymentForm = () => {
  const navigate = useNavigate();
  type FormData = {
    cpf: string,
    id_funcionario: string,
    codigo_barra:string,
    data_geracao: string,
    nome_produto:string,
    parcelas:string,  
    valor:string,
  }
  const INITIAL_DATA: FormData = {
    cpf: "",
    id_funcionario: "",
    codigo_barra:"",
    data_geracao: "",
    nome_produto:"",
    parcelas:"",  
    valor:"",
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
      window.location.reload();

      
    }
    next()
  }
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2>Emitir Título</h2>
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
