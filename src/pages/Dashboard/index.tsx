import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import CustomTable from "../../components/Table";
import ButtonComponent from "../../components/Button";

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
    console.log("SERVIÇOS", fetchServices);
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

  const serviceTableHeader = [
    { text: "ID" },
    { text: "ID do usuário" },
    { text: "Criado em" },
    { text: "Finalizado em" },
  ];

  const userTableHeader = [
    { text: "ID" },
    { text: "Nome" },
    { text: "Celular" },
    { text: "Criado em" },
  ];

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        width={"50%"}
        height={1}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Typography variant="h4" color="white">
          Tabela de usuários
        </Typography>
        <CustomTable header={userTableHeader} user={users} />
        <ButtonComponent
          text="Ir para tabela"
          onClick={() => navigate("/users")}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width={"50%"}
        height={1}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Typography variant="h4" color="white">
          Tabela de serviços
        </Typography>
        <CustomTable header={serviceTableHeader} service={services} />
        <ButtonComponent
          text="Ir para tabela"
          onClick={() => navigate("/services")}
        />
      </Box>
    </Container>
  );
}

export default Dashboard;
