import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Container, Content } from "./styles";

import CustomTable from "../../components/Table";
import ButtonComponent from "../../components/Button";
import Sidebar from "../../components/Sidebar";

import { getServices } from "../../services/services";
import { getUser } from "../../services/user";

import {
  serviceTableHeader,
  surveyTableHeader,
  userTableHeader,
} from "../../utils/TableHeader";

import { IUserTypes } from "../../types/UserTypes";
import { IServiceTypes } from "../../types/ServiceTypes";

function Dashboard() {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState<IUserTypes[]>([]);
  const [survey, setSurvey] = useState<any[]>([]);

  const [tableProps, setTableProps] = useState<any[]>([]);

  const navigate = useNavigate();

  const loggedUser = localStorage.getItem("user_name");

  const listServices = async () => {
    const fetchService = await getServices();
    setServices(fetchService);

    const fetchSurvey = mockSurveyData;
    setSurvey(fetchSurvey);

    const fetchUsers = await getUser();
    setUsers(fetchUsers);
  };

  useEffect(() => {
    listServices();
  }, []);

  const mockSurveyData = [
    {
      survey_id: 0,
      survey: "O grêmio vai sair campeão?",
      survey_subject: "Esporte",
      votes: 0,
      sended: false,
    },
    {
      survey_id: 1,
      survey: "Quantos graus faz hoje?",
      survey_subject: "Clima/tempo",
      votes: 0,
      sended: false,
    },
    {
      survey_id: 2,
      survey: "Quanto é 27+2?",
      survey_subject: "Matemática básica",
      votes: 9,
      sended: true,
    },
    {
      survey_id: 3,
      survey: "O que é, o que é, alguma coisa",
      survey_subject: "O que é, o que é",
      votes: 16,
      sended: true,
    },
    {
      survey_id: 4,
      survey: "Top 3 gols do Neymar?",
      survey_subject: "Esporte",
      votes: 89,
      sended: true,
    },
  ];

  const createTable = (
    tableTitle: string,
    tableHeader: { text: string }[],
    tableValue: any[],
    buttonText: string,
    buttonUrl: string
  ) => {
    return (
      <Box
        width={1}
        py={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        borderLeft="1px solid #1b1e1f"
        borderRadius={1}
        bgcolor="#0E1011"
      >
        <Typography variant="h6" color="white">
          {tableTitle}
        </Typography>

        <CustomTable header={tableHeader} values={tableValue} />

        <ButtonComponent
          text={buttonText}
          onClick={() => navigate(`${buttonUrl}`)}
        />
      </Box>
    );
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <Box p={2}>
          <Typography variant="h4" color="white">
            Olá, bem-vindo {loggedUser}
          </Typography>
        </Box>

        <Box width={1} height={1} display="flex" overflow="auto">
          <Box
            width="65%"
            height={1}
            display="flex"
            flexDirection="column"
            gap={2}
            padding={0.5}
          >
            {createTable(
              "Usuários cadastrados",
              userTableHeader,
              users,
              "Ir para página de usuários",
              "/users"
            )}

            {createTable(
              "Atendimentos realizados",
              serviceTableHeader,
              services,
              "Ir para página de atendimentos",
              "/services"
            )}
          </Box>

          <Box
            width="35%"
            height={1}
            p={0.5}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Box
              width={1}
              py={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
              borderLeft="1px solid #1b1e1f"
              borderRadius={1}
              bgcolor="#0E1011"
            >
              <Box
                display="flex"
                p={1}
                width={1}
                justifyContent="space-between"
              >
                <Typography variant="h6" color="white">
                  Criar uma enquete
                </Typography>
                <ButtonComponent text="Criar enquete" variant="contained" />
              </Box>
              <Box>
                <CustomTable header={surveyTableHeader} values={survey} />
              </Box>

              <ButtonComponent text="Ir para página de enquetes" />
            </Box>
          </Box>
        </Box>
      </Content>
    </Container>
  );
}

export default Dashboard;
