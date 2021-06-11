import React from 'react';
import Sidebar from './components/layout/Sidebar';
import DataContextProvider from './context/DataContext';
import TransportPublicData from './components/transportPublic/TransportPublicData';

import './reset.css';
import './App.css';

function App() {
  return (




    <DataContextProvider>
      <TransportPublicData/>

      <Sidebar/>
        <main id="dashboard-content">

          <section id="container-header">
            <h2 id="welcome-title">Welcome to Lisbon!</h2>
          
          </section>

          <section id="grid-container">
            <div className="grid-item map">

                <div style={{height:'600px', width:'100%'}}>
                    {/* <Map/> */}

                </div>
              
            </div>

            <div className="grid-item table">Table</div>
          
          </section>
        </main>
    </DataContextProvider>
      



  );
}

export default App;
