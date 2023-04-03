import UserForm from '../../components/CreateUserForm'
<<<<<<< HEAD
import Navbar from '../../components/navbar'
=======
import Navbar from '../../components/Navbar'
import { dadosUsuario } from '../../utils/axios.routes';
import React, { useEffect, useState } from 'react'

>>>>>>> 3e3f663ba1d78779796f94d1c627ab80d61d87c7

const CustomerForm = () => {
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
        <UserForm />
      </main>
    </>
  );
};

export default CustomerForm;
