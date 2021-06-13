import React from 'react';
import { getData } from '../api/axios';


export const DataContext = React.createContext();

const DataContextProvider = ({history,...props}) => {

    const [transportPublicData,setTransportPublicData] = React.useState([]);
    const [filterData,setFilterData] = React.useState([]);

    React.useEffect(()=>{
        getData()
        .then(res=> setTransportPublicData(res.data))
        .catch((error)=>{
            history.push('/404');
        }
         
        );
    },[history]);

    // React.useEffect(()=>{
    //     const getDataAPI = async ()=>{
    //         try {
    //             const res = await getData();
    //             setTransportPublicData(res.data);
               
    //         } catch (error) {
    //             history.push('/404');
    //         }
    //     }
    //     getDataAPI();
        
    // },[history]);
      
    return(
        <DataContext.Provider
            value ={{ transportPublicData, filterData, setFilterData }}
        >
            {props.children}
        </DataContext.Provider>
    );
     
}

export default DataContextProvider;