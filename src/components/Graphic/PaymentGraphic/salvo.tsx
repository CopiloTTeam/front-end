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
import { log } from "console";

export const PaymentGraphic = () => {
  const [titulos, setTitulos] = useState<any>([]);
  const [parcelas, setParcelas] = useState<any>([]);
  const [tick, setTick] = useState<any>([]);
  const [PagamentoAguardo, setPagamentoAguardo] = useState<any>([]);
  const [PagamentoAprovado, setPagamentoAprovado] = useState<any>([]);
  const [PagamentoVencido, setPagamentoVencido] = useState<any>([]);
  const [ParcelasAVencer, setParcelasAVencer] = useState<any>([]);
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

  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    "Parcelas pendentes": true,
    "Parcelas creditadas": true,
    "Parcelas vencidas": true,
    "Parcelas a vencer": true,
  });

  const handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const data = [];
  const datainicial = new Date(inicio);
  const datafinal = new Date(fim);

  for (
    let data_for = new Date(datainicial);
    data_for <= datafinal;
    data_for.setDate(data_for.getDate() + 1)
  ) {
    const PagamentoAguardo = parcelas.reduce((acc: any, parcela: any) => {
      const data_pagamento = new Date(parcela.data_pagamento);
      const data_credito = new Date(parcela.data_credito);
      data_pagamento.setHours(data_pagamento.getHours() + 3);
      if (
        parcela.status == 1 &&
        data_pagamento < data_for &&
        data_credito >= data_for
      ) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const PagamentoAprovado = parcelas.reduce((acc: any, parcela: any) => {
      const data_credito = new Date(parcela.data_credito);
      data_credito.setHours(data_credito.getHours() + 3);
      if (parcela.status == 1 && data_credito < data_for) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const PagamentoVencido = parcelas.reduce((acc: any, parcela: any) => {
      const data_vencimento = new Date(parcela.data_vencimento);

      data_vencimento.setHours(data_vencimento.getHours() + 3);
      if (parcela.status == 0 && data_vencimento < data_for) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const ParcelasAVencer = parcelas.reduce((acc: any, parcela: any) => {
      const data_vencimento = new Date(parcela.data_vencimento);
      data_vencimento.setHours(data_vencimento.getHours() + 3);
      if (data_vencimento >= data_for) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    const dia = String(data_for.getDate()).padStart(2, "0");
    const mes = String(data_for.getMonth() + 1).padStart(2, "0");
    const ano = String(data_for.getFullYear());
    
    data.push({
      name: dia + "/" + mes + "/" + ano,
      "Parcelas pendentes": PagamentoAguardo,
      "Parcelas creditadas": PagamentoAprovado,
      "Parcelas vencidas": PagamentoVencido,
      "Parcelas a vencer": ParcelasAVencer,
    });

    setPagamentoAguardo(PagamentoAguardo);
    setPagamentoAprovado(PagamentoAprovado);
    setPagamentoVencido(PagamentoVencido);
    setParcelasAVencer(ParcelasAVencer);

  }

  const quantidade_de_parcelas = PagamentoAguardo + PagamentoAprovado + PagamentoVencido + ParcelasAVencer;

  const ticks_dinamicos = [];

  for (let i = 0; i < 10; i++) {
    const tick = quantidade_de_parcelas / 10 * i;
    // round the number
    ticks_dinamicos.push(Math.round(tick));
    // transform the list into a set
    const set = new Set(ticks_dinamicos);
    // transform the set into an list again
    setTick(Array.from(set));
  }

  console.log(tick);

  return (
    <>
      <div className="select-box">
        <div className="select-input">
          <h3>Data de Inicio</h3>
          <input
            type="date"
            value={inicio}
            max={fim}
            onChange={(ev) => setInicio(ev.target.value)}
          />
        </div>
        <div className="select-input">
          <h3>Data de Fim</h3>
          <input
            type="date"
            value={fim}
            min={inicio}
            onChange={(ev) => setFim(ev.target.value)}
          />
        </div>
        <div className="select-box">
          <div>
            <h3>Selecione os campos que deseja visualizar</h3>
            <div className="select-input">
              <input
                type="checkbox"
                id="Parcelas pendentes"
                name="Parcelas pendentes"
                value="Parcelas pendentes"
                checked={checkboxes["Parcelas pendentes"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Parcelas pendentes">Parcelas pendentes</label>
              <input
                type="checkbox"
                id="Parcelas creditadas"
                name="Parcelas creditadas"
                value="Parcelas creditadas"
                checked={checkboxes["Parcelas creditadas"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Parcelas creditadas">Parcelas creditadas</label>
              <input
                type="checkbox"
                id="Parcelas vencidas"
                name="Parcelas vencidas"
                value="Parcelas vencidas"
                checked={checkboxes["Parcelas vencidas"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Parcelas vencidas">Parcelas vencidas</label>
              <input
                type="checkbox"
                id="Parcelas a vencer"
                name="Parcelas a vencer"
                value="Parcelas a vencer"
                checked={checkboxes["Parcelas a vencer"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Parcelas a vencer">Parcelas a vencer</label>
            </div>
          </div>
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
          <CartesianGrid strokeDasharray="3 0 " />
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
          <Tooltip />
          {checkboxes["Parcelas pendentes"] && (
            <Bar dataKey={"Parcelas pendentes"} barSize={20} fill="#FADA55" />
          )}
          {checkboxes["Parcelas creditadas"] && (
            <Bar dataKey={"Parcelas creditadas"} barSize={20} fill="#6EFA9B" />
          )}
          {checkboxes["Parcelas vencidas"] && (
            <Bar dataKey={"Parcelas vencidas"} barSize={20} fill="#FA4C48" />
          )}
          {checkboxes["Parcelas a vencer"] && (
            <Bar dataKey={"Parcelas a vencer"} barSize={20} fill="#3C45FA" />
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PaymentGraphic;