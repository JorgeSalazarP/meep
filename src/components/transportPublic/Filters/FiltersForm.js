import React from 'react';
import T from 'prop-types';
import { TreeView, TreeItem } from "@material-ui/lab";
import { rangeBatteryLevel } from './rangeBatteryLevel';
import SelectRange from './SelectRange';


const FiltersForm = ({ onClickSearch, ...props }) => {
   
    const [batteryLevelChecked,setBatteryLevelChecked] = React.useState([]);
    const [filter, setFilter] = React.useState({
        name:'',
        levelBattery:[],

    });

    const { name } = filter;

    const handleChange = ev =>{
        setFilter(oldFilter => ({
            ...oldFilter,
            [ev.target.name]: ev.target.value,
        }));
    }
    const handleChangeChecked = ev =>{
        if(ev.target.checked){
            setBatteryLevelChecked((oldBatteryLevelChecked)=>[
                ...oldBatteryLevelChecked,
                ev.target.value
        ]);

        }else{
            setBatteryLevelChecked((oldBatteryLevelChecked)=>
                oldBatteryLevelChecked.filter((batteryLevel)=>batteryLevel !== ev.target.value)
            );
        }
       
    }
    const handleSubmit = ev =>{
        ev.preventDefault();
        filter.levelBattery = [...batteryLevelChecked];
        onClickSearch(filter);
    }

    return (  
    <div>

        <TreeView style={{ marginTop:'10'}}>
            <TreeItem nodeId="1" label="Filter" >
                <TreeItem nodeId="2" label="Options">
                    
                    <TreeItem nodeId="3" 
                        style={{ paddingTop:'10px'}}         
                    />
                       
                            <form
                                onSubmit={handleSubmit}
                            >
                                <input 
                                    type="text" 
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                                
                                <div className="battery-level">
                                
                                    <p>Battery Level</p>
                                    <input 
                                        type="checkbox" id="low-battery" 
                                        name="low-battery" 
                                        value="low-battery"
                                        onChange={handleChangeChecked}
                                    />
                                    <label htmlFor="low-battery"> {'< 25%'}</label>
                                    <input 
                                        type="checkbox" 
                                        id="medium-battery" 
                                        name="medium-battery" 
                                        value="medium-battery" 
                                        onChange={handleChangeChecked}
                                    />
                                    <label htmlFor="medium-battery"> 25% - 50% </label>
                                    <input 
                                        type="checkbox" 
                                        id="high-battery" 
                                        name="high-battery" 
                                        value="high-battery" 
                                        onChange={handleChangeChecked}
                                    />
                                    <label htmlFor="high-battery"> {'> 50%'} </label>
                                </div>
                                    <p>Range</p>
                                    <SelectRange
                                        {...props}
                                    />

                                <input
                                    type="submit"
                                    className="button-search"
                                    value="Search"
                                />
                            </form>
                    
                            
                    </TreeItem>
                                    
            </TreeItem>           
           

        </TreeView>
   
   
        
    </div>
     
    );
}

FiltersForm.propTypes = {
    onClickSearch: T.func.isRequired,
    
};
  

export default FiltersForm;