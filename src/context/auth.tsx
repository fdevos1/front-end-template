import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { login } from "../services/login";
import { api } from "../api/api";

interface IResponse {
  token: string;
  refreshToken: {
    id: string;
    expiresIn: number;
    u_id: number;
  };
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    const response: IResponse = await login(email, password);
    console.log(response);

    const loggedUser = response.refreshToken.u_id;
    const token = response.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);

    navigate("/dashboard");
  };

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
