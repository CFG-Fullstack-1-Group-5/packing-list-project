import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() { 
  return (
    <header>
      <div className="NavBar">
        <nav>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/About">
            <button id="AboutButton" className="aboutButton">About</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
