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
    Adimplente: 20,
    Inadimplente: 5,
  },
  {
    name: "Semana 08/05 até 14/05",
    Adimplente: 22,
    Inadimplente: 5,
  },
  {
    name: "Semana 15/05 até 21/05",
    Adimplente: 20,
    Inadimplente: 5,
  },
  {
    name: "Semana 22/05 até 28/05",
    Adimplente: 29,
    Inadimplente: 5,
  },
  {
    name: " Semana 29/05 até 31/05",
    Adimplente: 20,
    Inadimplente: 9,
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
            ticks={[0, 5, 10, 15, 20, 25, 30]}
            tickCount={7}
          />
          <Tooltip />
          <Bar dataKey="Adimplente" barSize={20} fill="#82ca9d" />
          <Bar dataKey="Inadimplente" barSize={20} fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
