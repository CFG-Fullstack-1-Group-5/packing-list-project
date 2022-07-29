import "./Header.css";

function Header() {

  return (
    <header>
      <div className="NavBar"> 
        <nav>
          <form>
            <a href="#"><img src='./logo.png'/></a>
            <button class="aboutButton">About</button>
          </form>
        </nav>
      </div>    
    </header>
  );
}

export default Header;