import React, { useState, useEffect } from "react";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";
import SearchbarComponent from "../../components/Searchbar";

import { useForm } from "react-hook-form";

import {
  Box,
  InputAdornment,
  Modal,
  Fade,
  Backdrop,
  Typography,
  Input,
  Select,
  MenuItem,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select";

import SearchIcon from "@mui/icons-material/Search";

import { Container, Content } from "./styles";

import { createGroup, getGroups } from "../../services/groups";
import ButtonComponent from "../../components/Button";

function GroupManagement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [groups, setGroups] = useState([]);
  const [open, setOpen] = useState(false);

  const [groupType, setGroupType] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);

    setGroupType(event.target.value);
  };

  const requestGroups = async () => {
    const fetchGroups = await getGroups();
    setGroups(fetchGroups);
  };

  const onSubmit = (data: any) => {
    createGroup(data);
    setOpen(false);
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

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 800,
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
  };

  const formFields = [
    {
      title: "Nome do grupo",
      placeholder: "Insira o nome do grupo",
      name: "group_name",
      type: "string",
    },
    {
      title: "Assunto do grupo",
      placeholder: "Insira o assunto do grupo",
      name: "subject",
      type: "string",
    },
    {
      title: "Tipo do grupo",
      placeholder: "Escolha o tipo do grupo",
      name: "type",
      type: "select",
    },
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

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography variant="h4">Criação de grupo</Typography>
              <Box p={2}>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} py={2}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    justifyContent="center"
                    height={1}
                  >
                    {formFields.map((item: any) => {
                      return (
                        <Box display="flex" flexDirection="column" gap={1}>
                          <Typography variant="caption">
                            {item.title}
                          </Typography>
                          {item.type === "string" ? (
                            <Input
                              sx={{ px: 1 }}
                              placeholder={item.placeholder}
                              {...register(item.name)}
                            />
                          ) : item.type === "select" ? (
                            <Select
                              value={groupType}
                              label="Tipo do grupo"
                              inputProps={register(item.name)}
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>Bairro</MenuItem>
                              <MenuItem value={2}>Outro tipo de grupo</MenuItem>
                            </Select>
                          ) : null}
                        </Box>
                      );
                    })}
                    <Box display="flex" width={1} justifyContent="center">
                      <ButtonComponent
                        type="submit"
                        text="Criar grupo"
                        variant="contained"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Content>
    </Container>
  );
}

export default GroupManagement;
