import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { gerenciarTitulo } from "../../utils/axios.routes";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../contexts/AuthContext";

interface Parcela {
  data_vencimento: string;
  // cpf: string;
  nome_produto: string;
  id_parcela: string;
  data_pagamento: string;
  status: string;
}

const PlotManagement = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext)
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [parcela, setParcela] = useState<any>(null);

  useEffect(() => {
    if (!isLogged) {
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

    const fetchParcela = async () => {
      try {
        const response = await gerenciarTitulo(id);
        const data = await response?.data.parcelas;

        // parcelas ordenadas pelo o status, as pendentens primeiro
        data.sort((a: Parcela, b: Parcela) => {
          if (a.status < b.status) {
            return -1;
          }
          if (a.status > b.status) {
            return 1;
          }
          return 0;
        });

        setParcela(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchParcela();

  }, [id]);
  if (isLogged && (funcionario.cargo == 'Administrador' || funcionario.cargo == 'Financeiro')) {
    return (
      <>
        <Navbar />
        <main>
          <div className="plot-container">
            <div className="plot-info">
              <h3>Nome: </h3>
              <p>{data?.cliente.nome}</p>
              <h3>Titulo:</h3>
              <p>{data?.nome_produto}</p>
            </div>
            {parcela && parcela.map((item: Parcela, index: number) => {
              return (
                <details key={item.id_parcela}>
                  <summary>
                    <p>{index + 1}ª Parcela </p>
                    <p>Vencimento: {item?.data_vencimento.split('-').reverse().join('/')}</p>
                    <p>Status: {item?.status == '1' ? 'Pago' : 'Pendente'}</p>
                    {item?.data_pagamento ? <p>Data de pagamento: {item?.data_pagamento.split('-').reverse().join('/')}</p> : null}
                    {item.status == "0" ? <Link className="link" to={`/payout/${item.id_parcela}`}>Ver mais</Link> : null}
                    <button className="button">Gerar Boleto</button>

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
    return (
      <></>
    )
  }
};

export default PlotManagement;