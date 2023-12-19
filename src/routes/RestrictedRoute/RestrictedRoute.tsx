import React from "react";
import { DIARY_ROUTE } from "../../utils/constantes";
import { RestrictedRoutePropsType } from "./RestrictedRouteType";
import useAuthSelectors from "../../redux/auth/authSelectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute: React.FC<RestrictedRoutePropsType> = ({
  children,
  redirectTo = DIARY_ROUTE,
}) => {
  const { authenticated } = useAuthSelectors();

  return <>{authenticated ? <Navigate to={redirectTo} /> : children}</>;
};

export default RestrictedRoute;
