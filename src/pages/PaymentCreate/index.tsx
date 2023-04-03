import React, { useEffect, useState } from 'react'
import { dadosUsuario } from '../../utils/axios.routes';
import PaymentForm from '../../components/CreatePaymentForm'
import Navbar from '../../components/navbar'

const PayForm = () => {
  const [data, setData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dadosUsuario(3);
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
      <Navbar data={data} />
      <main>
        <PaymentForm />
      </main>
    </>
  );
};

export default PayForm;
