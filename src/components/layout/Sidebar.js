import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser,faUser,faSearch, faCity } from '@fortawesome/free-solid-svg-icons';
import FiltersTransportData from '../transportPublic/Filters/FiltersTransportData';



const Sidebar = () => {

    return (


      <section id="sidebar">
        <div className="title-container">
          <img src="/Logo-Meep.png" alt="Meep app" />
          <h1>Meep App</h1>
        </div>
        <div className="options-container">
          <div className="options">
            <FontAwesomeIcon icon={faHouseUser} className="icon" />
            <span>Home</span>
          </div>
          <div className="options">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>User</span>
          </div>

          <div className="options">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <span>Search</span>

          </div>

            <FiltersTransportData/>

      
        </div>

        <section className="options-container other-cities">
          <div className="options">
            <FontAwesomeIcon icon={faCity} className="icon" />
            <span>Other cities</span>
          </div>
        </section>
      </section>
    );
}
 
export default Sidebar;