import React, {useState} from 'react'
import CobrancaInfo from './CobrancaInfo';
import PessoalInfo from './PessoalInfo';
import Verification from './Verification';

const CreateBoleto = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        nome: "Pedro Henrique da Silva Campos",
        cpf: "1234567890",
        email: "pedrocmpos@gmail.com",
        nomeProduto: "Cadeira Gamer",
        valorTotal: "590",
        numeroParcelas: "12",
        dataVencimento: "",
       
    });

    const FormTitles = ["Informações Pessoais - Etapa 1/3",
        "Informaçõs de Cobrança - Etapa 2/3",
        "Verificação - Etapa 3/3"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PessoalInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <CobrancaInfo formData={formData} setFormData={setFormData} />
        } else {
            return <Verification formData={formData} setFormData={setFormData} />
        }
    }
  return (
   <>
     <div className='form'>
                <div className="title">
                    <h2>Criar Novo Boleto</h2>
                </div>
                <div className='Progressbar'>
                    <div
                        style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}></div>
                </div>
                <p className='subtitle'>{FormTitles[page]}</p>
                <div className='body'>{PageDisplay()}</div>
                <div className="btn">
                    <button
                        className="back"
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Voltar
                    </button>
                    <button
                    className="go"
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("Boleto Criado!");
                                console.log(formData)
                            } else {
                                setPage((currPage) => currPage + 1);
                            }

                        }}
                    >
                        {page === FormTitles.length - 1 ? "Emitir Boleto" : "Próximo"}
                    </button>
                </div>

            </div>
   </>
  )
}

export default CreateBoleto