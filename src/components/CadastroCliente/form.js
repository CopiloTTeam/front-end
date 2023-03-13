import React, { useState } from 'react'
import LocalInfo from './localInfo';
import PersonalInfo from './personalInfo';
import Verification from './verification';

const MultistepForm = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        nome: "Victor dos Santos Salles",
        cpf: "47193452800",
        email: "victorgamesbr091@gmail.com",
        data: "11042004",
        telefone: "12988083815",
        celular: "12389075385",
        cep: "12225670",
        rua: "Rua dos Encanadores",
        bairro: "Novo Horizonte",
        cidade: "São José dos Campos",
        estado: "SP",
        numero: "151",
        complemento: "",
    });

    const FormTitles = ["Informações Pessoais - Etapa 1/3",
        "Informaçõs de Localidade - Etapa 2/3",
        "Verificação - Etapa 3/3"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <LocalInfo formData={formData} setFormData={setFormData} />
        } else {
            return <Verification formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <>
            <div className='form'>
                <div className="title">
                    <h2>Cadastro de Clientes</h2>
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
                                alert("Cliente Cadastrado!");
                                console.log(formData)
                            } else {
                                setPage((currPage) => currPage + 1);
                            }

                        }}
                    >
                        {page === FormTitles.length - 1 ? "Finalizar" : "Próximo"}
                    </button>
                </div>

            </div>
        </>
    )
}

export default MultistepForm
