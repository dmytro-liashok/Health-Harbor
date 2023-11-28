import React from "react";
import Icon from "../Icon/Icon";
import "./Logo.scss";
import { NavLink } from "react-router-dom";
import { WELCOME_ROUTE } from "../../utils/constantes";

const Logo = () => {
  return (
    <NavLink to={WELCOME_ROUTE}>
      <div className="logo-wrap">
        <Icon idIcon="icon-Logo" className="logo-icon" />
        <p className="logo-title">Power Pulse</p>
      </div>
    </NavLink>
  );
};

export default Logo;
