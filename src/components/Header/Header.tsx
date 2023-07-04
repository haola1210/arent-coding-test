import "./Header.scss";
import Logo from "@components/Logo";
import Navbar from "@components/Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__nav-bar">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
