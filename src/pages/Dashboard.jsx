import React from 'react';
    import { NavLink } from 'react-router-dom';
    import Header from '../components/Header';

    function Dashboard() {
      return (
        <div>
          <Header />
          <div className="container">
            <div className="sidebar">
              <NavLink to="/system" activeClassName="active">Système</NavLink>
              <NavLink to="/users" activeClassName="active">Utilisateurs</NavLink>
              <NavLink to="/characters" activeClassName="active">Personnages</NavLink>
              <NavLink to="/items" activeClassName="active">Objets</NavLink>
              <NavLink to="/scenarios" activeClassName="active">Scénario</NavLink>
              <NavLink to="/campaigns" activeClassName="active">Campagnes</NavLink>
            </div>
            <div className="content">
              <h2>Dashboard</h2>
              <p>Nombre de comptes utilisateur ouverts: 10</p>
              <p>Nombre de personnages créés: 5</p>
              <p>Nombre de parties en cours: 3</p>
              <div className="card">
                <p>Partie 1 - 4 joueurs</p>
                <div className="card-actions">
                  <button>Rejoindre</button>
                  <button>Supprimer</button>
                </div>
              </div>
              <div className="card">
                <p>Partie 2 - 3 joueurs</p>
                <div className="card-actions">
                  <button>Rejoindre</button>
                  <button>Supprimer</button>
                </div>
              </div>
              <div className="card">
                <p>Partie 3 - 5 joueurs</p>
                <div className="card-actions">
                  <button>Rejoindre</button>
                  <button>Supprimer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Dashboard;
