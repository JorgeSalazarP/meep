import React from 'react';
import TableData from '../table/TableData';
import TransportPublicData from '../transportPublic/TransportPublicData';

import './Layout.css';

const Layout = () => {
    return (
        <main id="dashboard-content">
            <section id="container-header">
            <h2 id="welcome-title">Welcome to Lisbon!</h2>
            </section>
            <section id="grid-container">
                <TransportPublicData/>
                <TableData/>
            </section>
        </main>
    );
};

export default Layout;