import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import moment from "moment";

import CustomTable from "../../components/Table";
import ButtonComponent from "../../components/Button";

import { serviceColumns } from "../ServicesTable/utils";
import { userColumns } from "../UsersTable/utils";

import { getServices } from "../../services/services";
import { getUser } from "../../services/user";

import { Container } from "./styles";

interface ITable {
  tableName: string;
  rowTable: any;
  columnTable: GridColDef[];
  buttonText: string;
  url: string;
}

function Dashboard() {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const requestServices = async () => {
    const fetchServices = await getServices();
    setServices(fetchServices);
  };

  useEffect(() => {
    requestServices();
  }, []);

  const requestUsers = async () => {
    const fetchUsers = await getUser();
    setUsers(fetchUsers);
  };

  useEffect(() => {
    requestUsers();
  }, []);

  const fetchedServiceRows: any = services.map((service: any) => {
    return {
      id: service.id,
      user_id: service.u_id,
      created_at: moment(service.created_at).format("DD/MM/YYYY"),
      finished_at: service.finished_at
        ? moment(service.finished_at).format("DD/MM/YYYY")
        : "Não finalizado",
    };
  });

  const fetchedUserRows: any = users.map((user: any) => {
    return {
      id: user.user_id,
      name: user.name,
      cellphone: user.cellphone,
      created_at: moment(user.created_at).format("DD/MM/YYYY"),
    };
  });

  const MuiTable = ({
    tableName,
    rowTable,
    columnTable,
    buttonText,
    url,
  }: ITable) => {
    return (
      <Box
        width={1}
        height={1}
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <Typography variant="h3">{tableName}</Typography>
        <Box width={1} height={"30rem"}>
          <CustomTable
            rows={rowTable}
            columns={columnTable}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            checkboxSelection
          />
        </Box>
        <ButtonComponent onClick={() => navigate(url)} text={buttonText} />
      </Box>
    );
  };

  return (
    <Container>
      <MuiTable
        tableName="Tabela de usuário"
        rowTable={fetchedUserRows}
        columnTable={userColumns}
        buttonText="Ir para tabela"
        url="/users"
      />
      <MuiTable
        tableName="Tabela de atendimento"
        rowTable={fetchedServiceRows}
        columnTable={serviceColumns}
        buttonText="Ir para tabela"
        url="/services"
      />
    </Container>
  );
}

export default Dashboard;
