import React, { useState, useEffect } from "react";
import moment from "moment";

import CustomTable from "../../components/Table";

import { serviceColumns } from "./utils";

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

import { getServices } from "../../services/services";
import Sidebar from "../../components/Sidebar";

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

  const [filter, setFilter] = useState("");

  const fetchedRows: any = services.map((service: any) => {
    return {
      id: service.id,
      user_id: service.u_id,
      created_at: moment(service.created_at).format("DD/MM/YYYY"),
      finished_at: service.finished_at
        ? moment(service.finished_at).format("DD/MM/YYYY")
        : "Não finalizado",
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
            columns={serviceColumns}
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

export default ServiceTable;
