import "./Header.scss";
import Logo from "@components/Logo";
import Navbar from "@components/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <Logo />
          <span id="#"></span>
        </Link>
      </div>
      <div className="header__nav-bar">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
