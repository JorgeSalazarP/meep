export const defaultTable = {

    columnDefs: [
        {
            headerName: 'Licence', 
            field:'licencePlate',
            cellClass: "grid-cell-centered"
            
        },
        {
            headerName: 'x coordinate',
            field:'x',
            cellClass: "grid-cell-centered"
            

        },
        {
            headerName: 'y coordinate',
            field:'y',
            cellClass: "grid-cell-centered"
            

        },
        {
            headerName: 'Model',
            field:'model',
            cellClass: "grid-cell-centered"
            

        },

        
    ],
 
    defaultColDef : {
        sortable:true,
        filter:true,
        width:'110px',
       
       
    },
    
    paginationSize: 10


}