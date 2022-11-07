import axios from "axios";

const api = axios.create({
  baseURL: "https://crud-pandorga.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { api };
