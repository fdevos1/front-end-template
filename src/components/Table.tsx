import React from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";

function CustomTable(props: any) {
  return (
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      pageSize={props.pageSize}
      rowsPerPageOptions={props.rowsPerPage}
      disableSelectionOnClick
      checkboxSelection
      {...props}
    />
  );
}

export default CustomTable;
