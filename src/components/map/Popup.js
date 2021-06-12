import React from 'react';

const Popup = ({name,licencePlate, range, batteryLevel}) => {
    return ( 
        <button 
            className="transport-marker" 
            onClick={()=>console.log('hola')}
        >
            <img src="/moto.png" alt="moto"  />

            <div>
                {name}
             
                {licencePlate}
            </div>
            <div>
                <br />
                {range}
               
            </div>
        </button> 
     );
}
 
export default Popup;