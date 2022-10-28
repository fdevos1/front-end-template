import { api } from "../api/api";

export const getServices = async () => {
  try {
    const response = await api.get("/custom-service");

    return response.data;
  } catch (err) {
    return err;
  }
};
