import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/global/App.css';
import Navbar from './components/navbar/navbar';
import CadastroCliente from './pages/Cadastro';
import Estatisticas from './pages/Estatisticas';
import Boleto from './pages/Boleto';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Estatisticas />} />
            <Route path="/Boletos" element={<Boleto />} />
            <Route path="/Cadastro" element={<CadastroCliente />} />
            <Route path="/Estatisticas" element={<Estatisticas />} />
            <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
