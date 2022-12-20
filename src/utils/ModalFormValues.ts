const surveyFormInputs = [
  {
    id: 0,
    type: "text",
    title: "Enquete",
    placeholder: "Insira a pergunta da enquete aqui",
    name: "survey_text",
  },
  {
    id: 1,
    type: "text",
    title: "Assunto",
    placeholder: "Insira o assunto da enquete aqui",
    name: "survey_subject",
  },
  {
    id: 2,
    type: "answer",
    title: "Respostas",
    placeholder: "Resposta da enquete",
    name: `answer_text`,
  },
  {
    id: 3,
    type: "date_picker",
    title: "Horário de envio",
    placeholder: "Horário de envio da enquete",
    name: "survey_send_hour",
  },
];

const messageServiceForm = [
  {
    id: 0,
    type: "text",
    title: "Mensagem de envio",
    placeholder: "Insira o que o bot enviará aos usuários",
    name: "text",
  },
];

export { surveyFormInputs, messageServiceForm };
