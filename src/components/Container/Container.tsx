import React from "react";
import { ContainerProps } from "../../types/IconProps";
import "./Container.scss";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
