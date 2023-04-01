import React from 'react'
import './style.css'

interface TableProps {
  data: any[];
}

const Table = ({ data }: TableProps) => {
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.cpf}</td>
              <td>{item.nomeCliente}</td>
              <td>{item.id_titulo}</td>
              <td>{item.valor}</td>
              <td>{item.parcelas}</td>
              <td>
                <a href="gerenciarParcela">Ver mais</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
