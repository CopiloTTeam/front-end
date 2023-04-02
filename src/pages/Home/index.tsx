import React, { useEffect, useState } from 'react'
import AnalyticBox from '../../components/AnalyticBox'
import Navbar from '../../components/Navbar'
import Table from '../../components/Table'
import { dadosClientes, dadosTitulos } from '../../utils/axios.routes'

const Home = () => {
  const [data, setData] = useState([]);
  const [client, setClient] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dadosTitulos();
        const data = await response?.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    const FetchClient = async () => {
      try {
        const response = await dadosClientes();
        const client = await response?.data;
        setClient(client);
      } catch (error) {
        console.error(error);
      }
    };
    FetchClient();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main">
        <AnalyticBox />
        <Table data={data} client={client} />
      </div>
    </>
  );
};

export default Home;