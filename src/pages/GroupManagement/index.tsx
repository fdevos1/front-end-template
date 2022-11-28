import { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";
import SearchbarComponent from "../../components/Searchbar";

import { Box, InputAdornment, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

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
    <Box
      display="flex"
      width={1}
      height={1}
      bgcolor="background.default"
      gap={1}
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
            Grupos
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
        <Box sx={{ width: 1, height: 1 }}>
          <CustomTable header={tableHeader} values={groups} />
        </Box>
      </Box>
    </Box>
  );
}

export default GroupManagement;
