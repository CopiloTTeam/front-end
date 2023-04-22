import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/CreateUserForm'
import Navbar from '../../components/Navbar'
import { dadosUsuario } from '../../utils/axios.routes';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';


const CustomerForm = () => {
  const navigate = useNavigate();
  const { isLogged, funcionario } = useContext(AuthContext)
  const [data, setData] = useState<any>();

    useEffect(() => {
      if(!isLogged){
        navigate('/')
      }
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
    if (isLogged && (funcionario.cargo = 'Administrador' || funcionario.cargo == 'Comercial')){

      return (
        <>
      <Navbar/>
      <main>
        <UserForm />
      </main>
    </>
  );
} else {
  return(
    <></>
  )
}
};

export default CustomerForm;
