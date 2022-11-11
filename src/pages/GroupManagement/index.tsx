import React, { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";
import SearchbarComponent from "../../components/Searchbar";

import { Box, InputAdornment } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { Container, Content } from "./styles";

import { getGroups } from "../../services/groups";

function GroupManagement() {
  const [groups, setGroups] = useState([]);

  const requestGroups = async () => {
    const fetchGroups = await getGroups();
    setGroups(fetchGroups);
  };

  useEffect(() => {
    requestGroups();
  }, []);

  const tableHeader = [
    { text: "ID" },
    { text: "Nome do grupo" },
    { text: "Assunto do grupo" },
    { text: "Status do grupo" },
  ];

  return (
    <Container>
      <Sidebar />
      <Content>
        <Box
          sx={{
            display: "flex",
            px: 4,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", height: 64, gap: 4 }}>
            <Box sx={{ width: "25rem", maxWidth: 500, height: 1 }}>
              <SearchbarComponent
                label="Procurar usuário"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: 1, height: 1 }}>
          <CustomTable header={tableHeader} values={groups} />
        </Box>
      </Content>
    </Container>
  );
}

export default GroupManagement;
