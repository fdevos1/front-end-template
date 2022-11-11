import React, { useState, useEffect } from "react";
import moment from "moment";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table/Table";
import SearchbarComponent from "../../components/Searchbar";

import { Box, InputAdornment } from "@mui/material";

import { Container, Content } from "./styles";

import SearchIcon from "@mui/icons-material/Search";

import { getServices } from "../../services/services";

function ServiceTable() {
  const [services, setServices] = useState([]);

  moment.locale("pt-br");

  const requestServices = async () => {
    const fetchServices = await getServices();
    setServices(fetchServices);
  };

  useEffect(() => {
    requestServices();
  }, []);

  const tableHeader = [
    { text: "ID" },
    { text: "ID do usuário" },
    { text: "Criado em" },
    { text: "Finalizado em" },
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
        <Box sx={{ width: 1, height: 1, overflow: "auto" }}>
          <CustomTable header={tableHeader} values={services} />
        </Box>
      </Content>
    </Container>
  );
}

export default ServiceTable;
