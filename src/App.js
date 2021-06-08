import React from 'react';
import Sidebar from './components/layout/Sidebar';



import './reset.css';
import './App.css';

function App() {
  return (


    <React.Fragment>

      <Sidebar/>
      <main id="dashboard-content">

        <section id="container-header">
          <h2 id="welcome-title">Welcome to Lisbon!</h2>
         
        </section>

        <section id="grid-container">
          <div className="grid-item map">Map</div>
          <div className="grid-item table">Table</div>
         
        </section>

      </main>

    </React.Fragment>
      



  );
}

export default App;
