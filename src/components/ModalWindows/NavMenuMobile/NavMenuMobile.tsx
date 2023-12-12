import React, { MouseEvent, useEffect } from "react";
import UserNav from "../../UserNav/UserNav";
import scss from "./NavMenuMobile.module.scss";
import Icon from "../../Icon/Icon";
import { ModalMobileNavProps } from "../../../types/IconProps";
import LogoutBtn from "../../LogoutBtn/LogoutBtn";

const NavMenuMobile: React.FC<ModalMobileNavProps> = ({
  handleModalToggle,
  isModalOpen,
}) => {
  useEffect(() => {
    const handleModalCloseKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalToggle();
      }
    };
    document.addEventListener("keydown", handleModalCloseKey);

    return () => {
      document.removeEventListener("keydown", handleModalCloseKey);
    };
  }, [handleModalToggle]);

  const handleCloseBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return (
    <div
      className={`${scss.modalBackdrop} ${!isModalOpen && `${scss.isHidden}`}`}
      onClick={handleCloseBackdrop}
    >
      <div className={scss.mobileNavContainer}>
        <Icon
          idIcon="Close"
          className={scss.iconClose}
          onClick={handleModalToggle}
        />
        <div>
          <UserNav />
        </div>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default NavMenuMobile;
// ${ !isModalOpen && `${scss.isHidden}` }
