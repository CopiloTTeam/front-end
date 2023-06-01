import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

interface TableProps {
  data: any[];
  client: any[];
}


const Table = ({ data, client }: TableProps) => {
  const { isLogged, funcionario } = useContext(AuthContext)

  // order client by name
  client.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    }
    if (a.nome > b.nome) {
      return 1;
    }
    return 0;
  }
  );
  data.sort((a, b) => {
    if (a.cliente.nome < b.cliente.nome) {
      return -1;
    }
    if (a.cliente.nome > b.cliente.nome) {
      return 1;
    }
    return 0;
  }
  );

  if (isLogged) {
    if (funcionario.cargo === 'Administrador' || funcionario.cargo === 'Financeiro') {
      return (
        <div className='table-box'>
          <div className='table-title'>
            <h1>Lista de titulos</h1>
            <input type='text' placeholder='Digite aqui' className='input-table' />
          </div>
          <table>
            <thead>
              <tr>
                <td>Nome cliente</td>
                <td>CPF</td>
                <td>Titulo</td>
                <td align="right">Valor total</td>
                <td>Nº parcelas</td>
                <td>Info.</td>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => {
                const clientInfo = client.find((c) => c.cpf === item.cliente.cpf);
                const nomeCliente = clientInfo?.nome;
                const cpf = clientInfo?.cpf;
                const valorFormadado = item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                return (
                  <tr key={item.id}>
                    <td>{nomeCliente}</td>
                    <td>{cpf}</td>
                    <td>{item.id}</td>
                    <td align="right">{valorFormadado}</td>
                    <td>12</td>
                    <td>
                      <Link to={`/gerenciarparcelas/${item.id}`}>Ver mais</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      );
    } else if (funcionario.cargo === 'Comercial') {
      return (
        <div className='table-box'>
          <div className='table-title'>
            <h1>Lista de titulos</h1>
          </div>
          <table>
            <thead>
              <tr>
                <td>Nome cliente</td>
                <td>CPF</td>
                <td>Titulo</td>
                <td align="right">Valor total</td>
                <td>Nº parcelas</td>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => {
                const clientInfo = client.find((c) => c.cpf === item.cpf);
                const nomeCliente = clientInfo?.nome;
                const cpf = clientInfo?.cpf;

                return (
                  <tr key={item.id}>
                    <td>{nomeCliente}</td>
                    <td>{cpf}</td>
                    <td>{item.id}</td>
                    <td align="right">R${item.valor}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <></>
      )
    }

  } else {
    return (
      <></>
    )
  }
};
export default Table;
