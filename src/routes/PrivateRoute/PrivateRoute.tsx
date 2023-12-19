import React from "react";
import useAuthSelectors from "../../redux/auth/authSelectors";
import { WELCOME_ROUTE } from "../../utils/constantes";
import { Navigate } from "react-router-dom";
import { PrivateRoutePropsType } from "./PrivateRouteType";

const PrivateRoute: React.FC<PrivateRoutePropsType> = ({
  children,
  redirectTo = WELCOME_ROUTE,
}) => {
  const { authenticated } = useAuthSelectors();

  return <>{authenticated ? children : <Navigate to={redirectTo} />}</>;
};

export default PrivateRoute;
