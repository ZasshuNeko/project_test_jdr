import React from 'react';
    import Header from '../components/Header';
    import Breadcrumb from '../components/Breadcrumb';

    function Campaigns() {
      const breadcrumbPath = [
        { name: 'Dashboard', link: '/dashboard' },
        { name: 'Campagnes', link: '/campaigns' }
      ];

      return (
        <div>
          <Header />
          <Breadcrumb path={breadcrumbPath} />
          <div className="content">
            <h2>Campagnes</h2>
          </div>
        </div>
      );
    }

    export default Campaigns;
