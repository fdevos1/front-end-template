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
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={40}
                    width={160}
                    border="1px solid #1b1e1f"
                  >
                    <Typography color="text.primary" variant="body2">
                      Sim
                    </Typography>
                  </Box>

                  <Box display="flex" flexDirection="column" gap={1} mt={1}>
                    {survey.survey_votes.map((item: any) => {
                      if (item.answer_text === "sim") {
                        return (
                          <Box
                            display="flex"
                            height={20}
                            justifyContent="center"
                            border="1px solid #242526"
                            borderRadius={1}
                          >
                            <Typography variant="body2" color="text.primary">
                              {item.user_id_vote}
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height={40}
                    width={160}
                    border="1px solid #1b1e1f"
                  >
                    <Typography color="text.primary" variant="body2">
                      Não
                    </Typography>
                  </Box>

                  <Box display="flex" flexDirection="column" gap={1} mt={1}>
                    {survey.survey_votes.map((item: any) => {
                      if (item.answer_text === "não") {
                        return (
                          <Box
                            display="flex"
                            height={20}
                            justifyContent="center"
                            border="1px solid #242526"
                            borderRadius={1}
                          >
                            <Typography variant="body2" color="text.primary">
                              {item.user_id_vote}
                            </Typography>
                          </Box>
                        );
                      }
                    })}
                  </Box>
                </Box>
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
