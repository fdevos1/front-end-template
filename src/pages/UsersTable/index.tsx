import { useState, useEffect } from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
    <Box
      display="flex"
      width={1}
      height={1}
      gap={1}
      bgcolor="background.default"
    >
      <Sidebar />
      <Box
        display="flex"
        flexDirection="column"
        width={1}
        height={1}
        px={4}
        py={2}
        gap={2}
      >
        <Box
          bgcolor="background.paper"
          borderRadius={2.5}
          minWidth={180}
          width={1}
          maxWidth={280}
        >
          <Typography
            variant="h4"
            p={1}
            color="text.primary"
            sx={{ textTransform: "uppercase" }}
            align="center"
            noWrap
          >
            Usuários
          </Typography>
        </Box>
        <Box
          display="flex"
          px={0.5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" gap={4}>
            <Box width="25rem" maxWidth={500} height={1}>
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
        <Box width={1} height={1}>
          <CustomTable header={userTableHeader} values={users} />
        </Box>
      </Box>
    </Box>
  );
}

export default UsersTable;
