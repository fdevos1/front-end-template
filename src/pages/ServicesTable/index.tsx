import { useState, useEffect } from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";
import SearchbarComponent from "../../components/Searchbar";

import { getServices } from "../../services/services";

import { serviceTableHeader } from "../../utils/TableHeader";

function ServiceTable() {
  const [services, setServices] = useState([]);

  const requestServices = async () => {
    const fetchServices = await getServices();
    setServices(fetchServices);
  };

  useEffect(() => {
    requestServices();
  }, []);

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
            Atendimentos
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
        <Box sx={{ width: 1, height: 1, overflow: "auto" }}>
          <CustomTable header={serviceTableHeader} values={services} />
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceTable;
