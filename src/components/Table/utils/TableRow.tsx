import { TableRow } from "@mui/material";
import { tableRowClasses } from "@mui/material/TableRow";

import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    backgroundColor: "#242526",
    borderBottom: "1px solid #E4E6EB",
  },
}));

export { StyledTableRow };
