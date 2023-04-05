import React, { useEffect, useState, useContext } from 'react'
import Boleto from '../../assets/adicionarBoleto.png'
import User from '../../assets/adicionarUser.png'
import Estatisticas from '../../assets/estatistica.png'
import Perfil from '../../assets/perfil.png'
import { dadosUsuario, dadosFuncionarioc } from '../../utils/axios.routes'
import './style.css'
import { AuthContext } from '../../contexts/AuthContext'

const Navbar = () => {
    const [funcionario, setFuncionario] = useState<any>(null);
    const { cpf } = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (cpf != 'inicio') {
                    const funcs = await dadosFuncionarioc(cpf);
                    const resp = await funcs?.data;
                    setFuncionario(resp);
                }
            } catch (error) {
                console.error(error);

            }
        };

        fetchData();
    }, [cpf]);

    console.log(funcionario);
    return (
        <div className='header'>
            <div className='nav container'>
                <a href='/perfil' className='navlogo'>
                    <img src={Perfil} alt='Perfil' />
                    <div className="logoText">
                        {cpf != 'inicio' && funcionario != null && 'nome' in funcionario ? 
                        <>
                        <h3>Olá, {funcionario.nome}</h3>
                        <p>{funcionario.cargo}</p>
                        </>
                            :
                            ''
                        }
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
                                <span className='navname'>Emitir Título</span>

                            </li></a>

                        <a href='/gerenciarfunc' className='navlink'>
                            <li className='navitem'>

                                <img src={Boleto} alt='Gerenciar Funcionário' />
                                <span className='navname'>Gerenciar Funcionários</span>

                            </li></a>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
