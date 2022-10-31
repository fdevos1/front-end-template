import React, { useContext } from "react";

import { Box, IconButton, Typography, Divider } from "@mui/material";

import { Container } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

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

  const location = useLocation();
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
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems="center"
          p={1}
        >
          <Box display="flex" alignItems="center">
            <Typography className="pandorga">PANDORGA</Typography>
          </Box>

          <Box height={1} py={1}>
            <Divider color="#1B1E1F" />
            <Box
              display="flex"
              flexDirection="column"
              width={1}
              height={1}
              py={1}
            >
              <Typography variant="caption" color="#2C2E2F" marginX={2}>
                Menu
              </Typography>
              <Box display="flex" flexDirection="column" width={1} gap={2}>
                {buttonsSidebar.map((button: IButtonsSidebar) => {
                  return (
                    <Box
                      onClick={() => handleChangeRoute(button.url)}
                      display="flex"
                      width={1}
                      height={"3rem"}
                      alignItems={"center"}
                      gap={2}
                      p={2}
                      key={button.id}
                      whiteSpace={"nowrap"}
                      color={
                        location.pathname === button.url ? "white" : "#585A5C"
                      }
                      sx={
                        location.pathname === button.url
                          ? [
                              {
                                "&": {
                                  backgroundColor: "#1B1E1F",
                                  cursor: "pointer",
                                  borderRadius: "1rem",
                                },
                              },
                            ]
                          : [
                              {
                                "&:hover": {
                                  cursor: "pointer",
                                  backgroundColor: "#232324",
                                  borderRadius: "1rem",
                                  color: "#f0f0f0",
                                },
                              },
                            ]
                      }
                    >
                      {button.image}
                      <Typography variant="body2">{button.text}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Divider color="#1B1E1F" />
          </Box>
          <Box>
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
        </Box>
      </Container>
    </>
  );
}

export default Sidebar;
