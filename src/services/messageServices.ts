import { api } from "../api/api";

export const getMessageService = async () => {
  try {
    const response = await api.get("/get-message-service");

    return response.data;
  } catch (err) {
    return err;
  }
};

export const createMessageService = async (data: any) => {
  try {
    const response = await api.post("/create-message-service", data);

    return response.data;
  } catch (err) {
    return err;
  }
};
