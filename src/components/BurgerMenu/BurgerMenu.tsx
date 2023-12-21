import React, { useState } from "react";
import Icon from "../Icon/Icon";
import scss from "./BurgerMenu.module.scss";
import NavMenuMobile from "../ModalWindows/NavMenuMobile/NavMenuMobile";

const BurgerMenu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(() => !isModalOpen);
  };

  return (
    <>
      <Icon
        idIcon="Menu"
        className={scss.iconBurgerMenu}
        onClick={handleModalToggle}
      />
      <NavMenuMobile
        handleModalToggle={handleModalToggle}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default BurgerMenu;
