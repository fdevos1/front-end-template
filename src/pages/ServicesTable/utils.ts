import { GridColDef } from "@mui/x-data-grid";

export const serviceColumns: GridColDef[] = [
  { field: "id", headerName: "ID", maxWidth: 500, minWidth: 150, width: 1 },
  {
    field: "user_id",
    headerName: "ID DO USUÁRIO",
    maxWidth: 400,
    minWidth: 120,
    width: 1,
  },
  {
    field: "created_at",
    headerName: "CRIADO EM",
    maxWidth: 400,
    minWidth: 120,
    width: 1,
  },
  {
    field: "finished_at",
    headerName: "TERMINADO EM",
    maxWidth: 400,
    minWidth: 120,
    width: 1,
  },
];
