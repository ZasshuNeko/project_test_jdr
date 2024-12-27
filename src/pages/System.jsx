import React from 'react';
    import Header from '../components/Header';
    import Breadcrumb from '../components/Breadcrumb';

    function System() {
      const breadcrumbPath = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Système', link: '/system' }
      ];

      return (
        <div>
          <Header />
          <Breadcrumb path={breadcrumbPath} />
          <div className="content">
            <h2>Système</h2>
          </div>
        </div>
      );
    }

    export default System;
