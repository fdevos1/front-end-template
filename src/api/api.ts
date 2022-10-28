import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { api };
