import React from "react";
import "./Home.css";
import clothImage from "../../assets/image2-removebg-preview.png";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import SliderCard from "../../components/SliderCard/SliderCard";
import upImage from "../../assets/image7.png"

function Home({ onShopNow }) {
  return (
    <div>
      <PromoBanner />
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
        <div className="card-2">
          <SliderCard url={upImage}
                      title="Senator Kalfan Navtive"
                      test="&#8358;45,000"/>
        <SliderCard url={upImage}
                      title="Senator Kalfan Navtive"
                      test="&#8358;45,000"/>
        <SliderCard url={upImage}
                      title="Senator Kalfan Navtive"
                      test="&#8358;45,000"/>
        <SliderCard url={upImage}
                      title="Senator Kalfan Navtive"
                      test="&#8358;45,000"/>
        <SliderCard url={upImage}
                      title="Senator Kalfan Navtive"
                      test="&#8358;45,000"/>
        <SliderCard url={upImage}
                      title="Senator Kalfan Navtive"
                      test="&#8358;45,000"/>
        </div>
    </div>
  );
}

export default Home;
