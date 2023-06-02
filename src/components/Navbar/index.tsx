import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Boleto from '../../assets/adicionarBoleto.png';
import User from '../../assets/adicionarUser.png';
import Estatisticas from '../../assets/estatistica.png';
import Perfil from '../../assets/perfil.png';
import Home from '../../assets/home.png';
import GerenciarFuncionario from '../../assets/gerenciarfunc.png';
import GerenciarCliente from '../../assets/gerenciarcli.png';

import './style.css';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { funcionario, logout } = useContext(AuthContext);

    if (funcionario.cargo === 'Administrador') {
        return (
            <div className='header'>
                <div className='nav container'>
                    <Link to='/perfil' className='navlogo'>
                        <img src={Perfil} alt='Perfil' />
                        <div className='logoText'>
                            <h3>Olá, {funcionario.nome}</h3>
                            <p>{funcionario.cargo}</p>
                        </div>
                        <button className='logout-button' onClick={logout}>Logout</button>
                    </Link>
                    <div className='navmenu'>
                        <ul className='navlist'>
                            <li className='navitem'>
                                <Link to='/home' className='navlink'>
                                    <img src={Home} alt='Home' />
                                    <span className='navname'>Home</span>
                                </Link>
                            </li>
                            <li className='navitem'>
                                <Link to='/estatisticas' className='navlink'>
                                    <img src={Estatisticas} alt='Estatisticas' />
                                    <span className='navname'>Estatísticas</span>
                                </Link>
                            </li>
                            <li className='navitem'>
                                <Link to='/cadastrousuario' className='navlink'>
                                    <img src={User} alt='User' />
                                    <span className='navname'>Cadastro de clientes</span>
                                </Link>
                            </li>
                            <li className='navitem'>
                                <Link to='/criarboleto' className='navlink'>
                                    <img src={Boleto} alt='Boleto' />
                                    <span className='navname'>Emitir título</span>
                                </Link>
                            </li>
                            <li className='navitem'>
                                <Link to='/gerenciarfunc' className='navlink'>
                                    <img src={GerenciarFuncionario} alt='Gerenciar Funcionário' className='gerenciarfunc-icon'/>
                                    <span className='navname'>Gerenciar funcionários</span>
                                </Link>
                            </li>
                            <li className='navitem'>
                                <Link to='/gerenciarcliente' className='navlink'>
                                    <img src={GerenciarCliente} alt='Gerenciar Cliente' />
                                    <span className='navname'>Gerenciar cliente</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else if (funcionario.cargo === 'Comercial') {
        return (
            <div className='header'>
                <div className='nav container'>
                    <Link to='/perfil'>
                        <div className='navlogo'>
                            <img src={Perfil} alt='Perfil' />
                            <div className='logoText'>
                                <h3>Olá, {funcionario.nome}</h3>
                                <p>{funcionario.cargo}</p>
                            </div>
                        </div>
                    </Link>
                    <div className='navmenu'>
                        <ul className='navlist'>
                            <Link to='/home'>
                                <li className='navitem'>
                                    <img src={Estatisticas} alt='Home' />
                                    <span className='navname'>Home</span>
                                </li>
                            </Link>
                            <Link to='/estatisticas'>
                                <li className='navitem'>
                                    <img src={Estatisticas} alt='Estatisticas' />
                                    <span className='navname'>Estatísticas</span>
                                </li>
                            </Link>
                            <Link to='/cadastrousuario'>
                                <li className='navitem'>
                                    <img src={User} alt='User' />
                                    <span className='navname'>Cadastro de clientes</span>
                                </li>
                            </Link>
                            <Link to='/criarboleto'>
                                <li className='navitem'>
                                    <img src={Boleto} alt='Boleto' />
                                    <span className='navname'>Emitir título</span>
                                </li>
                            </Link>
                            <Link to='/gerenciarcliente'>
                                <li className='navitem'>
                                    <img src={Boleto} alt='Gerenciar Cliente' />
                                    <span className='navname'>Gerenciar cliente</span>
                                </li>
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
                    <Link to="/perfil" className='navlogo'>
                        <img src={Perfil} alt='Perfil' />
                        <div className="logoText">
                            <h3>Olá, {funcionario.nome}</h3>
                            <p>{funcionario.cargo}</p>
                        </div>
                    </Link>
                    <div className='navmenu'>
                        <ul className='navlist'>
                            <li className='navitem' key="home">
                                <Link to="/home" className='navlink'>
                                    <img src={Estatisticas} alt='Home' />
                                    <span className='navname'>Home</span>
                                </Link>
                            </li>
                            <li className='navitem' key="estatisticas">
                                <Link to="/estatisticas" className='navlink'>
                                    <img src={Estatisticas} alt='Estatisticas' />
                                    <span className='navname'>Estatísticas</span>
                                </Link>
                            </li>
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
