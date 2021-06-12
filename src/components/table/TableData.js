import React from 'react';
import { DataContext } from '../../context/DataContext';
import { AgGridReact } from 'ag-grid-react';
import { defaultTable } from './defaultTable';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Table.css';


const TableData = () => {
    const { transportPublicData } =  React.useContext(DataContext);
    
    return (

    <div className="grid-item table">
        <div className="ag-theme-balham" style={{height: '100%', width: '100%'}}>
            <AgGridReact 
                rowData={transportPublicData}
                columnDefs={defaultTable.columnDefs}
                defaultColDef={defaultTable.defaultColDef}
                pagination={true}
                paginationPageSize={defaultTable.paginationSize}
            />
        </div>
            
    </div>
    );
};

export default TableData;