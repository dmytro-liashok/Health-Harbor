import { NavLink } from "react-router-dom";
import scss from "./LogoutBtn.module.scss";
import Icon from "../Icon/Icon";

const LogoutBtn = () => {
  return (
    <NavLink to="" className={scss.logOutLink}>
      <p className={scss.logoutText}>Logout</p>
      <Icon idIcon="Log-out" className={scss.iconLogout} />
    </NavLink>
  );
};

export default LogoutBtn;
