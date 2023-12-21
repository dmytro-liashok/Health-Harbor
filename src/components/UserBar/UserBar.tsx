import React from "react";
import Icon from "../Icon/Icon";
import scss from "./UserBar.module.scss";
import { NavLink } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/constantes";

const UserBar: React.FC = () => {
  return (
    <>
      <NavLink to={PROFILE_ROUTE}>
        <Icon idIcon="icon-settings" className={scss.iconUserBar} />
      </NavLink>
      <div className={scss.userAvatar}>
        <Icon idIcon="Gridicons_user" className={scss.iconUserBar} />
      </div>
    </>
  );
};

export default UserBar;
