import { NavLink } from "react-router-dom";
import "./UserNav.scss";
import {
  DIARY_ROUTE,
  EXERCISES_ROUTE,
  PRODUCTS_ROUTE,
} from "../../utils/constantes";

const UserNav = () => {
  return (
    <nav className="nav">
      <NavLink to={DIARY_ROUTE} className="nav-link">
        Diary
      </NavLink>
      <NavLink to={PRODUCTS_ROUTE} className="nav-link">
        Products
      </NavLink>
      <NavLink to={EXERCISES_ROUTE} className="nav-link">
        Exercises
      </NavLink>
    </nav>
  );
};

export default UserNav;
