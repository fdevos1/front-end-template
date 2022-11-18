export interface ISurveyType {
  survey_id: number;
  survey_text: string;
  survey_subject: string;
  survey_sended: boolean;
  survey_sended_hour: Date;
  survey_created_at: Date;
  survey_votes?: ISurveyAnswerType[];
}

export interface ISurveyAnswerType {
  answer_id: number;
  answer_text: string;
  answer_user?: any[];
  id_from_survey: number;
}
