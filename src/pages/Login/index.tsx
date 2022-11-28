import React, { useState, useContext } from "react";
import { Box, TextField, Typography } from "@mui/material";

import ButtonComponent from "../../components/Button";

import { AuthContext } from "../../context/auth";

function Login() {
  const { signIn }: any = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    signIn(email, password);
  };

  return (
    <Box
      width={1}
      height={1}
      display="flex"
      overflow="hidden"
      alignItems="center"
      bgcolor="background.default"
      p={1}
    >
      <Box
        display="flex"
        width="60%"
        height={1}
        bgcolor="background.paper"
        alignItems="center"
        justifyContent="center"
        borderRadius={0.5}
      >
        <Typography variant="h2" color="common.white">
          PANDORGA
        </Typography>
        <Typography variant="h3" color="common.white">
          TECH
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        width="40%"
        height={1}
        bgcolor="background.default"
        borderRadius={0.5}
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "#fff" }}>
            Olá, seja bem vindo
          </Typography>
          <Typography variant="caption" sx={{ color: "#fff" }}>
            Realize o login para ter acesso.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <TextField
                fullWidth
                type="email"
                name="email"
                label="E-mail"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                sx={{
                  input: { color: "#e4e6eb" },
                  label: { color: "#b0b3b8 " },
                  fieldset: { borderColor: "#b0b3b8" },
                }}
              />
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Senha"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                sx={{
                  input: { color: "#e4e6eb" },
                  label: { color: "#b0b3b8 " },
                  fieldset: { borderColor: "#b0b3b8" },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ButtonComponent
                fullWidth
                variant="contained"
                type="submit"
                text="Entrar"
                sx={{
                  backgroundColor: "#242526",
                  "&:hover": { backgroundColor: "#3a3b3c" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
