import React, { useState, useEffect } from "react";
import moment from "moment";

import {
  Select,
  SelectChangeEvent,
  Box,
  MenuItem,
  InputAdornment,
  Input,
} from "@mui/material";

import { Container, Content } from "./styles";

import SearchIcon from "@mui/icons-material/Search";

import { getUser } from "../../services/user";
import Sidebar from "../../components/Sidebar";
import { userColumns } from "./utils";
import CustomTable from "../../components/Table";

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

  const [filter, setFilter] = useState("");

  const fetchedRows: any = users.map((user: any) => {
    return {
      id: user.user_id,
      name: user.name,
      cellphone: user.cellphone,
      created_at: moment(user.created_at).format("DD/MM/YYYY"),
    };
  });

  const handleChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
  };

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
          <Box sx={{ display: "flex", height: 40, gap: 4 }}>
            <Box
              sx={{
                display: "flex",
                width: "12rem",
                height: 1,
              }}
            >
              <Select
                value={filter}
                onChange={handleChange}
                displayEmpty
                sx={{
                  width: 1,
                  height: 1,
                  textAlign: "center",
                }}
              >
                <MenuItem value="">
                  <em>Data de criação</em>
                </MenuItem>
              </Select>
            </Box>

            <Box sx={{ width: "25rem", maxWidth: 500, height: 1 }}>
              <Input
                placeholder="Procurar um usuário"
                disableUnderline
                id="search-input"
                sx={{
                  width: 1,
                  height: 1,
                  padding: 1,
                  textAlign: "center",
                  border: 2,
                  borderRadius: 1,
                  borderColor: "#E4E4E4",
                  bgcolor: "rgba(217, 217, 217, 0.15)",
                  color: "#6c6c6c",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: 1, height: 1 }}>
          <CustomTable
            rows={fetchedRows}
            columns={userColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            checkboxSelection
          />
        </Box>
      </Content>
    </Container>
  );
}

export default UsersTable;
