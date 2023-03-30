import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    atrasado: 4000,
    adiantado: 2400,
    pendente: 3000,
    amt: 2400,
  },
  {
    name: 'Page B',
    atrasado: 3000,
    adiantado: 1398,
    pendente: 3000,
    amt: 2210,
  },
  {
    name: 'Page C',
    atrasado: 2000,
    adiantado: 9800,
    pendente: 3000,
    amt: 2290,
  },
  {
    name: 'Page D',
    atrasado: 2780,
    adiantado: 3908,
    pendente: 3000,
    amt: 2000,
  },
  {
    name: 'Page E',
    atrasado: 1890,
    adiantado: 4800,
    pendente: 3000,
    amt: 2181,
  },
  {
    name: 'Page F',
    atrasado: 2390,
    adiantado: 3800,
    pendente: 3000,
    amt: 2500,
  },
  {
    name: 'Page G',
    atrasado: 3490,
    adiantado: 4300,
    pendente: 3000,
    amt: 2100,
  }
];

export default class Graphic extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="42%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="adiantado" fill="#82ca9d" />
          <Bar dataKey="pendente" fill="#e7c941" />
          <Bar dataKey="atrasado" fill="#dd3f3f" />
        
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
