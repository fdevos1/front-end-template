import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { Container, Content } from "./styles";

import Sidebar from "../../components/Sidebar";
import CustomTable from "../../components/Table";

import { surveyTableHeader } from "../../utils/TableHeader";

function SurveyManagement() {
  const [survey, setSurvey] = useState<any[]>([]);

  const mockSurveyData = [
    {
      survey_id: 0,
      survey: "O grêmio vai sair campeão?",
      survey_subject: "Esporte",
      votes: 0,
      sended: false,
    },
    {
      survey_id: 1,
      survey: "Quantos graus faz hoje?",
      survey_subject: "Clima/tempo",
      votes: 0,
      sended: false,
    },
    {
      survey_id: 2,
      survey: "Quanto é 27+2?",
      survey_subject: "Matemática básica",
      votes: 9,
      sended: true,
    },
    {
      survey_id: 3,
      survey: "O que é, o que é, alguma coisa",
      survey_subject: "O que é, o que é",
      votes: 16,
      sended: true,
    },
    {
      survey_id: 4,
      survey: "Top 3 gols do Neymar?",
      survey_subject: "Esporte",
      votes: 89,
      sended: true,
    },
  ];

  const getSurvey = async () => {
    const fetchSurvey = mockSurveyData;
    setSurvey(fetchSurvey);
  };

  useEffect(() => {
    getSurvey();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Box display="flex" width={1} height={1} alignItems="center">
          <Box width="30%" height={1} borderRight="1px solid #1b1e1f">
            <CustomTable values={survey} header={surveyTableHeader} />\
          </Box>
        </Box>
      </Content>
    </Container>
  );
}

export default SurveyManagement;
