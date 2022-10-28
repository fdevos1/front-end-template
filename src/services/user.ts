import { api } from "../api/api";

export const getUser = async () => {
  try {
    const response = await api.get("/users");

    return response.data;
  } catch (err) {
    return err;
  }
};
