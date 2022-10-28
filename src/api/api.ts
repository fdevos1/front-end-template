import axios from "axios";

const api = axios.create({
  baseURL: "https://crud-bot-canoas.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { api };
