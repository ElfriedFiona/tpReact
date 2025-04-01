// UpdateClient.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateClient = () => {
  const { id } = useParams(); //récupération id du client à modifier
  const [client, setClient] = useState({ nom: "", adresse: "", tel: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchClient = async () => {
      const response = await axios.get(`http://localhost:3001/clients/${id}`);
      setClient(response.data); //récupération infos du client à modifier
    };
    fetchClient();
  }, [id]);
  const handleUpdate = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3001/clients/${id}`, client);
    navigate("/clients", { replace: true }); //retour à la liste
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center text-primary mb-4">
              Mettre à jour le client
            </h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label className="form-label">Nom du client:</label>
                <input
                  type="text"
                  className="form-control"
                  value={client.nom}
                  onChange={(e) =>
                    setClient({ ...client, nom: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Adresse:</label>
                <input
                  type="text"
                  className="form-control"
                  value={client.adresse}
                  onChange={(e) =>
                    setClient({ ...client, adresse: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Téléphone:</label>
                <input
                  type="text"
                  className="form-control"
                  value={client.tel}
                  onChange={(e) =>
                    setClient({ ...client, tel: e.target.value })
                  }
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success">
                  Mettre à jour
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateClient;
