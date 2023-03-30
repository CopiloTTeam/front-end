import React, { useEffect, useState } from 'react'
import Boleto from '../../assets/adicionarBoleto.png'
import User from '../../assets/adicionarUser.png'
import Estatisticas from '../../assets/estatistica.png'
import Perfil from '../../assets/perfil.png'
import { dadosUsuario } from '../../utils/axios.routes'
import './style.css'

const Navbar = () => {
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
        <div className='header'>
            <div className='nav container'>
                <a href='/perfil' className='navlogo'>
                    <img src={Perfil} alt='Perfil' />
                    <div className="logoText">
                        <h3>Olá, {data?.nome}</h3>
                        <p>administrador</p>
                    </div>
                </a>
                <div className='navmenu'>
                    <ul className='navlist'>
                        <a href='/home' className='navlink'>
                            <li className='navitem'>

                                <img src={Estatisticas} alt='Home' />
                                <span className='navname'>Home</span>

                            </li>
                        </a>
                        <a href='/estatisticas' className='navlink'>
                            <li className='navitem'>

                                <img src={Estatisticas} alt='Estatisticas' />
                                <span className='navname'>Estatisticas</span>

                            </li>
                        </a>
                        <a href='/cadastrousuario' className='navlink'>
                            <li className='navitem'>

                                <img src={User} alt='User' />
                                <span className='navname'>Cadastro de Clientes</span>

                            </li>
                        </a>
                        <a href='/criarboleto' className='navlink'>
                            <li className='navitem'>

                                <img src={Boleto} alt='Boleto' />
                                <span className='navname'>Criar Boleto</span>

                            </li></a>

                    </ul>
                </div>
            </div>
        </div>
  );
};

export default Navbar;
