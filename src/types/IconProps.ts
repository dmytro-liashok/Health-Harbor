import { ReactNode } from "react";

export interface IconProps {
  idIcon: string;
  className: string;
  onClick?: () => void;
}

export interface ContainerProps {
  children: ReactNode;
}
