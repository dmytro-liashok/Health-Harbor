import React from "react";
import Icon from "../Icon/Icon";
import "./UserBar.scss";
import { NavLink } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/constantes";

const UserBar = () => {
  return (
    <>
      <NavLink to={PROFILE_ROUTE}>
        <Icon idIcon="icon-settings" className="icon-settings" />
      </NavLink>
      <div className="user-avatar">
        <Icon idIcon="Gridicons_user" className="icon-settings" />
      </div>
    </>
  );
};

export default UserBar;
