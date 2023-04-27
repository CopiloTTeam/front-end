import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Boleto from '../../assets/adicionarBoleto.png'
import User from '../../assets/adicionarUser.png'
import Estatisticas from '../../assets/estatistica.png'
import Perfil from '../../assets/perfil.png'
import './style.css'
import { AuthContext } from '../../contexts/AuthContext'

const Navbar = () => {
    const { funcionario , logout} = useContext(AuthContext);
    if (funcionario.cargo == 'Administrador') {
        return (
            <div className='header'>
                <div className='nav container'>
                    <Link to="/perfil">
                        <a className='navlogo'>
                            <img src={Perfil} alt='Perfil' />
                            <div className="logoText">
                                <h3>Olá, {funcionario.nome}</h3>
                                <p>{funcionario.cargo}</p>
                            </div>
                            <button className="logout-button" onClick={logout}>Logout</button>
                        </a>
                    </Link>
                    <div className='navmenu'>
                        <ul className='navlist'>
                            <Link to="/home">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Estatisticas} alt='Home' />
                                        <span className='navname'>Home</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/estatisticas">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Estatisticas} alt='Estatisticas' />
                                        <span className='navname'>Estatisticas</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/cadastrousuario">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={User} alt='User' />
                                        <span className='navname'>Cadastro de Clientes</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/criarboleto">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Boleto} alt='Boleto' />
                                        <span className='navname'>Emitir Título</span>

                                    </li></a>
                            </Link>
                            <Link to="/gerenciarfunc">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Boleto} alt='Gerenciar Funcionário' />
                                        <span className='navname'>Gerenciar Funcionários</span>

                                    </li></a>
                            </Link>
                            <Link to="/gerenciarcliente">
                        <a className='navlink'>
                            <li className='navitem'>

                                <img src={Boleto} alt='Gerenciar Cliente' />
                                <span className='navname'>Gerenciar Cliente</span>

                            </li></a>
                        </Link>

                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (funcionario.cargo == 'Comercial') {
        return (
            <div className='header'>
                <div className='nav container'>
                    <Link to="/perfil">
                        <a className='navlogo'>
                            <img src={Perfil} alt='Perfil' />
                            <div className="logoText">
                                <h3>Olá, {funcionario.nome}</h3>
                                <p>{funcionario.cargo}</p>
                            </div>
                        </a>
                    </Link>
                    <div className='navmenu'>
                        <ul className='navlist'>
                            <Link to="/home">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Estatisticas} alt='Home' />
                                        <span className='navname'>Home</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/estatisticas">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Estatisticas} alt='Estatisticas' />
                                        <span className='navname'>Estatisticas</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/cadastrousuario">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={User} alt='User' />
                                        <span className='navname'>Cadastro de Clientes</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/criarboleto">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Boleto} alt='Boleto' />
                                        <span className='navname'>Emitir Título</span>

                                    </li></a>
                            </Link>
                            <Link to="/gerenciarcliente">
                        <a className='navlink'>
                            <li className='navitem'>

                                <img src={Boleto} alt='Gerenciar Cliente' />
                                <span className='navname'>Gerenciar Cliente</span>

                            </li></a>
                        </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (funcionario.cargo == 'Financeiro') {
        return (
            <div className='header'>
                <div className='nav container'>
                    <Link to="/perfil">
                        <a className='navlogo'>
                            <img src={Perfil} alt='Perfil' />
                            <div className="logoText">
                                <h3>Olá, {funcionario.nome}</h3>
                                <p>{funcionario.cargo}</p>
                            </div>
                        </a>
                    </Link>
                    <div className='navmenu'>
                        <ul className='navlist'>
                            <Link to="/home">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Estatisticas} alt='Home' />
                                        <span className='navname'>Home</span>

                                    </li>
                                </a>
                            </Link>
                            <Link to="/estatisticas">
                                <a className='navlink'>
                                    <li className='navitem'>

                                        <img src={Estatisticas} alt='Estatisticas' />
                                        <span className='navname'>Estatisticas</span>

                                    </li>
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <>
            </>
        )
    }
};

export default Navbar;
