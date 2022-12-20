import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";

import { surveyTableHeader } from "../../utils/TableHeader";
import SurveyComponent from "../../components/Survey";
import { createSurvey, getSurvey, getSurveyVotes } from "../../services/survey";
import ButtonComponent from "../../components/Button";
import CustomModal from "../../components/Modal";
import { surveyFormInputs } from "../../utils/ModalFormValues";

interface ISurveyType {
  survey_id: number;
  survey: string;
  survey_subject: string;
  votes: number;
  sended: boolean;
}

function SurveyManagement() {
  const [survey, setSurvey] = useState<ISurveyType[]>([]);
  const [surveyVotes, setSurveyVotes] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState<any>(null);
  const [openSurvey, setOpenSurvey] = useState(false);

  const requestSurvey = async () => {
    const fetchSurvey = await getSurvey();
    setSurvey(fetchSurvey);
  };

  useEffect(() => {
    requestSurvey();
  }, []);

  const handleSelectedSurvey = (survey: ISurveyType) => {
    const clickedSurvey = survey;

    if (clickedSurvey) {
      setSelectedSurvey(clickedSurvey);
      console.log(selectedSurvey);
    } else {
      console.log("Não entrou");
      return;
    }
  };

  const onSubmit = async (data: any) => {
    const { survey_text, survey_subject }: any = data;

    const surveyJson = {
      survey_text: survey_text,
      survey_subject: survey_subject,
    };

    await createSurvey(surveyJson);

    setOpenSurvey(false);
  };

  return (
    <Box display="flex" width={1} height={1} bgcolor="background.default">
      <Sidebar />
      <Box
        width={1}
        height={1}
        display="flex"
        flexDirection="column"
        px={4}
        py={2}
        gap={4}
      >
        <Box
          display="flex"
          width={1}
          height={40}
          justifyContent="space-between"
        >
          <Box
            bgcolor="background.paper"
            borderRadius={2.5}
            minWidth={180}
            width={1}
            maxWidth={240}
          >
            <Typography
              variant="h4"
              p={1}
              color="text.primary"
              sx={{ textTransform: "uppercase" }}
              align="center"
            >
              Enquetes
            </Typography>
          </Box>

          <Box>
            <ButtonComponent
              text="Criar enquete"
              variant="contained"
              onClick={() => setOpenSurvey(true)}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          width={1}
          height={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width="35%" height={1} border="1px solid #1b1e1f" borderTop="0">
            <CustomTable
              values={survey}
              header={surveyTableHeader}
              selectedSurvey={handleSelectedSurvey}
            />
          </Box>
          <Box
            width="60%"
            height={1}
            display="flex"
            flexDirection="column"
            border="1px solid #1b1e1f"
            borderTop="0"
          >
            <SurveyComponent survey={selectedSurvey} />
          </Box>

          <CustomModal
            setState={setOpenSurvey}
            open={openSurvey}
            title="Criar enquete"
            formValues={surveyFormInputs}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SurveyManagement;
