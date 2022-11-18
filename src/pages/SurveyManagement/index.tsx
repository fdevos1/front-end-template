import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { Container, Content } from "./styles";

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
    <Container>
      <Sidebar />
      <Content>
        <Box display="flex" width={1} height={1} alignItems="center">
          <Box
            width="30%"
            height={1}
            borderRight="1px solid #1b1e1f"
            borderLeft="1px solid #1b1e1f"
          >
            <CustomTable
              values={survey}
              header={surveyTableHeader}
              selectedSurvey={handleSelectedSurvey}
            />
          </Box>
          <Box
            width="70%"
            height={1}
            display="flex"
            flexDirection="column"
            mt={4}
          >
            <SurveyComponent survey={selectedSurvey} />
          </Box>
        </Box>
      </Content>
    </Container>
  );
}

export default SurveyManagement;
