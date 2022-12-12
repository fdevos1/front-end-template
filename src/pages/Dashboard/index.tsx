import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import { SupervisorAccount, ScreenSearchDesktop } from "@mui/icons-material";

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

import {
  messageServiceForm,
  surveyFormInputs,
} from "../../utils/ModalFormValues";
import DashboardCard from "../../components/DashboardCard";
import { IDashboardCardsTypes } from "../../types/DashboardTypes";
import TabsComponent from "../../components/Tabs";
import moment from "moment";
import MenuComponent from "../../components/Menu";

function Dashboard() {
  const [services, setServices] = useState<IServiceTypes[]>([]);
  const [users, setUsers] = useState<IUserTypes[]>([]);
  const [survey, setSurvey] = useState<any[]>([]);
  const [openSurvey, setOpenSurvey] = useState(false);
  const [openMessageService, setOpenMessageService] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const openMenu = Boolean(anchorEl);

  const handleMenuItemValue = (value: string) => {
    if (value === "disparo") {
      setOpenMessageService(true);
    }

    if (value === "suporte") {
      return openInNewTab(
        "https://wa.me/555180105521?text=Olá,%20estou%20com%20dúvida%20no%20sistema"
      );
    }
  };

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const usersCreatedToday = users.filter(
    (user) =>
      moment(user.user_created_at).format("DD/MM/YYYY") ===
      moment().format("DD/MM/YYYY")
  );

  const servicesCreatedToday = services.filter(
    (service) =>
      moment(service.created_at).format("DD/MM/YYYY") ===
      moment().format("DD/MM/YYYY")
  );

  const values = [
    {
      id: 0,
      image: <SupervisorAccount />,
      bgColor: "#C2E4B2",
      legend: "Cadastrados hoje",
      value: `${usersCreatedToday.length} usuários`,
    },
    {
      id: 1,
      image: <SupervisorAccount />,
      bgColor: "#B2C9E4",
      legend: "No banco de dados",
      value: `${users.length} usuários`,
    },
    {
      id: 2,
      image: <ScreenSearchDesktop />,
      bgColor: "#E3E4B2",
      legend: "Feitos hoje",
      value: `${servicesCreatedToday.length} atendimentos`,
    },
    {
      id: 3,
      image: <ScreenSearchDesktop />,
      bgColor: "#D1B2E4",
      legend: "Até hoje",
      value: `${services.length} atendimentos`,
    },
  ];

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

  const submitMessageService = (data: any) => {
    setOpenMessageService(false);

    console.log(data);
  };

  const onSubmit = async (data: any) => {
    const { survey_text, survey_subject }: any = data;

    const surveyJson = {
      survey_text: survey_text,
      survey_subject: survey_subject,
    };

    await createSurvey(surveyJson);

    let lastSurveyCreated: ISurveyType | null = await getLastSurvey();

    if (lastSurveyCreated) {
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

      await createSurveyAnswer(answerList);
    }

    lastSurveyCreated = null;
    setOpenSurvey(false);
  };

  const menuItemValues = [
    {
      name: "disparo",
      text: "Configurar disparo de mensagem",
    },
    {
      name: "suporte",
      text: "Suporte",
    },
  ];

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
            {values.map((card: IDashboardCardsTypes) => {
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
                onClick={() => setOpenSurvey(true)}
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
            setState={setOpenSurvey}
            open={openSurvey}
            title="Criar enquete"
            formValues={surveyFormInputs}
            onSubmit={onSubmit}
          />

          <CustomModal
            open={openMessageService}
            setOpen={setOpenMessageService}
            title="Configurar disparo"
            formValues={messageServiceForm}
            onSubmit={submitMessageService}
          />
        </Box>

        <Box position="absolute" bottom={10} right={15}>
          <ButtonComponent
            onClick={handleMenuClick}
            color="primary"
            variant="contained"
            text="Mais opções"
          />

          <MenuComponent
            anchorEl={anchorEl}
            openMenu={openMenu}
            handleMenuClose={handleMenuClose}
            menuItemValues={menuItemValues}
            setAnchorEl={setAnchorEl}
            handleValue={handleMenuItemValue}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
