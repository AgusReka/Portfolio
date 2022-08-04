import "./NavBarStyle.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  const [burgerButtonState, setBurgerButtonState] = useState(true);
  return (
    <div className="NavBar">
      <div
        className={
          burgerButtonState ? "MenuDesplegable" : "MenuDesplegable open"
        }
      >
        <Link to="/" className="Icon">
          <img src="./Art/Icono.png" />
        </Link>

        <div className="Navegation">
        <button
              className={
                burgerButtonState ? "burgerButton" : "burgerButton cross"
              }
              onClick={() => setBurgerButtonState(!burgerButtonState)}
            >
              <div className={"lineButton"}></div>
            </button>
          <div className="Links">
            <Link to="/">
              <h1>Home</h1>
            </Link>

            <Link to="/about">
              <h1>About</h1>
            </Link>

            <Link to="/projects">
              <h1>Projects</h1>
            </Link>
            
            <Link to="/projects">
              <h1>Contact Me</h1>
            </Link>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
