import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  IconButton,
  Box,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

import { useTheme } from "@mui/material/styles";

import { styled } from "@mui/material/styles";

import moment from "moment";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

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
}));

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function CustomTable(props: any) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  console.log(props.values.map((item: any) => item));

  const location = useLocation();

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.values.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {props.header.map((item: any) => {
              return (
                <HeaderTableCell align="center" variant="head">
                  <Typography variant="button">{item.text}</Typography>
                </HeaderTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={{ gap: "1rem" }}>
          {(rowsPerPage > 0
            ? props.values.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : props.values
          ).map((item: any, index: any) => (
            <>
              <StyledTableRow key={index}>
                <StyledTableCell align="center">
                  <Typography variant="body1">
                    {item?.user_id || item?.id || item?.group_id}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body1">
                    {item?.name || item?.user_cellphone || item?.group_name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body1">
                    {item?.cellphone ||
                      item?.subject ||
                      moment(item.created_at).format("DD/MM/YY - HH:mm")}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body1">
                    {item.user_created_at
                      ? moment(item.user_created_at).format("DD/MM/YY - HH:mm")
                      : item?.finished_at !== null
                      ? moment(item.finished_at).format("DD/MM/YY - HH:mm")
                      : "Não finalizado"}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            </>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6}>
                <Typography>Nenhum item cadastrado</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={
            location.pathname === "/dashboard"
              ? [5]
              : [5, 10, { label: "Todos", value: 11 }]
          }
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          count={props.values.length}
          colSpan={4}
          ActionsComponent={TablePaginationActions}
          sx={{ color: "#303234", borderBottom: 0 }}
        />
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
