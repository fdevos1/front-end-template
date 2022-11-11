import React, { useState, useEffect } from "react";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Container, Content } from "./styles";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";
import SearchbarComponent from "../../components/Searchbar";

import { userTableHeader } from "../../utils/TableHeader";

import { getUser } from "../../services/user";

function UsersTable() {
  const [users, setUsers] = useState([]);

  const requestUsers = async () => {
    const fetchUsers = await getUser();
    setUsers(fetchUsers);
  };

  useEffect(() => {
    requestUsers();
  }, []);

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
          <CustomTable header={userTableHeader} values={users} />
        </Box>
      </Content>
    </Container>
  );
}

export default UsersTable;
