import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./LogoutBtn.module.scss";
import Icon from "../Icon/Icon";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { authLogOut } from "../../redux/auth/authOperation";

const LogoutBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(authLogOut());
  };

  return (
    <NavLink to="" className={scss.logOutLink} onClick={handleLogOut}>
      <p className={scss.logoutText}>Logout</p>
      <Icon idIcon="Log-out" className={scss.iconLogout} />
    </NavLink>
  );
};

export default LogoutBtn;
