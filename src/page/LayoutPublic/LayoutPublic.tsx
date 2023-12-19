import React from "react";
import Container from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import scss from "./LayoutPublic.module.scss";
import StatisticsInfo from "../../components/StatisticsInfo/StatisticsInfo";

const LayoutPublic: React.FC = () => {
  return (
    <Container>
      <div className={scss.layoutPublic}>
        <header className={scss.header}>
          <Logo />
        </header>
        <main>
          <Outlet />
          <div className={scss.imgLayoutPublic}>
            <StatisticsInfo />
          </div>
        </main>
      </div>
    </Container>
  );
};

export default LayoutPublic;
