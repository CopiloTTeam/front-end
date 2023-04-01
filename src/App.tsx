import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import CustomerForm from "./pages/CustomerCreate";
import PayForm from "./pages/PaymentCreate";
import Login from "./pages/Login";
import "../src/styles/global.css";
import Profile from "./pages/Profile";
import EmployeeForm from "./pages/EmployeeCreate";
import PlotManagement from "./pages/PlotManagement";
import Home from "./pages/Home";
import EmployeeManagement from "./pages/EmployeeManagement";
import Payout from "./pages/Payout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<EmployeeForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/estatisticas" element={<Analytics />} />
        <Route path="/cadastrousuario" element={<CustomerForm />} />
        <Route path="/criarboleto" element={<PayForm />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/gerenciarparcelas/:id" element={<PlotManagement />} />
        <Route path="/gerenciarfuncionario" element={<EmployeeManagement />} />
        <Route path="/payout" element={<Payout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
