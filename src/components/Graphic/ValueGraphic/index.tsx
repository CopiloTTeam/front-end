import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Parcela, dadosTitulos } from "../../../utils/axios.routes";


export const ValueGraphic = () => {
  const [titulos, setTitulos] = useState<any>([]);
  const [parcelas, setParcelas] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const titulos = await dadosTitulos();
        const titulosData = titulos?.data;
        const parcelas = await Parcela();
        const parcelasData = parcelas?.data;
        if (titulosData) {
          setTitulos(titulosData);
        }
        if (parcelasData) {
          setParcelas(parcelasData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const data = [];
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  const datainicial = new Date(inicio)
  const datafinal = new Date(fim)
  

  for (let data_for = new Date(datainicial); data_for <= datafinal; data_for.setDate(data_for.getDate() + 1)) {

    const PagamentoAguardo = parcelas.reduce((acc: any, parcela: any) => {
      const data_pagamento = new Date(parcela.data_pagamento);
      const data_credito = new Date(parcela.data_credito)
      data_pagamento.setHours(data_pagamento.getHours() + 3);
      if (parcela.status == 1 && data_pagamento < data_for && data_credito >= data_for) {
        return acc + parcela.valor_pago;
      } else {
        return acc;
      }
    }, 0);

    const PagamentoAprovado = parcelas.reduce((acc: any, parcela: any) => {
      const data_credito = new Date(parcela.data_pagamento);
      data_credito.setHours(data_credito.getHours() + 3);
      if (parcela.status == 1 && data_credito < data_for) {
        return acc + parcela.valor_pago;
      } else {
        return acc;
      }
    }, 0);

    const PagamentoVencido = parcelas.reduce((acc: any, parcela: any) => {
      const data_vencimento = new Date(parcela.data_vencimento);

      data_vencimento.setHours(data_vencimento.getHours() + 3);
      if (parcela.status == 0 && data_vencimento < data_for) {
        return acc + parcela.valor;
      } else {
        return acc;
      }
    }, 0);


    const dia = String(data_for.getDate()).padStart(2, '0');
    const mes = String(data_for.getMonth() + 1).padStart(2, '0');
    const ano = String(data_for.getFullYear());

    data.push({
      name: (dia + "/" + mes + "/" + ano),
      "Pagamento Em Aguardo": PagamentoAguardo,
      "Pagamento Aprovado": PagamentoAprovado,
      "Pagamento Vencido": PagamentoVencido,
    });
  }
  
  return (
    <>
      <div className="select-box">
        <div className="select-input">
          <h3>Data de Início</h3>
          <input type= "date"
            value = {inicio}
            max={fim}
            onChange={(ev) => setInicio(ev.target.value)} />
        </div>
        <div className="select-input">
          <h3>Data de Fim</h3>
          <input type= "date"
            value = {fim}
            min={inicio}
            onChange={(ev) => setFim(ev.target.value)}/>
        </div>
      </div>
    <ResponsiveContainer width="70%" height="70%">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          ticks={[0, 50, 100, 150, 200, 250, 300]}
          tickCount={7}
        />
        <Tooltip />
        <Bar dataKey={"Pagamento Em Aguardo"} barSize={20} fill="#FADA55" />
        <Bar dataKey={"Pagamento Aprovado"} barSize={20} fill="#6EFA9B" />
        <Bar dataKey={"Pagamento Vencido"} barSize={20} fill="#FA4C48" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}

export default ValueGraphic;