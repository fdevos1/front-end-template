import { GridColDef } from "@mui/x-data-grid";

export const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "NOME", maxWidth: 300, minWidth: 120 },
  { field: "cellphone", headerName: "CELULAR", maxWidth: 300, minWidth: 120 },
  { field: "created_at", headerName: "CRIADO EM" },
];
