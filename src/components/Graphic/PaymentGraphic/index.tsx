import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Semana 01/05 até 07/05",
    "Pagamento Não Realizado": 20,
    "Pagamento Em Aguardo": 5,
    "Pagamento Aprovado": 8,
    "Pagamento Vencido": 12,
  },
  {
    name: "Semana 08/05 até 14/05",
    "Pagamento Não Realizado": 23,
    "Pagamento Em Aguardo": 1,
    "Pagamento Aprovado": 2,
    "Pagamento Vencido": 6,
  },
  {
    name: "Semana 15/05 até 21/05",
    "Pagamento Não Realizado": 12,
    "Pagamento Em Aguardo": 4,
    "Pagamento Aprovado": 25,
    "Pagamento Vencido": 21,
  },
  {
    name: "Semana 22/05 até 28/05",
    "Pagamento Não Realizado": 12,
    "Pagamento Em Aguardo": 1,
    "Pagamento Aprovado": 6,
    "Pagamento Vencido": 9,
  },
  {
    name: " Semana 29/05 até 31/05",
    "Pagamento Não Realizado": 9,
    "Pagamento Em Aguardo": 2,
    "Pagamento Aprovado": 2,
    "Pagamento Vencido": 13,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/stacked-area-chart-ix341";

  render() {
    return (
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
          <YAxis ticks={[0, 5, 10, 15, 20, 25, 30]} tickCount={7} />
          <Tooltip />
          <Bar dataKey={"Pagamento Não Realizado"} barSize={20} fill="#3C45FA" />
          <Bar dataKey={"Pagamento Em Aguardo"} barSize={20} fill="#FADA55" />
          <Bar dataKey={"Pagamento Aprovado"} barSize={20} fill="#6EFA9B" />
          <Bar dataKey={"Pagamento Vencido"} barSize={20} fill="#FA4C48" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
