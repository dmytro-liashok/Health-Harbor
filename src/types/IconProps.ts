import { ReactNode } from "react";

export interface IconProps {
  idIcon: string;
  className: string;
  onClick?: () => void;
}

export interface ContainerProps {
  children: ReactNode;
}

export interface ModalProps {
  children: ReactNode;
  handleModalToggle: () => void;
}

export interface ModalMobileNavProps {
  handleModalToggle: () => void;
  isModalOpen: boolean;
}

export interface iconLogoProps {
  className?: string;
}
