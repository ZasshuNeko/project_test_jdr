import React from 'react';
    import Header from '../components/Header';
    import Breadcrumb from '../components/Breadcrumb';

    function Characters() {
      const breadcrumbPath = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Personnages', link: '/characters' }
      ];

      return (
        <div>
          <Header />
          <Breadcrumb path={breadcrumbPath} />
          <div className="content">
            <h2>Personnages</h2>
          </div>
        </div>
      );
    }

    export default Characters;
