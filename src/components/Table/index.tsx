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
  if (isLogged) {
    if (funcionario.cargo == 'Administrador' || funcionario.cargo == 'Financeiro') {
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
                <td align="right">Valor Total</td>
                <td>Nº Parcelas</td>
                <td>Info.</td>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => {
                // Look up client information based on the cpf value
                const clientInfo = client.find((c) => c.cpf === item.cliente.cpf);
                const nomeCliente = clientInfo?.nome;
                const cpf = clientInfo?.cpf;

                return (
                  <tr key={item.id}>
                    <td>{cpf}</td>
                    <td>{nomeCliente}</td>
                    <td>{item.id}</td>
                    <td align="right">R${item.valor}</td>
                    {/* {Object.values(item.map((valor: string) => (
                    <td>{valor}</td>)))} */}
                    <td>12</td>
                    {/* <td>{item.parcelas}</td> */}
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
    } else if (funcionario.cargo == 'Comercial') {
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
                {/* <td>Info.</td> */}
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => {
                // Look up client information based on the cpf value
                const clientInfo = client.find((c) => c.cpf === item.cpf);
                const nomeCliente = clientInfo?.nome;
                const cpf = clientInfo?.cpf;

                return (
                  <tr key={item.id}>
                    <td>{cpf}</td>
                    <td>{nomeCliente}</td>
                    <td>{item.id}</td>
                    <td align="right">R${item.valor}</td>
                    {/* {Object.values(item.map((valor: string) => (
                    <td>{valor}</td>)))} */}
                    {/* <td><Link to={`/gerenciarparcelas/${item.id}`}>Ver mais</Link></td> */}
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
    return(
      <></>
    )
  }
};
  export default Table;
