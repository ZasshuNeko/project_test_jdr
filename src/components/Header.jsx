import React from 'react';
    import { useNavigate } from 'react-router-dom';

    function Header() {
      const navigate = useNavigate();

      const handleLogout = () => {
        navigate('/');
      };

      return (
        <div className="header">
          <div className="logo">Site Logo</div>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      );
    }

    export default Header;
