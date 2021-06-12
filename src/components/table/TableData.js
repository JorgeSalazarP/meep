import React from 'react';
import { DataContext } from '../../context/DataContext';
import { AgGridReact } from 'ag-grid-react';
import { defaultTable } from './defaultTable';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Table.css';


const TableData = () => {
    const { transportPublicData } =  React.useContext(DataContext);
    const containerStyle = e =>{


    }
   
    return (


        <div className="ag-theme-balham" style={{height: '100%', width: '100%'}}>
            <AgGridReact 
                 
                rowData={transportPublicData}
                columnDefs={defaultTable.columnDefs}
                defaultColDef={defaultTable.defaultColDef}
                containerStyle={containerStyle}
                pagination={true}
                paginationPageSize={defaultTable.paginationSize}
            
               
            />
        </div>
            
        
    );
};

export default TableData;