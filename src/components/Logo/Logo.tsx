import Icon from "../Icon/Icon";
import scss from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
import { WELCOME_ROUTE } from "../../utils/constantes";
import React from "react";
import { iconLogoProps } from "../../types/IconProps";

const Logo: React.FC<iconLogoProps> = ({ className }) => {
  return (
    <NavLink to={WELCOME_ROUTE}>
      <div className={scss.logoWpap}>
        <Icon idIcon="icon-Logo" className={`${scss.logoIcon} ${className}`} />
        <p className={scss.logoTitle}>Health Harbor</p>
      </div>
    </NavLink>
  );
};

export default Logo;
