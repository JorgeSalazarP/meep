import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser,faUser,faSearch, faCity } from '@fortawesome/free-solid-svg-icons';

import './reset.css';
import './App.css';

function App() {
  return (


    <React.Fragment>

      <section id="sidebar">
          <div className="title-container">
            <img src="/Logo-Meep.png" alt="Meep app"/>
            <h1>Meep App</h1>
          </div>
          <div className="options-container">
              <div className="options">            
                  <FontAwesomeIcon icon={faHouseUser} className="icon"/>
                  <span>Home</span>
              </div>
              <div className="options">
                  <FontAwesomeIcon icon={faUser} className="icon"/>
                  <span>User</span>
              </div>
          
              <div className="options">
                  <FontAwesomeIcon icon={faSearch} className="icon"/>
                  <span>Search</span>

                
              </div>

              <div className="container-search">
                  <form action="#">
                    <section className="input-box"> 
                    <span>Name</span>
                      <input 
                            type="text" 
                        
                      />
                    </section>
                    <section className="battery-level">
                          <span>Battery Level</span>
                          <input 
                              type="checkbox" 
                              id="low-battery" 
                            
                          />
                          <label htmlFor="low-battery"> {'< 25%'}</label>
                          <input 
                              type="checkbox" 
                              id="medium-battery" 
                              
                          />
                          <label htmlFor="medium-battery"> 25% - 50% </label>
                          <input 
                              type="checkbox" 
                              id="high-battery" 
                              
                          />
                          <label htmlFor="high-battery"> {'> 50%'} </label>
                      </section>

                      <input
                        type="submit"
                       
                      />
                  </form>
                
              </div>

          </div>    

          <section className="options-container other-cities">
              <div className="options">            
                  <FontAwesomeIcon icon={faCity} className="icon"/>
                  <span>Other cities</span>
                  

              </div>
          </section>

      </section>

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
