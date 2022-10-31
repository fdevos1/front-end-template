import { api } from "../api/api";

export const getServices = async () => {
  try {
    const response = await api.get("/custom-service");

    console.log(response.data);

    return response.data;
  } catch (err) {
    return err;
  }
};
