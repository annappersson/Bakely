import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/logga-in" replace />;

  return <Outlet />; // <—— visar barnrutterna korrekt
};

export default ProtectedRoutes;
