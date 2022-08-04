import "./NavBarStyle.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBar() {
  const [burgerButtonState, setBurgerButtonState] = useState(true);
  const [navBarState, setNavBarState] = useState("Home");
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
          <div className="Links" onClick={() => setBurgerButtonState(!burgerButtonState)}>
            <Link to="/" className={navBarState === "Home" ? "selected" : ""} onClick={() => setNavBarState("Home")}>
              <img src="./Art/HomeIcon.png" />
              <h1>Home</h1>
            </Link>

            <Link to="/about" className={navBarState === "About" ? "selected" : ""} onClick={() => setNavBarState("About")}>
            <img src="./Art/AboutMeIcon.png" />
              <h1>About</h1>
            </Link>

            <Link to="/projects" className={navBarState === "Projects" ? "selected" : ""} onClick={() => setNavBarState("Projects")}>
              <img src="./Art/ProjectsIcon.png" />
              <h1>Projects</h1>
            </Link>
            
            {/*<Link to="/projects">
              <img src="./Art/ContactMeIcon.png" />
              <h1>Contact Me</h1>
            </Link>*/}
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
