import React from "react";
import "./Shop.css";
import gownImage from "../../assets/image6.png";
import menImage from "../../assets/image5.png";
import shoeImage from "../../assets/image9.png";
import SliderCard from "../../components/SliderCard/SliderCard";
import bagImage from "../../assets/image10.png";
import ladyImage from "../../assets/image8.png";
import senateImage from "../../assets/image16.png";
import jackImage from "../../assets/image18.png";
import dressImage from "../../assets/image19.png";
import boyImage from "../../assets/image20.png";
function Shop() {
  return (
    <div>
      <div className="shop-section" id="shop">
        <div className="shop-feature">
          <div className="div-color"></div>
          <div className="shop-text">
            <h2>
              DISCOVER <br />
              YOUR COLLECTIONS
            </h2>
          </div>
        </div>
        <div className="shop-all">
          <div className="shop-img">
            <img src={gownImage} alt="" />
            <div className="overlay">
              <h4>
                Women <span>20 items</span>
              </h4>
            </div>
          </div>
          <div>
            <div className="shop-img-2">
              <img src={menImage} alt="" />
              <div className="overlay">
                <h4>
                  Men <span>20 items</span>
                </h4>
              </div>
            </div>
            <div className="shop-img-2">
              <img src={shoeImage} alt="" />
              <div className="overlay">
                <h4>
                  Shoe <span>20 items</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="select">
          <div className="shop-feature stat">
            <div className="div-color "></div>
            <div className="shop-text">
              <h2>POPULAR PRODUCTS</h2>
            </div>
          </div>

          <div className="card">
            <SliderCard
              url={bagImage}
              title="Leather Green Bag"
              test="&#8358;40,000"
            />
            <SliderCard
              url={ladyImage}
              title="Lady's High Heel"
              test="&#8358;30,000"
            />
            <SliderCard
              url={senateImage}
              title="Senator Kalfan Navtive"
              test="&#8358;45,000"
            />
            <SliderCard
              url={jackImage}
              title="Men's Jacket"
              test="&#8358;40,000"
            />
            <SliderCard
              url={dressImage}
              title="Lady's Gown"
              test="&#8358;35,000"
            />
            <SliderCard
              url={boyImage}
              title="Men's Shoe"
              test="&#8358;45,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
