import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>Acceuil</li>
          </NavLink>
          <NavLink to="/about"className={({isActive}) => (isActive ? "underline" : "")}>
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
