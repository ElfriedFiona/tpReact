// ClientList.js
import React, { useState, useEffect } from "react";
import { Link /*redirect,useNavigate*/ } from "react-router-dom";
import axios from "axios";
const ClientList = () => {
  const [clients, setClients] = useState([]);
  // const navigate = useNavigate();
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/clients");
    setClients(response.data); //chargement du résultat de la requête
  };
  useEffect(() => {
    fetchData();
  }, []); //lancer la fonction fetchData une seule fois au premier render
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/clients/${id}`);
    fetchData();
  }; //axios.delete pour supprimer le client identifié par id
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center text-primary flex-grow-1">Liste des clients</h1>
        <Link to="/clients/create" className="btn btn-success">
          + Ajouter
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Téléphone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.nom}</td>
                  <td>{client.adresse}</td>
                  <td>{client.tel}</td>
                  <td className="text-center">
                    <div className="btn-group gap-2">
                    <Link
                        to={`/clients/${client.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        Détails
                      </Link>
                      <Link
                        to={`/clients/${client.id}/update`}
                        className="btn btn-primary btn-sm"
                      >
                        Modifier
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(client.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  Aucun client disponible.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ClientList;
