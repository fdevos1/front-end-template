import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Container, Content } from "./styles";

import CustomTable from "../../components/Table";
import ButtonComponent from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import CustomModal from "../../components/Modal";

import { getServices } from "../../services/services";
import { getUser } from "../../services/user";
import {
  createSurvey,
  createSurveyAnswer,
  getLastSurvey,
  getSurvey,
} from "../../services/survey";

import {
  serviceTableHeader,
  surveyTableHeader,
  userTableHeader,
} from "../../utils/TableHeader";

import { IUserTypes } from "../../types/UserTypes";
import { IServiceTypes } from "../../types/ServiceTypes";
import { ISurveyType } from "../../types/SurveyTypes";

import { surveyFormInputs } from "../../utils/ModalFormValues";

function Dashboard() {
  const [services, setServices] = useState<IServiceTypes[]>([]);
  const [users, setUsers] = useState<IUserTypes[]>([]);
  const [survey, setSurvey] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const loggedUser = localStorage.getItem("user_name");

  const listServices = async () => {
    const fetchService = await getServices();
    setServices(fetchService);

    const fetchSurvey = await getSurvey();
    setSurvey(fetchSurvey);

    const fetchUsers = await getUser();
    setUsers(fetchUsers);
  };

  useEffect(() => {
    listServices();
  }, []);

  const onSubmit = async (data: any) => {
    const {
      survey_text,
      survey_subject,
      answer_text,
      answer_text_2,
      answer_text_3,
    }: any = data;

    const surveyJson = {
      survey_text: survey_text,
      survey_subject: survey_subject,
    };

    await createSurvey(surveyJson);

    let lastSurveyCreated: ISurveyType | null = await getLastSurvey();
    console.log("ultima enquete criada", lastSurveyCreated);

    if (lastSurveyCreated) {
      console.log("entrou no if");

      const answerList = [
        {
          id_from_survey: lastSurveyCreated.survey_id,
          answer_text,
        },
        {
          id_from_survey: lastSurveyCreated.survey_id,
          answer_text: answer_text_2,
        },
        {
          id_from_survey: lastSurveyCreated.survey_id,
          answer_text: answer_text_3,
        },
      ];

      console.log("objeto das respostas", answerList);

      await createSurveyAnswer(answerList);
    }

    lastSurveyCreated = null;
    setOpen(false);
  };

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
                <ButtonComponent
                  text="Criar enquete"
                  variant="contained"
                  onClick={() => setOpen(true)}
                />
              </Box>
              <Box width={1}>
                <CustomTable header={surveyTableHeader} values={survey} />
              </Box>

              <ButtonComponent
                text="Ir para página de enquetes"
                onClick={() => navigate("/survey")}
              />
            </Box>
          </Box>
        </Box>

        <CustomModal
          open={open}
          setState={setOpen}
          title={"Criar enquete"}
          formValues={surveyFormInputs}
          onSubmit={onSubmit}
        />
      </Content>
    </Container>
  );
}

export default Dashboard;
