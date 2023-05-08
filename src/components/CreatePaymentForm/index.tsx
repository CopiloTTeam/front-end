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
    cpf: string,
    funcionario: string,
    codigo_barra: string,
    data_geracao: string,
    nome_produto: string,
    parcelas: string,
    valor: string,
  }
  const INITIAL_DATA: FormData = {
    cpf: "",
    funcionario: "",
    codigo_barra: "",
    data_geracao: new Date().toISOString().split('T')[0],
    nome_produto: "",
    parcelas: '12',
    valor: "",
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
    ])

  async function submitData(data: any) {
    try {
      let cpf = data.cpf;
      let storage = localStorage.getItem('funcionario');
      let funcionario = '';
      if (storage !== null) {
        let objFuncionario = JSON.parse(storage);
        funcionario = objFuncionario.funcionario.cpf;
      }
      data.funcionario = funcionario;
      let cpf_funcionario = data.funcionario;
      let codigo_barra = data.codigo_barra;
      let data_geracao = data.data_geracao;
      let nome_produto = data.nome_produto;
      let parcelas = data.parcelas;
      let valor = data.valor;

      if (cpf == null || !cpf) {
        toast.warning("O Campo CPF não está preenchido!");
      } else if (cpf_funcionario == null || !cpf_funcionario || cpf_funcionario == '') {
        toast.error("Estamos enfrentando problemas ao cadastrar titulos, tente novamente mais tarde!");
        localStorage.removeItem('funcionario');
        localStorage.removeItem('token');
        navigate('/');
      } else if (codigo_barra == null || !codigo_barra) {
        toast.warning("O Campo Código de Barra não está preenchido!");
      } else if (data_geracao == null || !data_geracao) {
        toast.warning("O Campo Data Geração não está preenchido!");
      } else if (nome_produto == null || !nome_produto) {
        toast.warning("O Campo Nome Do Produto não está preenchido!");
      } else if (parcelas == null || !parcelas) {
        toast.warning("O Campo Parcelas não está preenchido!");
      } else if (valor == null || !valor) {
        toast.warning("O Campo valor não está preenchido!");
      }
      if (cpf && funcionario != '' && funcionario != null && codigo_barra && data_geracao && nome_produto && parcelas && valor) {
        data.valor = data.valor.replace("R$", "").replace(".", "").replace(",", ".");
        var resp = await criarTitulo(data);
        console.log(data);
        if (resp?.status == 201) {
          toast.success('Título criado com sucesso!');
          return true;
        }
        toast.error('Erro ao criar titulo, tente novamente mais tarde!')
        return false
      }
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
