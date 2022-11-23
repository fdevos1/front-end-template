import { SupervisorAccount, ScreenSearchDesktop } from "@mui/icons-material";

const dashboardCardsValues = [
  {
    id: 0,
    image: <SupervisorAccount />,
    bgColor: "#C2E4B2",
    legend: "Cadastrados hoje",
    value: "3 usuários novos",
  },
  {
    id: 1,
    image: <SupervisorAccount />,
    bgColor: "#B2C9E4",
    legend: "No banco de dados",
    value: "70 usuários",
  },
  {
    id: 2,
    image: <ScreenSearchDesktop />,
    bgColor: "#E3E4B2",
    legend: "Feitos hoje",
    value: "8 atendimentos",
  },
  {
    id: 3,
    image: <ScreenSearchDesktop />,
    bgColor: "#D1B2E4",
    legend: "Até hoje",
    value: "82 atendimentos",
  },
];

export { dashboardCardsValues };
