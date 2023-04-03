import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { dadosUsuario } from '../../utils/axios.routes';
import './style.css'

const Profile = () => {
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
                    <div className='btn'>
                        <button className='green'>Confirmar Alteração</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile;
