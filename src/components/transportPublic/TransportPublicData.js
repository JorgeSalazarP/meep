import React from 'react';
import { getData } from '../../api/axios';
import { DataContext } from '../../context/DataContext';
import Map from '../map/Map';


const TransportPublicData = () => {

    const { transportPublicData, filterData } = React.useContext(DataContext);
    let mapData = [];

    console.log(filterData);

    
    if ( filterData.length > 0 ){

        mapData = [...filterData];
       
    } else{
       
        mapData = [...transportPublicData];
    }
    
    
    return  (
        <div className="grid-item map">
            <div style={{height:'100%', width:'100%'}}>
            {   transportPublicData.length > 0
                &&
                <Map
                    
                    mapData={mapData}
                />
    
            }
            </div>
        </div>
           

            
    );
   
   
}
 
export default TransportPublicData;