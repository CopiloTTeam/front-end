import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics';
import CustomerForm from './pages/CustomerCreate';
import PayForm from './pages/PaymentCreate';
import Login from './pages/Login';
import '../src/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Estatisticas" element={<Analytics />} />
         <Route path="/CadastroUsuario" element={<CustomerForm />} />
         <Route path="/CriarBoleto" element={<PayForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
