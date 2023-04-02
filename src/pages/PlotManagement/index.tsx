import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { dadosUsuario, gerenciarTitulo } from "../../utils/axios.routes";
import { useParams } from "react-router-dom";
import "./style.css";

const PlotManagement = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [client, setClient] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gerenciarTitulo(id);
        const data = await response?.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (data) {
      const fetchClient = async () => {
        try {
          const response = await dadosUsuario(data.id_cliente);
          const dataCliente = await response?.data;
          setClient(dataCliente);
        } catch (error) {
          console.error(error);
        }
      };
      fetchClient();
    }
  }, [data]);

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

  const getDueMonth = () => {
    if (data?.data_vencimento) {
      const dueDate = new Date(data.data_vencimento);
      return getMonthName(dueDate.getMonth());
    } else {
      return '';
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="plot-container">
          <div className="plot-info">
            <h3>Nome: </h3>
            <p>{client?.nome}</p>
            <h3>Titulo:</h3>
            <p> {data?.nome_produto}</p>
          </div>
          <details>
            <summary>
              <h3>Parcela/{getDueMonth()}</h3>
              <p>Status</p>
              <a href="/payout">Ver mais</a>
            </summary>
            <div className="card-completo">
              <div className="conteudo"></div>
            </div>
          </details>
        </div>
      </main>
    </>
  );
};


export default PlotManagement;