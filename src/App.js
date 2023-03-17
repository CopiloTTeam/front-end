import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/global/App.css";
import Navbar from "./components/navbar/navbar";
import CadastroCliente from "./pages/Cadastro";
import Home from "./pages/Home/Home";
import Boleto from "./pages/Boleto";
import Perfil from "./pages/Perfil";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Boletos" element={<Boleto />} />
          <Route path="/Cadastro" element={<CadastroCliente />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
