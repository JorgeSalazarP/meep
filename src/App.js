import React from 'react';
import Sidebar from './components/layout/Sidebar';
import DataContextProvider from './context/DataContext';
import TransportPublicData from './components/transportPublic/TransportPublicData';
import TableData from './components/table/TableData';

import './reset.css';
import './App.css';


function App() {
  return (
    <DataContextProvider>
      <Sidebar/>
        <main id="dashboard-content">

          <section id="container-header">
            <h2 id="welcome-title">Welcome to Lisbon!</h2>
          </section>
            <section id="grid-container">
                <TransportPublicData/>

                <div className="grid-item table">
                  <TableData/>
                </div>
            </section>
        </main>
    </DataContextProvider>
      



  );
}

export default App;
