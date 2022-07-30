import "./Header.css";
import logo from "../../assets/logo.png"

function Header() {

  return (
    <header>
      <div className="NavBar"> 
        <nav>
          <a href="#"><img src={logo}/></a>
          <button class="aboutButton">About</button>
        </nav>
      </div>    
    </header>
  );
}

export default Header;