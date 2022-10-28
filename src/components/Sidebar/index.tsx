import React, { useContext } from "react";

import { Box, IconButton, Typography } from "@mui/material";

import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";

import { AuthContext } from "../../context/auth";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

interface IButtonsSidebar {
  text: string;
  id: number;
  image: JSX.Element;
  url: string;
}

function Sidebar() {
  const { signOut }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
  };

  const buttonsSidebar = [
    { text: "Dashboard", id: 0, image: <DashboardIcon />, url: "/dashboard" },
    {
      text: "Tabela de usuários",
      id: 1,
      image: <SupervisorAccountIcon />,
      url: "/users",
    },
    {
      text: "Tabela de atendimentos",
      id: 2,
      image: <ScreenSearchDesktopIcon />,
      url: "/services",
    },
  ];

  const handleChangeRoute = (url: string) => {
    navigate(url);
  };

  return (
    <>
      <Container>
        <Box
          height={1}
          width={1}
          display="flex"
          justifyContent={"space-between"}
          px={2}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h5" className="pandorga">
              PANDORGA
            </Typography>
          </Box>

          <Box
            display="flex"
            width={"50%"}
            height={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {buttonsSidebar.map((button: IButtonsSidebar) => {
              return (
                <Box
                  onClick={() => handleChangeRoute(button.url)}
                  display="flex"
                  width={"33%"}
                  height={"80%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                  key={button.id}
                  color="white"
                  sx={[
                    {
                      "&:hover": {
                        backgroundColor: "#f3f3f3",
                        cursor: "pointer",
                        color: "black",
                        borderRadius: "1rem",
                      },
                    },
                  ]}
                >
                  {button.image}
                  <Typography variant="button">{button.text}</Typography>
                </Box>
              );
            })}
          </Box>

          <Box>
            <IconButton
              onClick={handleLogout}
              sx={[
                {
                  "&:hover": {
                    backgroundColor: "#f3f3f3",
                  },
                },
              ]}
            >
              <LogoutIcon
                htmlColor="white"
                sx={[
                  {
                    "&:hover": {
                      color: "black",
                    },
                  },
                ]}
              />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Sidebar;
