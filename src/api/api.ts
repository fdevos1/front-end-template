import axios from "axios";

const api = axios.create({
  baseURL: "https://crudbottemplate-production.up.railway.app/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { api };
