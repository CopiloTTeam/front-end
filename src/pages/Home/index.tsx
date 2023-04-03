import React, { useEffect, useState } from 'react'
import AnalyticBox from '../../components/AnalyticBox'
import Navbar from '../../components/navbar'
import Table from '../../components/Table'
import { dadosUsuario } from '../../utils/axios.routes'

const  Home = () => {
  const [data, setData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dadosUsuario(1);
                const data = await response?.data
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
  return (
    <>
      <Navbar />
      <div className="main">
        <AnalyticBox />
        <Table />
      </div>
    </>
  );
};

export default Home;
