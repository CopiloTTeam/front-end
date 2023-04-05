import UserForm from '../../components/CreateUserForm'
import Navbar from '../../components/Navbar'
import { dadosUsuario } from '../../utils/axios.routes';
import React, { useEffect, useState } from 'react'


const CustomerForm = () => {
  const [data, setData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dadosUsuario(2);
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
      <Navbar/>
      <main>
        <UserForm />
      </main>
    </>
  );
};

export default CustomerForm;
