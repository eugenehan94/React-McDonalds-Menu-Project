import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import McDLogo from "../images/McD-squareLogo.png";
import "../css/Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let location = useLocation();

  return (
    <nav className="Navbar-container">
      <div className="Navbar-container-inner">
        <div className="Navbar-logo">
          <img src={McDLogo} alt="Logo"></img>
        </div>
        <div className="Navbar-choices-container">
          <ul>
            <li>
              <Link
                to="/menu"
                className={`${
                  location.pathname === "/menu" || location.pathname === "/"
                    ? "active"
                    : null
                }`}
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                to="/promotion"
                className={`${
                  location.pathname === "/promotion" ? "active" : null
                }`}
              >
                Promotions
              </Link>
            </li>
            <li>
              <Link
                to="/family"
                className={`${
                  location.pathname === "/family" ? "active" : null
                }`}
              >
                Family
              </Link>
            </li>
          </ul>
        </div>
        <div className="Navbar-choices-smaller-container">
          <IconContext.Provider value={{ className: "Navbar-hamburger-menu" }}>
            <AiOutlineMenu onClick={() => setNavbarOpen(!navbarOpen)} />
          </IconContext.Provider>

          <div
            className={
              navbarOpen === true
                ? "Navbar-overlay Navbar-open"
                : "Navbar-overlay"
            }
          >
            <div className="Navbar-smaller-navbar">
              <img src={McDLogo} alt="Logo"></img>
              <button onClick={() => setNavbarOpen(!navbarOpen)}> X </button>
            </div>

            <ul className="Navbar-smaller-list">
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/promotion">Promotions</Link>
              </li>
              <li>
                <Link to="/family">Family</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
