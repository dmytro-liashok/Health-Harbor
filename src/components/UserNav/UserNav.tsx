import { NavLink } from "react-router-dom";
import scss from "./UserNav.module.scss";
import {
  DIARY_ROUTE,
  EXERCISES_ROUTE,
  PRODUCTS_ROUTE,
} from "../../utils/constantes";

const UserNav = () => {
  return (
    <>
      <div className={scss.navLinkWrap}>
        <NavLink to={DIARY_ROUTE} className={scss.navLink}>
          Diary
        </NavLink>
        <NavLink to={PRODUCTS_ROUTE} className={scss.navLink}>
          Products
        </NavLink>
        <NavLink to={EXERCISES_ROUTE} className={scss.navLink}>
          Exercises
        </NavLink>
      </div>
    </>
  );
};

export default UserNav;
