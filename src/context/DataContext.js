import React from 'react';
import { getData } from '../api/axios';



export const DataContext = React.createContext();

const DataContextProvider = (props) => {

    const [transportPublicData,setTransportPublicData] = React.useState([]);
    const [filterData,setFilterData] = React.useState([]);

    React.useEffect(()=>{
        getData()
        .then(res=> setTransportPublicData(res.data))
        .catch((error)=>{console.log(error)}
            //history.replace('/404')}
        );
    },[]);
      
    return(
        <DataContext.Provider
            value ={{ transportPublicData, filterData, setFilterData }}
        >
            {props.children}
        </DataContext.Provider>
    );
     
}

export default DataContextProvider;