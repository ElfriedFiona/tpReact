// ClientDetails.js
import React, { useState, useEffect } from "react";
import { useParams, /*useNavigate*/ Link } from "react-router-dom";
import axios from "axios";
const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  // const history = useNavigate();
  useEffect(() => {
    const fetchClient = async () => {
      const response = await axios.get(`http://localhost:3001/clients/${id}`);
      setClient(response.data);
    };
    fetchClient();
  }, [id]);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center  text-primary">Détails du client</h2>
            {client ? (
              <>
                <p>
                  <strong>Nom du client :</strong> {client.nom}
                </p>
                <p>
                  <strong>Adresse :</strong> {client.adresse}
                </p>
                <p>
                  <strong>Téléphone :</strong> {client.tel}
                </p>
              </>
            ) : (
              <p className="text-danger text-center">Client introuvable</p>
            )}
            <div className="text-center mt-3">
              <Link to="/clients" className="btn btn-secondary">
                Retour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientDetails;
