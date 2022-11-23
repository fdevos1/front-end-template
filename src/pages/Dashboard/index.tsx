import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";

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
import DashboardCard from "../../components/DashboardCard";
import { dashboardCardsValues } from "../../utils/DashboardCards";
import { IDashboardCardsTypes } from "../../types/DashboardTypes";
import TabsComponent from "../../components/Tabs";

function Dashboard() {
  const [services, setServices] = useState<IServiceTypes[]>([]);
  const [users, setUsers] = useState<IUserTypes[]>([]);
  const [survey, setSurvey] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

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

  const handleChangeTab = (e: any, newValue: number) => {
    setActiveTab(newValue);
  };

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

  return (
    <Box display="flex" width={1} height={1} bgcolor="background.default">
      <Sidebar />
      <Box
        width={1}
        height={1}
        display="flex"
        flexDirection="column"
        px={4}
        py={2}
        gap={4}
      >
        <Box display="flex" width={1} justifyContent="space-between">
          <Box
            bgcolor="background.paper"
            borderRadius={10}
            minWidth={180}
            width={1}
            maxWidth={240}
          >
            <Typography
              variant="h1"
              p={1}
              color="text.primary"
              sx={{ textTransform: "uppercase" }}
              align="center"
            >
              Dashboard
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="background.paper"
            borderRadius={10}
            minWidth={180}
            width={1}
            maxWidth={240}
            sx={{
              "&:hover": {
                bgcolor: "action.hover",
                cursor: "pointer",
              },
            }}
          >
            <Typography
              variant="caption"
              p={1}
              color="text.primary"
              fontWeight={300}
            >
              Fazer sugestão
            </Typography>
          </Box>
        </Box>

        <Box width={1}>
          <Grid container spacing={4} justifyContent="center">
            {dashboardCardsValues.map((card: IDashboardCardsTypes) => {
              return (
                <Grid item xs={3}>
                  <DashboardCard
                    key={card.id}
                    bgColor={card.bgColor}
                    image={card.image}
                    legend={card.legend}
                    count={card.value}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box width={1} display="flex" justifyContent="space-between">
          <TabsComponent value={activeTab} onChange={handleChangeTab} />

          {activeTab === 0 ? null : (
            <ButtonComponent
              color="primary"
              variant="contained"
              text={
                activeTab === 1
                  ? "Ver todos usuários"
                  : activeTab === 2
                  ? "Ver todos atendimentos"
                  : activeTab === 3
                  ? "Ver todas enquetes"
                  : null
              }
              disableElavation
            />
          )}
        </Box>

        <Box>
          {activeTab !== 0 ? (
            <CustomTable
              header={
                activeTab === 1
                  ? userTableHeader
                  : activeTab === 2
                  ? serviceTableHeader
                  : activeTab === 3
                  ? surveyTableHeader
                  : null
              }
              values={
                activeTab === 1
                  ? users
                  : activeTab === 2
                  ? services
                  : activeTab === 3
                  ? survey
                  : null
              }
            />
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
