import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router";
import Loading from "../Loading";

const ProtectedRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  // ❌ Om inte loading och user saknas → redirect
  if (!loading && !user) {
    return <Navigate to="/logga-in" replace />;
  }

  // ✔️ Alltid rendera Outlet (layout + sidan)
  // och lägg loadern ovanpå vid behov
  return (
    <>
      {loading && <Loading show={true} />}
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
