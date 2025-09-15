import React from 'react'
import "./Arrival.css"
import shortImage from "../../assets/image1-removebg-preview.png"
function Arrival() {
  return (
    <div>
 <div className="arrival-section" id="arrival">
        <div className="arrival-img">
          <img src={shortImage} alt="" />
        </div>
        <div className="arrival-feature">
          <h4>#New Summer Collection 2025</h4>
          <h2>NEW CLOTHES</h2>
           <div className="btn">
          <button>SHOP NOW</button>
        </div>
        </div>
       
      </div>

    </div>
  )
}

export default Arrival