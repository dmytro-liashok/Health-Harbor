import React, { MouseEvent, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../../types/IconProps";
import scss from "./BasicModalWindow.module.scss";
import Icon from "../../Icon/Icon";

const modalPortal = document.getElementById("modal-portal");

const BasicModalWindow: React.FC<ModalProps> = ({
  children,
  handleModalToggle,
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

  if (!modalPortal) return null;

  return ReactDOM.createPortal(
    <div className={scss.modalBackdrop} onClick={handleCloseBackdrop}>
      <div className={scss.modalContent}>
        {children}
        <Icon
          idIcon="Close"
          className={scss.iconClose}
          onClick={handleModalToggle}
        />
      </div>
    </div>,
    modalPortal
  );
};

export default BasicModalWindow;
