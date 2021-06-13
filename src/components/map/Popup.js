import React from 'react';
import T from 'prop-types';
import ProgressBarBattery from './ProgressBarBattery';



const Popup = ({ batteryLevel }) => {

    const [isProgressBar, setIsProgressBar] = React.useState(false);
    const openProgressBarBattery = () => (setIsProgressBar(!isProgressBar));

    
    return ( 
        <React.Fragment>
            <div 
                className="transport-marker"
                onMouseEnter={openProgressBarBattery}
                onMouseOut={openProgressBarBattery}
                     
            >
                <img src="/moto.png" alt="moto"/>

                { isProgressBar
                    &&
                        <div className="progress-bar shine">

                            <ProgressBarBattery
                                batteryLevel={batteryLevel}
                            >
                            </ProgressBarBattery>
                            
                        </div>

                }    
              
            </div> 
            
        </React.Fragment>
    );
}

Popup.propTypes = {
    batteryLevel:T.number
    
};

Popup.defaultProps = {
    batteryLevel: 0,
};
 
export default Popup;