import React from "react";
import { useForm } from "react-hook-form";
import { Box, Modal, Fade, Backdrop, Typography, Input } from "@mui/material";

import ButtonComponent from "./Button";

function CustomModal({ setState, open, title, formValues, onSubmit }: any) {
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClose = () => setState(false);

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
            <Box component="form" onSubmit={handleSubmit(onSubmit)} py={2}>
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                justifyContent="center"
                height={1}
              >
                {formValues.map((item: any) => {
                  return (
                    <>
                      {item.type === "text" ? (
                        <Box display="flex" flexDirection="column" width={1}>
                          <Typography variant="caption">
                            {item.title}
                          </Typography>
                          <Input
                            required
                            fullWidth
                            placeholder={item.placeholder}
                            inputProps={register(item.name)}
                          />
                        </Box>
                      ) : item.type === "answer" ? (
                        <Box width={1}>
                          <Typography variant="caption">
                            {item.title}
                          </Typography>
                          <Box
                            display="flex"
                            flexDirection="column"
                            gap={1}
                            width="75%"
                          >
                            <Input
                              inputProps={register(`${item.name}`)}
                              required
                              placeholder={item.placeholder}
                            />
                            <Input
                              inputProps={register(`${item.name}_2`)}
                              required
                              placeholder={item.placeholder}
                            />
                            <Input
                              inputProps={register(`${item.name}_3`)}
                              placeholder="Opcional"
                            />
                          </Box>
                        </Box>
                      ) : null}
                    </>
                  );
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
