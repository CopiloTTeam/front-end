import React, { FormEvent, useState } from 'react'
import { useMultistepForm } from '../../utils/function'
import { BilingInformation } from './BilingInformation'
import { PersonalInformation } from './PersonalInformation'
import '../../styles/global.css'
import { criarTitulo } from '../../utils/axios.routes'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'


const PaymentForm = () => {
  const navigate = useNavigate();
  type FormData = {
    cpf_cliente: string,
    cpf_funcionario: string,
    codigo_barra:string,
    data_geracao: string,
    nome_produto:string,
    parcelas:string,  
    valor:string,
  }
  const INITIAL_DATA: FormData = {
    cpf_cliente: "",
    cpf_funcionario: "",
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
      try {
        var resp = await criarTitulo(data);
        toast.success('Título criado com sucesso!');
        return true;
      } catch (error) {
        toast.error('Não foi possível criar o título. Por favor, tente novamente mais tarde.');
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
