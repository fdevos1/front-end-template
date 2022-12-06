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
    const { survey_text, survey_subject }: any = data;

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
          answer_text: "Sim",
        },
        {
          id_from_survey: lastSurveyCreated.survey_id,
          answer_text: "Não",
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
            borderRadius={2.5}
            minWidth={180}
            width={1}
            maxWidth={240}
          >
            <Typography
              variant="h4"
              p={1}
              color="text.primary"
              sx={{ textTransform: "uppercase" }}
              align="center"
            >
              Dashboard
            </Typography>
          </Box>

          <Box
            bgcolor="background.paper"
            borderRadius={10}
            minWidth={180}
            width={1}
            maxWidth={240}
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
                cursor: "pointer",
              },
            }}
          >
            <Typography
              variant="h4"
              p={1}
              color="text.primary"
              sx={{ textTransform: "uppercase", fontWeight: 300 }}
              align="center"
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

          <Box display="flex" gap={1}>
            {activeTab === 3 ? (
              <ButtonComponent
                color="primary"
                variant="contained"
                onClick={() => setOpen(true)}
                text="Criar enquete"
                disableElevation
              />
            ) : (
              <></>
            )}

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
                onClick={
                  activeTab === 1
                    ? () => navigate("/users")
                    : activeTab === 2
                    ? () => navigate("/services")
                    : activeTab === 3
                    ? () => navigate("/survey")
                    : null
                }
                disableElavation
              />
            )}
          </Box>
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

          <CustomModal
            setState={setOpen}
            open={open}
            title="Criar enquete"
            formValues={surveyFormInputs}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
