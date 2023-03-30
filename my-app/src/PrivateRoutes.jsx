import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

export const PrivateRoute = ({ path, ...props }) => {
  const { user } = useContext(UserContext);

  return user ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
