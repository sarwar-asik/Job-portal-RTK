import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "../App.css";
import Loader from "../shared/Loader";

const PrivateRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const {
    isLoading,
    user: { email, role },
  } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }
  console.log(email,"**email**", role,"////", isLoading);
  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoutes;
