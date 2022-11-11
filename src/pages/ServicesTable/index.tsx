import React, { useState, useEffect } from "react";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Container, Content } from "./styles";

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
        <Box sx={{ width: 1, height: 1, overflow: "auto" }}>
          <CustomTable header={serviceTableHeader} values={services} />
        </Box>
      </Content>
    </Container>
  );
}

export default ServiceTable;
