import React, { useState } from "react";
import "./Navbar.css";
import Products from "../../data/Products"; // 👈 your products
import searchImage from "../../assets/image13.png";
import cartImage from "../../assets/image11.png";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    const filtered = Products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const addToCart = (item) => {
    setCart([...cart, item]); // add product to cart
    alert(`${item.name} added to cart!`);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>SHOPMORE</h1>
        </div>

        <ul className="nav-menu">
          <li><a href="#home">HOME</a></li>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#rated">RATED</a></li>
          <li><a href="#new">NEW ARRIVALS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>

        <div className="nav-img">
          {/* 👇 toggle search input */}
          <img
            onClick={() => setShowSearch(!showSearch)}
            src={searchImage}
            alt="search"
            width="20px"
          />
          {/* 👇 cart icon shows number of items */}
          <div className="cart-icon">
            <img src={cartImage} alt="cart" width="20px" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </div>

      {/* 👇 search input in navbar */}
      {showSearch && (
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search clothes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Go</button>
        </div>
      )}

      {/* 👇 search results with add-to-cart */}
      {results.length > 0 && (
        <div className="search-dropdown">
          {results.map((item) => (
            <div key={item.id} className="search-item">
              <img src={item.image} alt={item.name} width="40" />
              <span>{item.name}</span>
              <button className="add-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
