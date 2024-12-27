import React from 'react';
    import Header from '../components/Header';
    import Breadcrumb from '../components/Breadcrumb';

    function Scenarios() {
      const breadcrumbPath = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Scénario', link: '/scenarios' }
      ];

      return (
        <div>
          <Header />
          <Breadcrumb path={breadcrumbPath} />
          <div className="content">
            <h2>Scénario</h2>
          </div>
        </div>
      );
    }

    export default Scenarios;
