import React from 'react';
import { getData } from '../../api/axios';


const TransportPublic = () => {

  const [transportPublicData,setTransportPublicData] = React.useState([]);
  
  React.useEffect(()=>{
      getData()
      .then(res=> setTransportPublicData(res.data))
      .catch((error)=>{console.log(error)}
      //history.replace('/404')}
      );
    },[]);
    

    return (

        <React.Fragment>
         { transportPublicData.length > 0
            && 
            <FiltersTransportData
                transportPublicData={transportPublicData}
            />
      
        }
        </React.Fragment>
    );
}
 
export default TransportPublic;