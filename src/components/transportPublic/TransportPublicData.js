import React from 'react';
import { getData } from '../../api/axios';
import { DataContext } from '../../context/DataContext';
import FiltersTransportData from './Filters/FiltersTransportData';
import Map from '../map/Map';


const TransportPublicData = () => {

    const { transportPublicData, filterData } = React.useContext(DataContext);
    let mapData = [];

    if ( filterData.length > 0 ){

        mapData = [...filterData];
    } else{
        
        mapData = [...transportPublicData];
    }
    
    
    return  (
        <React.Fragment>
            {   transportPublicData.length > 0
                &&
                <Map 
                    mapData={mapData}
                />
    
            }

        </React.Fragment>
    );
   
   
}
 
export default TransportPublicData;