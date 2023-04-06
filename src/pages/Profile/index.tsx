import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { dadosFuncionarioc, dadosUsuario } from '../../utils/axios.routes';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const navigate = useNavigate();
    const { isLogged, funcionario } = useContext(AuthContext)
    const [data, setData] = useState<any>();

    useEffect(() => {
        if(!isLogged){
            navigate('/')
          }
        const fetchData = async () => {
            try {
                const response = await dadosFuncionarioc(funcionario.cpf);
                const data = await response?.data
                setData(data);
                // console.log(data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
if (isLogged){

    return (
        <>
            <Navbar/>
            <main>
                <div className='profile-container'>
                    <div className='title'>
                        <h1>Perfil</h1>
                        <p>{data?.cargo}</p>
                    </div>
                    <div className='profile-content'>
                        <div className='profile-box'>
                            <h1>Nome</h1>
                            <p>{data?.nome}</p>
                        </div>
                        <div className='profile-box'>
                            <h1>Email</h1>
                            <p>{data?.email}</p>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div className='profile-box'>
                            <h1>Senha</h1>
                            <p>{data?.senha}</p>
                        </div>
                        <div className='profile-box'>
                            <h1>CPF</h1>
                            <p>{data?.cpf}</p>
                        </div>
                    </div>
                    {/* <div className='btn'>
                        <button className='green'>Confirmar Alteração</button>
                    </div> */}
                </div>
            </main>
        </>
    )
} else {
    return(
        <></>
    )
}
}

export default Profile;
