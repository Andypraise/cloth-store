import React from "react";
import "./Rated.css";
import SliderCard from "../../components/SliderCard/SliderCard";
import senateImage from "../../assets/image16.png";
import senImage from "../../assets/image21.png";
import whiteImage from "../../assets/image22.png";
function Rated() {
  return (
    <div>
      <div className="rated-setion" id="rated">
        <div className="rated-feature">
          <div>
            <h2>MOST RATED</h2>
          </div>
          <div className="div-color-2"></div>
        </div>
        <div className="card-2">
          <SliderCard
            url={senateImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={senImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
          <SliderCard
            url={whiteImage}
            title="Senator Kalfan Navtive"
            test="&#8358;45,000"
          />
        </div>
      </div>
    </div>
  );
}

export default Rated;
