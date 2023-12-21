import React from "react";
import Container from "../../components/Container/Container";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import scss from "./LayoutPublic.module.scss";
import StatisticsInfo from "../../components/StatisticsInfo/StatisticsInfo";
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from "../../utils/constantes";

const LayoutPublic: React.FC = () => {
  const location = useLocation();
  const isAuthLineaGradient =
    location.pathname === SIGNIN_ROUTE || location.pathname === SIGNUP_ROUTE;

  return (
    <Container>
      <div
        className={`${scss.imgLayoutPublic} ${
          isAuthLineaGradient && scss.additionalBackgroundGradient
        }`}
      >
        <header className={scss.header}>
          <Logo />
        </header>
        <main>
          <div className={scss.outletWrap}>
            <div className={scss.outlet}>
              <Outlet />
            </div>
            <StatisticsInfo />
          </div>
        </main>
      </div>
    </Container>
  );
};

export default LayoutPublic;
