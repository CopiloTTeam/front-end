import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Analytics from './pages/Analytics';
import CustomerForm from './pages/CustomerCreate';
import PayForm from './pages/PaymentCreate';
import Login from './pages/Login';
import '../src/styles/global.css';
import Profile from './pages/Profile';
import EmployeeForm from './pages/EmployeeCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<EmployeeForm />} />
        <Route path="/estatisticas" element={<Analytics />} />
         <Route path="/cadastrousuario" element={<CustomerForm />} />
         <Route path="/criarboleto" element={<PayForm />} />
         <Route path="/perfil" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
