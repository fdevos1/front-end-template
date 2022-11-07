import React, { useContext } from "react";

import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";

import { AuthProvider, AuthContext } from "./context/auth";
import UsersTable from "./pages/UsersTable";
import ServiceTable from "./pages/ServicesTable";
import Dashboard from "./pages/Dashboard";
import GroupManagement from "./pages/GroupManagement";

function App() {
  const Private = ({ children }: any) => {
    const { authenticated, loading }: any = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <Private>
                <Dashboard />
              </Private>
            }
          />

          <Route
            path="/users"
            element={
              <Private>
                <UsersTable />
              </Private>
            }
          />

          <Route path="/services" element={<ServiceTable />} />

          <Route path="/group-management" element={<GroupManagement />} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
