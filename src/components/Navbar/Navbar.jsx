import React from "react";
import "./Navbar.css";
import searchImage from "../../assets/image13.png";
import cartImage from "../../assets/image11.png";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>SHOPMORE</h1>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home">HOME</a>
            </li>

            <li>
              <a href="#shop">SHOP</a>
            </li>
             <li><a href="#rated">RATED</a></li>
            <li>
              <a href="">NEW ARRIVALS</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
          <div className="nav-img">
            <img src={searchImage} alt="" width="20px" />
            <img src={cartImage} alt="" width="20px" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
