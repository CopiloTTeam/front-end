import React from 'react'
import './style.css'

interface TableProps {
  data: any[];
  client: any[];
}

const Table = ({ data, client }: TableProps) => {
  console.log(data)
  return (
    <div className='table-box'>
      <div className='table-title'>
        <h1>Lista de Titulos</h1>
      </div>
      <table>
        <thead>
          <tr>
            <td>CPF</td>
            <td>Nome Cliente</td>
            <td>Titulo</td>
            <td>Valor Total</td>
            <td>Nº Parcelas</td>
            <td>Info.</td>
          </tr>
        </thead>
        <tbody>
          { data && data.map((item) => {
            // Look up client information based on the cpf value
            const clientInfo = client.find((c) => c.id_cliente === item.id_cliente);
            const nomeCliente = clientInfo?.nome;
            const cpf = clientInfo?.cpf;
            return (
              <tr key={item.id_titulo}>
                <td>{cpf}</td>
                <td>{nomeCliente}</td>
                <td>{item.id_titulo}</td>
                <td>{item.valor}</td>
                <td>{item.parcelas}</td>
                <td>
                  <a href="gerenciarParcela">Ver mais</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
