import React, { useState } from "react";
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  Typography,
  Input,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import ButtonComponent from "./Button";

function CustomModal({ setState, open, title, formValues }: any) {
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

  const handleClose = () => setState(false);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
  };

  const onSubmit = (data: any) => {
    setState(false);
  };

  return (
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
          <Typography variant="h4">{title}</Typography>
          <Box p={2}>
            <Box component="form" onSubmit={onSubmit} py={2}>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                height={1}
              >
                {formValues.map((item: any) => {
                  if (item.type === "text") {
                    return (
                      <Box display="flex" flexDirection="column" width={1}>
                        <Typography variant="caption">{item.title}</Typography>
                        <Input
                          required
                          fullWidth
                          placeholder={item.placeholder}
                        />
                      </Box>
                    );
                  }

                  if (item.type === "answer") {
                    return (
                      <Box width={1}>
                        <Typography variant="caption">{item.title}</Typography>
                        <Box
                          display="flex"
                          flexDirection="column"
                          gap={1}
                          width="75%"
                        >
                          <Input required placeholder={item.placeholder} />
                          <Input required placeholder={item.placeholder} />
                          <Input placeholder="Opcional" />
                        </Box>
                      </Box>
                    );
                  }
                })}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 16,
                  }}
                >
                  <ButtonComponent
                    text="Criar enquete"
                    type="submit"
                    variant="contained"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CustomModal;
