import React, { useContext, useState } from "react";

import { Box, IconButton, Typography, Divider } from "@mui/material";

import { Container } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleIcon from "@mui/icons-material/Article";

import { AuthContext } from "../../context/auth";
import { IButtonsSidebar } from "../../types/SidebarTypes";

import Logo from "../../assets/images/logo.png";

function Sidebar() {
  const { signOut }: any = useContext(AuthContext);
  const [open, setOpen] = useState(false);

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
    {
      text: "Gerenciamento de grupos",
      id: 3,
      image: <GroupsIcon />,
      url: "/group-management",
    },
    {
      text: "Enquetes",
      id: 4,
      image: <ArticleIcon />,
      url: "/survey",
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
          className={`${open ? "open" : "closed"}`}
          borderRight="1px solid #1b1e1f"
          p={1}
          onMouseEnter={() => setTimeout(() => setOpen(true), 100)}
          onMouseLeave={() => setOpen(false)}
        >
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              width={open ? "17rem" : "5rem"}
              height={30}
              className="header-box"
            >
              {open ? (
                <Box height={1}>
                  <img src={Logo} alt="logo" className="logo" />
                </Box>
              ) : (
                <Box height={1}>
                  <img src={Logo} alt="logo" className="logo" />
                </Box>
              )}
            </Box>
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

              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                position="fixed"
                mt={2}
                className={open ? "opened-div" : "closed-div"}
              >
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
                                  borderRadius: "0.25rem",
                                },
                              },
                            ]
                          : [
                              {
                                "&:hover": {
                                  cursor: "pointer",
                                  backgroundColor: "#232324",
                                  borderRadius: "0.25rem",
                                  color: "#f0f0f0",
                                },
                              },
                            ]
                      }
                    >
                      {button.image}

                      <Typography
                        className={open ? "text-open" : "text-closed"}
                        variant="body2"
                      >
                        {button.text}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Divider color="#1B1E1F" />
          </Box>
          <Box alignSelf="center">
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
