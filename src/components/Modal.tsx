import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  Typography,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import moment from "moment";
import "moment/locale/pt";

import ButtonComponent from "./Button";

function CustomModal({ setState, open, title, formValues, onSubmit }: any) {
  moment.locale("pt-br");

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

  const StyledTextField = styled(TextField)(({ theme }) => ({
    "&": {
      backgroundColor: "#3A3B3C",
      borderRadius: 4,
    },
  }));

  const {
    register,
    handleSubmit,
    control,
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
          <Box height="5%">
            <Typography variant="h4" color="text.primary">
              {title}
            </Typography>
          </Box>

          <Box height="90%" p={2}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} py={2}>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                height={1}
              >
                {formValues.map((item: any) => {
                  return (
                    <>
                      {item.type === "text" ? (
                        <Box display="flex" flexDirection="column" width={1}>
                          <StyledTextField
                            required
                            fullWidth
                            label={item.title}
                            InputLabelProps={{ color: "secondary" }}
                            inputProps={register(item.name)}
                            variant="filled"
                          />
                        </Box>
                      ) : item.type === "date_picker" ? (
                        <Box>
                          <LocalizationProvider
                            dateAdapter={AdapterMoment}
                            adapterLocale="pt-br"
                          >
                            <Controller
                              control={control}
                              name={item.name}
                              render={({
                                field: { ref, onBlur, ...field },
                                fieldState,
                              }) => (
                                <DateTimePicker
                                  {...field}
                                  inputRef={ref}
                                  label="Escolha o horário para envio"
                                  ampm={false}
                                  renderInput={(inputProps) => (
                                    <StyledTextField
                                      {...inputProps}
                                      onBlur={onBlur}
                                      name={item.name}
                                    />
                                  )}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      ) : null}
                    </>
                  );
                })}
                <Box
                  height="5%"
                  sx={{
                    position: "absolute",
                    bottom: 16,
                  }}
                >
                  <ButtonComponent
                    text="Criar"
                    type="submit"
                    variant="contained"
                    color="secondary"
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
