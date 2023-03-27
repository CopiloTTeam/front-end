import React from 'react'
import './style.css'

const Table = () => {
  return (
    <div className='table-box'>
      <div className='table-title'>
        <h1>Lista de Usuários</h1>
      </div>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Idade</td>
            <td>Endereço</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Victor Salles</td>
            <td>vitin@gmail.com</td>
            <td>18</td>
            <td>rua das Ostras</td>
          </tr>
          <tr>
            <td>Victor Salles</td>
            <td>vitin@gmail.com</td>
            <td>18</td>
            <td>rua das Ostras</td>
          </tr>
          <tr>
            <td>Victor Salles</td>
            <td>vitin@gmail.com</td>
            <td>18</td>
            <td>rua das Ostras</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
