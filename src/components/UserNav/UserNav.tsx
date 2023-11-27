import { NavLink } from "react-router-dom";
import {
  DIARY_ROUTE,
  EXERCISES_ROUTE,
  PRODUCTS_ROUTE,
} from "../../utils/constantes";

const UserNav = () => {
  return (
    <>
      <NavLink to={DIARY_ROUTE}> Diary</NavLink>
      <NavLink to={PRODUCTS_ROUTE}> Products</NavLink>
      <NavLink to={EXERCISES_ROUTE}> Exercises</NavLink>
    </>
  );
};

export default UserNav;
