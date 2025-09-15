import React from "react";
import "./Home.css";
import clothImage from "../../assets/image2-removebg-preview.png";

function Home({ onShopNow }) {
  return (
    <div>
      <div className="home-section" id="home">
        <div className="home-img">
          <img src={clothImage} alt="Cloth" />
        </div>

        <div className="home-feature">
          <h4>#New Summer Collection 2025</h4>
          <h2>Arrivals Sales</h2>

          <div className="btn">
            <button onClick={onShopNow}>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
