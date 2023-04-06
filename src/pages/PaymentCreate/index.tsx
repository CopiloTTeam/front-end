import React, { useEffect, useState, useContext } from 'react'
import { dadosUsuario } from '../../utils/axios.routes';
import PaymentForm from '../../components/CreatePaymentForm'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const PayForm = () => {
  const navigate = useNavigate();
  const { isLogged } = useContext(AuthContext)
  const [data, setData] = useState<any>();

    useEffect(() => {
      if(!isLogged){
        navigate('/')
      }
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
    if(isLogged){

      return (
        <>
      <Navbar/>
      <main>
        <PaymentForm />
      </main>
    </>
  );
} else {
  return(
    <></>
  )
}
};

export default PayForm;
