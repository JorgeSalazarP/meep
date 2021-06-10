import React from 'react';
import { TreeView, TreeItem } from "@material-ui/lab";
import { rangeBatteryLevel } from './rangeBatteryLevel';
import FiltersForm from './FiltersForm';
import { rangeMinAndMax } from './rangeMinAndMax';


const FiltersTransportData = ({ transportPublicData }) => {

    const [selectedTransportData,setSelectedTransportData] = React.useState(transportPublicData);

    const [chooseRange,setChooseRange] = React.useState([rangeMinAndMax.min,rangeMinAndMax.max]);

    const filteredRange = selectedRange =>{
        setChooseRange(selectedRange);
    };

   
    const onClickSearch = selectedFilter =>{
           
            setSelectedTransportData(
                transportPublicData.filter(transport=>{

                    const filterByName = transport.name.toLowerCase().includes(selectedFilter.name.toLowerCase())
                
                    let filterRange = 0;
                    if(transport.range >= chooseRange[0] && transport.range <= chooseRange[1]){
                        filterRange = transport.range;
                        
                    }

                    if(selectedFilter.levelBattery.length !== 0){
                        let filterBatteryLevel = 0;
                        if(transport.batteryLevel >= rangeBatteryLevel.min  && transport.batteryLevel <= rangeBatteryLevel.med) {
                            if(selectedFilter.levelBattery.find(element=>element === 'low-battery')){
                                filterBatteryLevel = transport.batteryLevel;
                                       
                            }
            
                        }
                        if(transport.batteryLevel > rangeBatteryLevel.med  && transport.batteryLevel <= rangeBatteryLevel.max) {
                            if(selectedFilter.levelBattery.find(element=>element === 'medium-battery')){
                                filterBatteryLevel = transport.batteryLevel;
                        
                            }
                        }

                        if(transport.batteryLevel > rangeBatteryLevel.max) {
                            if(selectedFilter.levelBattery.find(element=>element === 'high-battery')){
                                filterBatteryLevel = transport.batteryLevel;
                             
                            }
                        }

                        return filterByName && filterRange && filterBatteryLevel;

                    }else{
                        
                        
                        return filterByName && filterRange;

                    }
                    
                    

                })
            )            
    }

    

    return (    
        <>
            <FiltersForm
                onClickSearch={onClickSearch}
                filteredRange={filteredRange}
                
            />
        </>  

    );
}
 
export default FiltersTransportData;