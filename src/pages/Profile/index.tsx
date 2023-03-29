import React from 'react'
import Navbar from '../../components/Navbar'
import './style.css'

const Profile = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className='profile-container'>
                    <div className='title'>
                        <h1>Perfil</h1>
                        <p>Administrador</p>
                    </div>
                    <div className='profile-content'>
                        <div className='profile-box'>
                            <h1>Nome</h1>
                            <p>Wallace Felipe de França Souza</p>
                        </div>
                        <div className='profile-box'>
                            <h1>Email</h1>
                            <p>wallace@gmail.com</p>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div className='profile-box'>
                            <h1>Senha</h1>
                            <p>Administrador</p>
                        </div>
                        <div className='profile-box'>
                            <h1>CPF</h1>
                            <p>123456789</p>
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

export default Profile
