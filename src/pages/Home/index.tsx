import React, { useEffect, useState } from 'react'
import AnalyticBox from '../../components/AnalyticBox'
import Navbar from '../../components/Navbar'
import Table from '../../components/Table'
import { dadosClientes, dadosTitulos, dadosUsuario } from '../../utils/axios.routes'

const Home = () => {
  const [data, setData] = useState([]);
  const [client, setClient] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const titulos = await dadosTitulos();
        const data = titulos?.data;
        setData(data);
        const usuario = await dadosUsuario(3);
        const user = usuario?.data;
        setUser(user);
        const cliente = await dadosClientes();
        const client = cliente?.data;
        setClient(client);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  if (!loading) {

    return (
      <>
        <Navbar data={user} />
        <main>
          <AnalyticBox />
          <Table data={data} client={client} />
        </main>
      </>
    );

  } else {
    return(
      <div className='loading'><p>Carregando...</p></div>
    )
  }

};

export default Home;