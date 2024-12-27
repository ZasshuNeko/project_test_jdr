import React from 'react';
    import Header from '../components/Header';
    import Breadcrumb from '../components/Breadcrumb';

    function Items() {
      const breadcrumbPath = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Objets', link: '/items' }
      ];

      return (
        <div>
          <Header />
          <Breadcrumb path={breadcrumbPath} />
          <div className="content">
            <h2>Objets</h2>
          </div>
        </div>
      );
    }

    export default Items;
