import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import scss from "./UserNav.module.scss";
import {
  DIARY_ROUTE,
  EXERCISES_ROUTE,
  PRODUCTS_ROUTE,
} from "../../utils/constantes";

const UserNav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={scss.navLinkWrap}>
        <NavLink
          to={DIARY_ROUTE}
          className={`${scss.navLink} ${
            pathname === DIARY_ROUTE && scss.activeLink
          }`}
        >
          Diary
        </NavLink>
        <NavLink
          to={PRODUCTS_ROUTE}
          className={`${scss.navLink} ${
            pathname === PRODUCTS_ROUTE && scss.activeLink
          }`}
        >
          Products
        </NavLink>
        <NavLink
          to={EXERCISES_ROUTE}
          className={`${scss.navLink} ${
            pathname === EXERCISES_ROUTE && scss.activeLink
          }`}
        >
          Exercises
        </NavLink>
      </div>
    </>
  );
};

export default UserNav;
