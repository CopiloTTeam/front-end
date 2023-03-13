import React, { useState } from 'react'
import AddUser from "../../images/adicionarUser.png"
import AddBoleto from "../../images/adicionarBoleto.png"
import Analytics from "../../images/estatistica.png"
import Perfil from "../../images/perfil.png"
import Logout from "../../images/logout.png"
import { useLocation } from 'react-router-dom'
import '../../styles/navbar.css'


const Navbar = () => {
    const location = useLocation();
    const [closeMenu, setCloseMenu] = useState(true);
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>

            <div className={closeMenu === false ? "burgerContainer" : "burgerContainer active"}>
                <div className='burgerTrigger'
                    onClick={() => {
                        handleCloseMenu()
                    }}>
                </div>
                <div className='burgerMenu'></div>
            </div>
            <div className='profileContainer'>
                <img src={Perfil} alt="perfil" className='profile' />
                <div className='profileContents'>
                    <p className='name'>Olá, Bobby</p>
                    <p>Comercial</p>
                </div>
            </div>
            <div className='contentsContainer'>
                <ul>
                    <a href='/Cadastro'>
                        <li className={location.pathname === "/Cadastro" ? "active" : ""}>
                            <img src={AddUser} alt="adicionarUser" className='icon' />
                            <p>Cadastrar Cliente</p>
                        </li>
                    </a>
                    <a href='/Boletos'>
                        <li className={location.pathname === "/Boletos" ? "active" : ""}>
                            <img src={AddBoleto} alt="adicionarBoleto" className='icon' />
                            <p>Criar Boleto</p>
                        </li>
                    </a>
                    <a href='/Estatisticas'>
                        <li className={location.pathname === "/Estatisticas" ? "active" : ""}>
                            <img src={Analytics} alt="estatisticas" className='icon' />
                            <p>Estatisticas</p>
                        </li>
                    </a>
                    <a href='/logout'>
                        <li className="logout">
                            <img src={Logout} alt="logout" className='icon' />
                            <p>Desconectar</p>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
