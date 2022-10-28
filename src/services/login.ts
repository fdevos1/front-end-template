import { api } from "../api/api";

export const login = async (email: string, password: string) => {
  try {
    const user = await api.post("/login", { email, password });

    return user.data;
  } catch (err) {
    return err;
  }
};
