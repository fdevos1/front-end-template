import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  TableFooter,
} from "@mui/material";
import moment from "moment";

import ButtonComponent from "../Button";

import { HeaderTableCell, StyledTableCell } from "./utils/TableCell";
import { StyledTableRow, StyledHeaderTableRow } from "./utils/TableRow";
import { CustomTablePagination } from "./utils/TablePagination";

function CustomTable(props: any) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setRowsPerPage(5);
    } else {
      setRowsPerPage(10);
    }
  }, []);

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

  const handleSelectedSurvey = (survey: any) => {
    if (location.pathname === "/survey") {
      const { selectedSurvey } = props;

      selectedSurvey(survey);
    } else {
      return;
    }
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.values.length) : 0;

  return (
    <TableContainer sx={{ height: "100%" }}>
      <Table>
        <TableHead>
          <StyledHeaderTableRow>
            {props.header.map((item: any, index: any) => {
              return (
                <HeaderTableCell align="center" variant="head" key={index}>
                  <Typography variant="button">{item.text}</Typography>
                </HeaderTableCell>
              );
            })}
          </StyledHeaderTableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? props.values.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : props.values
          ).map((item: any, index: any) => {
            const userExist = () => {
              if (item.user_created_at) {
                const userCreatedAt = moment(item.user_created_at).format(
                  "DD/MM/YY - HH:mm"
                );

                return userCreatedAt;
              } else {
                return;
              }
            };

            const serviceStatus = () => {
              if (!item.finished_at) {
                return null;
              }

              if (item?.finished_at === item.created_at) {
                return "N??o finalizado";
              } else if (
                item?.finished_at &&
                item.finished_at !== item.created_at
              ) {
                const serviceFinished = moment(item.finished_at).format(
                  "DD/MM/YY - HH:mm"
                );

                return serviceFinished;
              } else {
                return;
              }
            };

            const votesLength = () => {
              if (item.survey_votes) {
                return item.survey_votes.length;
              }
            };

            const sended = () => {
              const openInNewTab = (url: string): void => {
                const newWindow = window.open(
                  url,
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.opener = null;
              };

              if (item.id && item.text && item.sended === false) {
                return (
                  <ButtonComponent
                    text="enviar"
                    onClick={() =>
                      openInNewTab(
                        `https://wa.me/555137793961?text=enviar%20enquete%20id=${item.id}`
                      )
                    }
                  />
                );
              } else if (item.id && item.text && item.sended === true) {
                return "enviado";
              }
            };

            const sendedSurvey = () => {
              const openInNewTab = (url: string): void => {
                const newWindow = window.open(
                  url,
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.opener = null;
              };

              if (item.survey_sended === false) {
                return (
                  <ButtonComponent
                    text="enviar"
                    onClick={() =>
                      openInNewTab(
                        `https://wa.me/555137793961?text=enviar%20enquete%20id=${item.survey_id}`
                      )
                    }
                  />
                );
              } else if (item.survey_sended === true) {
                return "enviado";
              }
            };

            const onTransmissionList = () => {
              if (item.on_transmission_list === false) {
                return "N??o";
              } else if (item.on_transmission_list === true) {
                return "Sim";
              } else {
                return null;
              }
            };

            const serviceId = () => {
              if (item.id && !item.text) {
                return item.id.slice(0, 8);
              } else {
                return;
              }
            };

            return (
              <StyledTableRow
                key={index}
                onClick={() => handleSelectedSurvey(item)}
              >
                <StyledTableCell
                  align="center"
                  variant="body"
                  scope="row"
                  size="small"
                >
                  <Typography variant="body1">
                    {item?.user_id ||
                      serviceId() ||
                      item?.group_id ||
                      item?.survey_id ||
                      item?.id}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  variant="body"
                  scope="row"
                  size="small"
                >
                  <Typography variant="body2">
                    {item?.name ||
                      item?.user_cellphone ||
                      item?.group_name ||
                      item?.survey_text ||
                      item?.text}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  variant="body"
                  scope="row"
                  size="small"
                >
                  <Typography variant="body2">
                    {item?.cellphone ||
                      item?.subject ||
                      item?.survey_subject ||
                      moment(item?.created_at).format("DD/MM/YY - HH:mm")}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  variant="body"
                  scope="row"
                  size="small"
                >
                  <Typography variant="body2">
                    {userExist() ||
                      serviceStatus() ||
                      sended() ||
                      votesLength()}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell
                  align="center"
                  variant="body"
                  scope="row"
                  size="small"
                >
                  {sendedSurvey() || onTransmissionList()}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}

          {emptyRows > 0 && (
            <StyledTableRow style={{ height: 53 * emptyRows }}>
              <StyledTableCell colSpan={6} />
            </StyledTableRow>
          )}
        </TableBody>
        <TableFooter>
          {page > 0 ? (
            <CustomTablePagination
              page={page}
              rowsPerPage={rowsPerPage}
              count={props.values.length}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          ) : null}
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
