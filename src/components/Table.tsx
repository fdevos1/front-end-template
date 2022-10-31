import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

import { styled } from "@mui/material/styles";

import moment from "moment";

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
    padding: 8,
    height: 64,

    fontSize: 16,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&": {
    backgroundColor: "#0E1011",
    borderBottom: "1px solid #1b1e1f",
  },
  // hide last border
}));

function CustomTable(props: any) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {props.header.map((item: any) => {
              return (
                <HeaderTableCell align="center">
                  <Typography variant="button">{item.text}</Typography>
                </HeaderTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={{ gap: "1rem" }}>
          {props.user?.map((item: any) => (
            <StyledTableRow>
              <StyledTableCell align="center">
                <Typography variant="body1">{item.user_id}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="body1">{item.name}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="body1">{item.cellphone}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="body1">
                  {moment(item.created_at).format("DD/MM/YY")}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}

          {props.service?.map((item: any) => (
            <StyledTableRow>
              <StyledTableCell align="center">
                <Typography variant="body1">{item.id}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="body1">{item.u_id}</Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="body1">
                  {moment(item.created_at).format("DD/MM/YY")}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography variant="body1">
                  {moment(item.finished_at).format("DD/MM/YY")}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
