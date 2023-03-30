import React from 'react'
import './style.css'

const Table = () => {
  
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
          
            <tr>
            <td>Victor Salles</td>
            <td>vitin@gmail.com</td>
            <td>18</td>
            <td>rua das Ostras</td>
            <td>rua das Ostras</td>
            <td>
              <a href="gerenciarParcela">Ver mais</a>
            </td>
          </tr>

          <tr>
            <td>Victor Salles</td>
            <td>vitin@gmail.com</td>
            <td>18</td>
            <td>rua das Ostras</td>
            <td>rua das Ostras</td>
            <td>
              <a href="gerenciarParcela">Ver mais</a>
            </td>
          </tr>
          <tr>
            <td>Victor Salles</td>
            <td>vitin@gmail.com</td>
            <td>18</td>
            <td>rua das Ostras</td>
            <td>rua das Ostras</td>
            <td>
              <a href="gerenciarParcela">Ver mais</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
