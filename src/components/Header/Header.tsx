import Logo from "../Logo/Logo";
import UserBar from "../UserBar/UserBar";
import BurgerMenu from "../burgerMenu/burgerMenu";
import UserNav from "../UserNav/UserNav";
import scss from "./Header.module.scss";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

const Header = () => {
  return (
    <header className={scss.header}>
      <Logo className=""/>
      <div className={scss.headerNavWrap}>
        <nav className={scss.nav}>
          <UserNav />
        </nav>
        <div className={scss.userMenu}>
          <UserBar />
          <BurgerMenu />
          <div className={scss.logoutBtnWrap}>
            <LogoutBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
