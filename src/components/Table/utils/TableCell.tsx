import { TableCell } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

import { styled } from "@mui/material/styles";

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
  [`&.${tableCellClasses.root}`]: {
    borderBottom: "1px solid #1b1e1f",
    borderTop: "1px solid #1b1e1f",
    padding: 8,
    color: "#303234",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    borderBottom: 0,
    padding: 12,

    fontSize: 16,
    color: theme.palette.common.white,
  },
}));

export { HeaderTableCell, StyledTableCell };
