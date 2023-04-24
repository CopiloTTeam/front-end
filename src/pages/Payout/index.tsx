import "./style.css";
import Navbar from "../../components/Navbar";
import React, { FormEvent, useEffect, useState, useContext } from 'react'
import { baixaParcela, dadosUsuario, updateParcela } from '../../utils/axios.routes';
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Payout = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext);
  const [parcela, setParcela] = useState<any>();
  const [usuario, setUsuario] = useState<any>();
  const { id } = useParams<{ id: string }>();
  const [valorPago , setValorPago] = useState("");

  async function submitdata(valorPago: String) {
    try {
      await updateParcela(id, valorPago);
      toast.success('Parcela paga com sucesso!');
      navigate('/gerenciarparcelas/'+parcela?.id_titulo);
    } catch (error) {
      console.error(error);
      toast.error('Erro ao pagar a parcela. Por favor, tente novamente.');
    }
  }
  function onsubmit(e: FormEvent){
    e.preventDefault()    
    submitdata(valorPago)

  }
    useEffect(() => {   
      if(!isLogged){
        navigate('/')
      }
        const fetchParcela = async () => {
            try {
                const response = await baixaParcela(id);
                const data = await response?.data;
                const UsuarioDados = await dadosUsuario(data.cpf);
                const dataUsuario = await UsuarioDados?.data;
                setUsuario(dataUsuario);
                setParcela(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchParcela();
      }, [id]);
   
      if (isLogged && (funcionario.cargo == 'Administrador' || funcionario.cargo == 'Financeiro')){

        return (
          <>
      <Navbar/>
      <div className="payout-container">
        <div className="title">
          <h1> Confirmação de Pagamento</h1>
        </div>
        <form onSubmit={onsubmit}>
        <div className="box-payout">
          <div className="information-payout">
            <h2>
              {" "}
              <b>Nome: {usuario?.nome}</b>
            </h2>

            <h2>
              {" "}
              <b>Valor da Parcela: R$ {parcela?.valor.toFixed(2)}</b>
            </h2>
            <h2>
              {" "}
              <b>Data de Vencimento: {parcela?.data_vencimento}</b>
            </h2>
          </div>
          <hr></hr>
          <div className="box-date">
          
            <div className="input-date">
              <h1>Valor do Pagamento</h1>
              <input value={valorPago} onChange={e => setValorPago(e.target.value)} required type="text" placeholder="R$ 0,00" />
            </div>
       
          </div>
          <div className="button-payout">
            <button className="enter-button" type="submit"> Confirmar </button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
} else {
  return(
    <></>
  )
}
};

export default Payout;
