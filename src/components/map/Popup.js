import React from 'react';
import ProgressBarBattery from './ProgressBarBattery';
import './Popup.css';


const Popup = ({ batteryLevel }) => {

    const [isProgressBar, setIsProgressBar] = React.useState(false);
    
    return ( 
        <React.Fragment>
            <div 
                className="transport-marker"
                onMouseEnter={()=>console.log('hola')}
                     
            >
                <img src="/moto.png" alt="moto"  />

                    
                <div className="progress-bar blue shine">

                    <ProgressBarBattery
                        batteryLevel={batteryLevel}
                    >
                    </ProgressBarBattery>

                    
                </div>
              
            </div> 
            
        </React.Fragment>
    );
}
 
export default Popup;