import { TableRow } from "@mui/material";
import { tableRowClasses } from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    borderBottom: "1px solid #3A3B3C",
    borderTop: "1px solid #3A3B3C",
  },
}));
const StyledHeaderTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    backgroundColor: "#242526",
  },
}));

export { StyledTableRow, StyledHeaderTableRow };
