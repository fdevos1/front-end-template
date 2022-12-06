import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";

import { surveyTableHeader } from "../../utils/TableHeader";
import SurveyComponent from "../../components/Survey";
import { getSurvey } from "../../services/survey";

interface ISurveyType {
  survey_id: number;
  survey: string;
  survey_subject: string;
  votes: number;
  sended: boolean;
}

function SurveyManagement() {
  const [survey, setSurvey] = useState<ISurveyType[]>([]);
  const [selectedSurvey, setSelectedSurvey] = useState<any>(null);

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
        </Box>
      </Box>
    </Box>
  );
}

export default SurveyManagement;
