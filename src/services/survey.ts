import { api } from "../api/api";

export const createSurvey = async (data: any) => {
  try {
    const response = await api.post("/create-survey", data);

    return response.data;
  } catch (err) {
    return err;
  }
};

export const getLastSurvey = async () => {
  try {
    const response = await api.get("/last-survey");

    return response.data;
  } catch (err) {
    return err;
  }
};

export const getSurvey = async () => {
  try {
    const response = await api.get("/get-survey");

    return response.data;
  } catch (err) {
    return err;
  }
};

export const createSurveyAnswer = async (data: any) => {
  try {
    const response = await api.post("/create-survey-answer", data);

    console.log(response);

    return response.data;
  } catch (err) {
    return err;
  }
};

export const getSurveyVotes = async (surveyId: string) => {
  try {
    const response = await api.get(`/get-survey-answer&survey=${surveyId}`);

    return response.data;
  } catch (err) {
    return err;
  }
};
