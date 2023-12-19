import React from "react";
import { NavLink } from "react-router-dom";
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/constantes";
import scss from "./Welcome.module.scss";
import Icon from "../../components/Icon/Icon";

const Welcome: React.FC = () => {
  return (
    <div className={scss.welcomeSection}>
      <h1 className={scss.title}>
        Transforming your{" "}
        <span className={scss.bodyTitle}>
          body
          <Icon className={scss.iconLine} idIcon="icon-line" />
        </span>{" "}
        shape with Power Pulse
      </h1>
      <div className={scss.navWrap}>
        <NavLink
          to={SIGNUP_ROUTE}
          className={`${scss.navLink} ${scss.signUpLink}`}
        >
          Sign Up
        </NavLink>
        <NavLink
          to={SIGNIN_ROUTE}
          className={`${scss.navLink} ${scss.signInLink}`}
        >
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
