import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import scss from "./NotFound.module.scss";
import { DIARY_ROUTE } from "../../utils/constantes";

const NotFound = () => {
  return (
      <div className={scss.infoWrapperNotFound}>
        <div className={scss.infoNotFound}>
          <Logo className={scss.logoNotFound} />
          <div className={scss.infoDescriptionNotFound}>
            <h1 className={scss.titleNotFound}>404</h1>
            <p className={scss.textNotFound}>
              Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
            </p>
            <NavLink to={DIARY_ROUTE} className={scss.linkNotFound}>
              Go Home
            </NavLink>
          </div>
        </div>
        <div className={scss.imgNotFound}></div>
      </div>

  );
};

export default NotFound;
