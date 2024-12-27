import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import './index.css';
    import AuthPage from './pages/AuthPage';
    import Dashboard from './pages/Dashboard';
    import System from './pages/System';
    import Users from './pages/Users';
    import Characters from './pages/Characters';
    import Items from './pages/Items';
    import Scenarios from './pages/Scenarios';
    import Campaigns from './pages/Campaigns';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/system" element={<System />} />
            <Route path="/users" element={<Users />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/items" element={<Items />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/campaigns" element={<Campaigns />} />
          </Routes>
        </Router>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
