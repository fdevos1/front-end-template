import { TableRow } from "@mui/material";
import { tableRowClasses } from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    backgroundColor: "#242526",
    borderBottom: "1px solid #3A3B3C",
  },
}));

export { StyledTableRow };
