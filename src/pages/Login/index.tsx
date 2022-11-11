import React, { useState, useContext } from "react";
import { Box, TextField, Typography } from "@mui/material";

import { Container, Content, LoginSide } from "./styles";

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
    <Container>
      <Content>
        <p>PANDORGA</p>
        <p className="light">TECH</p>
      </Content>
      <LoginSide>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <Typography variant="h4">Olá, seja bem vindo</Typography>
          <Typography variant="caption" sx={{ color: "#8D8D8D" }}>
            Por favor realize o login para ter acesso ao sistema.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}
        >
          <form onSubmit={handleSubmit} className="form">
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
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ButtonComponent
                fullWidth
                variant="contained"
                type="submit"
                text="Entrar"
              />
            </Box>
          </form>
        </Box>
      </LoginSide>
    </Container>
  );
}

export default Login;
