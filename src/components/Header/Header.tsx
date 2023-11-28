import Logo from "../Logo/Logo";
import UserBar from "../UserBar/UserBar";
import UserBurger from "../UserBurger/UserBurger";
import UserNav from "../UserNav/UserNav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="user-menu">
        <UserNav />
        <UserBar />
        <UserBurger />
      </div>
    </header>
  );
};

export default Header;
