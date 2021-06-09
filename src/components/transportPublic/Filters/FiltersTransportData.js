import React from 'react';
import { TreeView, TreeItem } from "@material-ui/lab";
import { rangeBatteryLevel } from './rangeBatteryLevel';
import FiltersForm from './FiltersForm';


const FiltersTransportData = ({ transportPublicData }) => {

    const [selectedTransportData,setSelectedTransportData] = React.useState(transportPublicData);

    const [range,setRange] = React.useState({
        min:0,
        max:100
    });

    const filteredRange = selectedRange =>{
        setRange(selectedRange);
    };


   
    const onClickSearch = selectedFilter =>{

            if(selectedFilter.name === '' && selectedFilter.levelBattery.length === 0){
                setSelectedTransportData(transportPublicData);
                return;
            }

            setSelectedTransportData(
                transportPublicData.filter(transport=>{
                    const filterByName = transport.name.toLowerCase().includes(selectedFilter.name.toLowerCase())

                    let filterBatteryLevel;
                    if(selectedFilter.levelBattery.length > 0){
                
                        if(transport.batteryLevel >= rangeBatteryLevel.min  && transport.batteryLevel <= rangeBatteryLevel.med) {
                            if(selectedFilter.levelBattery.find(element=>element === 'low-battery')){
                                filterBatteryLevel = filterBatteryLevel=transport.batteryLevel;
                            }
                        }

                        if(transport.batteryLevel > rangeBatteryLevel.med  && transport.batteryLevel <= rangeBatteryLevel.max) {
                            if(selectedFilter.levelBattery.find(element=>element === 'medium-battery')){
                                    filterBatteryLevel = filterBatteryLevel=transport.batteryLevel;
                            }
                        }

                        if(transport.batteryLevel > rangeBatteryLevel.max) {
                            if(selectedFilter.levelBattery.find(element=>element === 'high-battery')){
                                filterBatteryLevel = filterBatteryLevel=transport.batteryLevel;
                            }
                        }

                    }
                    return filterByName && filterBatteryLevel;
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