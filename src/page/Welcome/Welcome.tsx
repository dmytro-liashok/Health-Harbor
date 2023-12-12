import React from "react";
import { NavLink } from "react-router-dom";
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/constantes";

const Welcome = () => {
  return (
    <div>
      <NavLink to={SIGNUP_ROUTE}>Sign Up</NavLink>
      <NavLink to={SIGNIN_ROUTE}>Sign In</NavLink>
    </div>
  );
};

export default Welcome;
