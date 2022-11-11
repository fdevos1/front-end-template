import React, { useState, useEffect } from "react";
import moment from "moment";

import { Box, InputAdornment } from "@mui/material";

import { Container, Content } from "./styles";

import SearchIcon from "@mui/icons-material/Search";

import { getUser } from "../../services/user";
import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table/Table";
import SearchbarComponent from "../../components/Searchbar";

function UsersTable() {
  const [users, setUsers] = useState([]);

  moment.locale("pt-br");

  const requestUsers = async () => {
    const fetchUsers = await getUser();
    setUsers(fetchUsers);
  };

  useEffect(() => {
    requestUsers();
  }, []);

  const tableHeader = [
    { text: "ID" },
    { text: "Nome" },
    { text: "Celular" },
    { text: "Criado em" },
    { text: "" },
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
          <CustomTable header={tableHeader} values={users} />
        </Box>
      </Content>
    </Container>
  );
}

export default UsersTable;
