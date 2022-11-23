import { Box, Typography, Divider } from "@mui/material";

function SurveyComponent({ survey }: any) {
  console.log(survey);

  return (
    <>
      {survey !== null ? (
        <>
          <Box
            display="flex"
            width={1}
            borderTop="1px solid #1b1e1f"
            borderBottom="1px solid #1b1e1f"
            py={1}
            pl={1}
          >
            <Typography variant="h4" color="white">
              {survey.survey_id}
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            width={1}
            height={1}
            p={2}
            gap={4}
          >
            <Box width={1} display="flex" justifyContent="space-between">
              <Box width="70%">
                <Typography variant="h6" color="#2C2E2F">
                  Enquete:
                </Typography>
                <Box
                  width={1}
                  border="1px solid #1b1e1f"
                  p={2}
                  borderRadius={2}
                >
                  <Typography variant="body2" color="white">
                    {survey.survey_text}
                  </Typography>
                </Box>
              </Box>

              <Box width="20%">
                <Typography variant="h6" color="#2C2E2F">
                  Assunto:
                </Typography>

                <Box
                  width={1}
                  border="1px solid #1b1e1f"
                  p={2}
                  borderRadius={2}
                >
                  <Typography variant="body2" color="white">
                    {survey.survey_subject}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box width={1} display="flex" flexDirection="column">
              <Typography variant="h6" color="#2C2E2F">
                Enviada:
              </Typography>

              <Box
                width={1}
                minWidth={150}
                maxWidth={250}
                border="1px solid #1b1e1f"
                p={2}
                borderRadius={2}
              >
                <Typography variant="body2" color="white">
                  {survey.sended === true ? "Enviada" : "Não enviada"}
                </Typography>
              </Box>
            </Box>

            <Box
              width={1}
              height={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography variant="h6" color="#2c2e2f">
                Votos:
              </Typography>

              <Box
                width={1}
                height={1}
                display="flex"
                justifyContent="space-around"
                py={1}
              >
                {survey.survey_votes.map((item: any) => {
                  return (
                    <Box
                      display="flex"
                      flexDirection="column"
                      width="25%"
                      height={1}
                    >
                      <Box
                        width={1}
                        height={40}
                        borderRadius="8px 8px 0 0"
                        border="2px solid #1b1e1f"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography variant="button" color="white">
                          {item.answer_text}
                        </Typography>
                      </Box>
                      <Box
                        width={1}
                        height={1}
                        border="1px solid #1b1e1f"
                        borderTop="0"
                        borderRadius="0 0 8px 8px"
                        textAlign="center"
                        gap={1}
                      >
                        <Box
                          width={1}
                          height={1}
                          maxHeight={40}
                          minHeight={32}
                          display="flex"
                          flexDirection="column"
                          justifyContent="space-evenly"
                        >
                          <Typography variant="body2" color="white">
                            Felipe Devos - 555180105521
                          </Typography>
                          <Divider
                            variant="middle"
                            sx={{ borderColor: "#1b1e1f" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box
            display="flex"
            width={1}
            borderTop="1px solid #1b1e1f"
            borderBottom="1px solid #1b1e1f"
            py={1}
            pl={1}
          >
            <Typography variant="h6" color="white">
              Selecione uma enquete ao lado
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}

export default SurveyComponent;
