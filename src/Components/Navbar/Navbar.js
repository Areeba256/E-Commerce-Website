import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const showNavigationMenu = () => {
    document.querySelector(".showhamburgerdiv").style.left = "-2.7%";
  };

  const hideNavigationMenu = () => {
    document.querySelector(".showhamburgerdiv").style.left = "110%";
    document.querySelector(".showhamburgerdiv").style.display = "block";
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-main">
            <div className="logo-div">
              <h2>Exclusive</h2>
            </div>
            <div className="link-div">
              <Link to="/" className="nav-links">
                Home
              </Link>
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
              <Link to="/About" className="nav-links">
                About
              </Link>
              <Link to="/signup" className="nav-links">
                SignUp
              </Link>
            </div>
            <div className="input-and-icons">
              <div className="input">
                <input type="text" placeholder="What are you looking for?" />
              </div>
              <div className="icons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-container-mobile">
        <div className="navbar-mobile">
          <div className="navbar-main-mobile">
            <div className="logo-div-mobile">
              <h2>Exclusive</h2>
            </div>

            <div className="hamburger-main">
              <i class="fa-solid fa-bars" onClick={showNavigationMenu}></i>
            </div>

            <div className="showhamburgerdiv">
              <div className="mobile-top-main">
                <div className="logo-div-mobile">
                  <h2>Exclusive</h2>
                </div>

                <div className="hamburger-main">
                  <i
                    class="fa-solid fa-xmark cross-icon"
                    onClick={hideNavigationMenu}
                  ></i>
                </div>
              </div>
              <div className="link-div-mobile">
                <Link to="/" className="nav-links-mobile">
                  Home
                </Link>
                <Link to="/contact" className="nav-links-mobile">
                  Contact
                </Link>
                <Link to="/about" className="nav-links-mobile">
                  About
                </Link>
                <Link to="/signup" className="nav-links-mobile">
                  SignUp
                </Link>
              </div>
              <div className="input-and-icons-mobile">
                <div className="input-mobile">
                  <input type="text" placeholder="What are you looking for?" />
                </div>
                <div className="icons-mobile">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-cart-shopping  shoppingMenu"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
