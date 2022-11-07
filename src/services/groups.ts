import { api } from "../api/api";

export const getGroups = async () => {
  try {
    const response = await api.get("/get-group");

    return response.data;
  } catch (err) {
    return err;
  }
};

export const createGroup = async (data: any) => {
  try {
    const response = await api.post("/create-group", data);

    return response.data;
  } catch (err) {
    return err;
  }
};
