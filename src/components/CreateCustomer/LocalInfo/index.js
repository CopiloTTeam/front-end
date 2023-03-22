import React from "react";
import "./style.css";


function LocalInfo({ formData, setFormData }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="first-box">
            <h1>CEP</h1>
            <input
              type="number"
              placeholder="CEP"
              value={formData.cep}
              onChange={(event) =>
                setFormData({ ...formData, cep: event.target.value })
              }
            />
          </div>
          <div className="second-box">
            <h1>Rua</h1>
            <input
              type="text"
              placeholder="Rua"
              value={formData.rua}
              onChange={(event) =>
                setFormData({ ...formData, rua: event.target.value })
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="third-box">
            <h1>Bairro</h1>
            <input
              type="text"
              placeholder="Bairro"
              value={formData.bairro}
              onChange={(event) =>
                setFormData({ ...formData, bairro: event.target.value })
              }
            />
          </div>
          <div className="fourth-box">
            <h1>Cidade</h1>
            <input
              type="text"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={(event) =>
                setFormData({ ...formData, cidade: event.target.value })
              }
            />
          </div>

          <div className="fifth-box">
            <h1>Estado</h1>
            <input
              type="text"
              placeholder="Estado"
              value={formData.estado}
              onChange={(event) =>
                setFormData({ ...formData, estado: event.target.value })
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="sixth-box">
            <h1>Numero</h1>
            <input
              type="number"
              placeholder="Numero"
              value={formData.numero}
              onChange={(event) =>
                setFormData({ ...formData, numero: event.target.value })
              }
            />
          </div>
          <div className="seventh-box">
            <h1>Telefone</h1>
            <input
              type="text"
              placeholder="Complemento"
              value={formData.complemento}
              onChange={(event) =>
                setFormData({ ...formData, complemento: event.target.value })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LocalInfo;
