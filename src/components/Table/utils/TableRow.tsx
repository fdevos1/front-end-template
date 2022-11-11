import { TableRow } from "@mui/material";
import { tableRowClasses } from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    backgroundColor: "#0E1011",
    borderBottom: "1px solid #1b1e1f",
  },
}));

export { StyledTableRow };
