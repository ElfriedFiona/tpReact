// CreateClient.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const CreateClient = () => {
const [client, setClient] = useState({ nom: '', adresse: '', tel: '' });
const navigate = useNavigate();
const handleCreate = async (event) => {
    event.preventDefault();
    if(!client.nom || !client.adresse || !client.tel){
        alert("Veuillez remplir tous les champs");
        return;
    }
await axios.post('http://localhost:3001/clients', client);//ajout client
navigate('/clients', { replace: true });//après l’ajout retour à la liste
};
return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card p-4 shadow-sm">
                <h2 className="text-center text-primary mb-4">Créer un nouveau client</h2>
                <form onSubmit={handleCreate}>
                    <div className="mb-3">
                        <label className="form-label">Nom du client :</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={client.nom} 
                            onChange={(e) => setClient({ ...client, nom: e.target.value })} 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Adresse :</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={client.adresse} 
                            onChange={(e) => setClient({ ...client, adresse: e.target.value })} 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Téléphone :</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={client.tel} 
                            onChange={(e) => setClient({ ...client, tel: e.target.value })} 
                            required 
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Créer
                    </button>
                </form>
                
            </div>
        </div>
    </div>
</div>
);
};
export default CreateClient;
