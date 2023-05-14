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
    "Pagamento Não Realizado": 200,
    "Pagamento Em Aguardo": 50,
    "Pagamento Aprovado": 80,
    "Pagamento Vencido": 120,
  },
  {
    name: "Semana 08/05 até 14/05",
    "Pagamento Não Realizado": 230,
    "Pagamento Em Aguardo": 10,
    "Pagamento Aprovado": 20,
    "Pagamento Vencido": 60,
  },
  {
    name: "Semana 15/05 até 21/05",
    "Pagamento Não Realizado": 120,
    "Pagamento Em Aguardo": 40,
    "Pagamento Aprovado": 250,
    "Pagamento Vencido": 210,
  },
  {
    name: "Semana 22/05 até 28/05",
    "Pagamento Não Realizado": 120,
    "Pagamento Em Aguardo": 10,
    "Pagamento Aprovado": 60,
    "Pagamento Vencido": 90,
  },
  {
    name: " Semana 29/05 até 31/05",
    "Pagamento Não Realizado": 90,
    "Pagamento Em Aguardo": 20,
    "Pagamento Aprovado": 20,
    "Pagamento Vencido": 130,
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
          <YAxis
            ticks={[0, 50, 100, 150, 200, 250, 300]}
            tickCount={7}
          />
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
