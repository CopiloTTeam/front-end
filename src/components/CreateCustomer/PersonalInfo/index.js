import React from "react";
import "./style.css";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="container">
      <div className="row">
        <div className="first-box">
          <h1>Nome Completo</h1>
          <input
            type="text"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={(event) =>
              setFormData({ ...formData, nome: event.target.value })
            }
          />
        </div>
        <div className="second-box">
          <h1>CPF</h1>
          <input
            type="text"
            placeholder="CPF"
            value={formData.cpf}
            onChange={(event) =>
              setFormData({ ...formData, cpf: event.target.value })
            }
          />
        </div>
      </div>

      <div className="row">
        <div className="first-box">
          <h1>Email</h1>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div className="second-box">
          <h1>Data de Nascimento</h1>
          <input
            type="date"
            placeholder="Data de Nascimento"
            value={formData.data}
            onChange={(event) =>
              setFormData({ ...formData, data: event.target.value })
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="box-tel">
          <h1>Telefone</h1>
          <div className="tel-plus">
            <input
              type="number"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={(event) =>
                setFormData({ ...formData, telefone: event.target.value })
              }
            />
            <button>+</button>
          </div>
        </div>
        <div className="box-cel">
          <h1>Celular</h1>
          <div className="tel-plus">
            <input
              type="number"
              placeholder="Celular"
              value={formData.celular}
              onChange={(event) =>
                setFormData({ ...formData, celular: event.target.value })
              }
            />
            <button className="cel-plus">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
