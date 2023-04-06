import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { dadosUsuario, gerenciarParcelaTitulo, gerenciarTitulo } from "../../utils/axios.routes";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../contexts/AuthContext";

interface Parcela {
  data_vencimento: string;
  cpf: string;
  nome_produto: string;
  id_parcela: string;
  data_pagamento: string;
  status: string;
}

const PlotManagement = () => {
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext)
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [client, setClient] = useState<any>();
  const [parcela, setParcela] = useState<any>(null);

  const getMonthName = (month: number) => {
   
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    return months[month];
  };

  const getDueMonth = (dataVencimento: any) => {
    if (dataVencimento) {
      const dueDate = new Date(dataVencimento);
      return getMonthName(dueDate.getMonth());
    } else {
      return '';
    }
  };
  

  useEffect(() => {
    if(!isLogged){
      navigate('/')
    }
    const fetchData = async () => {
      try {
        const response = await gerenciarTitulo(id);
        const data = await response?.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchClient = async () => {
      try {
        const responseTeste = await gerenciarTitulo(id);
        const dadosTeste = await responseTeste?.data;
        const cpf = dadosTeste?.cpf;
        const response = await dadosUsuario(cpf);
        const Cliente = await response?.data;
        setClient(Cliente);
        
        
      } catch (error) {
        console.error(error);
      }
    };

    const fetchParcela = async () => {
      try {
        const response = await gerenciarParcelaTitulo(id);
        const data = await response?.data;
        setParcela(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchParcela();
    fetchClient();
  }, [id]);
if (isLogged){

  return (
    <>
      <Navbar />
      <main>
        <div className="plot-container">
          <div className="plot-info">
            <h3>Nome: </h3>
            <p>{client?.nome}</p>
            <h3>Titulo:</h3>
            <p>{data?.nome_produto}</p>
          </div>
          {parcela && parcela.map((item: Parcela) => {
            return (
              <details key={item.id_parcela}>
                <summary>
                  {/* {getDueMonth(item.data_vencimento)} */}
                  <h3>Parcela / {item.data_vencimento }</h3>
                  <p>Status: {item?.status=='1'? 'Pago': 'Pendente'}</p>
                  { item.status == "0" ? <Link to={`/payout/${item.id_parcela}`}>Ver mais</Link>: null}
                  
                </summary>
                <div className="card-completo">
                  <div className="conteudo"></div>
                </div>
              </details>
            );
          })}
        </div>
      </main>
    </>
  );
} else {
  return(
    <></>
  )
}
};

export default PlotManagement;
