// App.js
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//importation des composants
import ClientList from './components/ClientsList';
import CreateClient from './components/CreateClient';
import ClientDetails from './components/ClientDetails';
import UpdateClient from './components/UpdateClient';
const App = () => {
return (
  <Router>
      <div className="App">
        <h2 className="text-center mt-4">Application React CRUD</h2>
        <Routes>
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/create" element={<CreateClient />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/clients/:id/update" element={<UpdateClient />} />
        </Routes>
      </div>
    </Router>
);
};
export default App;