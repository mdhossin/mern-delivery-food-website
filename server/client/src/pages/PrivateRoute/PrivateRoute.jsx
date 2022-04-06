import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useSelector((state) => state.user);

  let location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (!currentUser?.email) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default PrivateRoute;
