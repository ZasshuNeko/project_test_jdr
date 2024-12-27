import React from 'react';
    import { useNavigate } from 'react-router-dom';

    function Breadcrumb({ path }) {
      const navigate = useNavigate();

      return (
        <div className="breadcrumb">
          {path.map((p, index) => (
            <span key={index} onClick={() => navigate(p.link)}>
              {p.name}
            </span>
          ))}
        </div>
      );
    }

    export default Breadcrumb;
