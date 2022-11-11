import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import CustomTable from "../../components/Table/Table";
import ButtonComponent from "../../components/Button";

import { getServices } from "../../services/services";
import { getUser } from "../../services/user";

import { Container, Content } from "./styles";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);
  const [survey, setSurvey] = useState<any[]>([]);

  const navigate = useNavigate();

  const loggedUser = localStorage.getItem("user_name");

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

  const requestSurvey = async () => {
    const fetchSurvey = mockSurveyData;
    setSurvey(fetchSurvey);
  };

  useEffect(() => {
    requestSurvey();
    console.log(survey);
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

  const surveyTableHeader = [
    { text: "ID" },
    { text: "Enquete" },
    { text: "Assunto" },
    { text: "Votos" },
    { text: "Enviada" },
  ];

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
                Usuários cadastrados
              </Typography>

              <CustomTable header={userTableHeader} values={users} />

              <ButtonComponent
                text="Ir para página de usuários"
                onClick={() => navigate("/users")}
              />
            </Box>

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
                Atendimentos realizados
              </Typography>

              <CustomTable
                header={serviceTableHeader}
                values={services}
                onClick={() => navigate("/services")}
              />

              <ButtonComponent text="Ir para página de atendimentos" />
            </Box>
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
              display="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius={1}
              bgcolor="#0E1011"
              py={1}
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
