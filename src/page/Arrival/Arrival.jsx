import React from 'react'
import "./Arrival.css"
import shortImage from "../../assets/image1-removebg-preview.png"
import SliderCard from '../../components/SliderCard/SliderCard'
import wearImage from "../../assets/image17.png"
function Arrival({onShopNow}) {
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
          <button onClick={onShopNow}>SHOP NOW</button>
        </div>
        </div>
       
      </div>
<div className='card-2'>
  <SliderCard  url={wearImage}
                title="Men's 2pcs"
                test="&#8358;40,000"/>
  <SliderCard  url={wearImage}
                title="Men's 2pcs"
                test="&#8358;40,000"/>
  <SliderCard  url={wearImage}
                title="Men's 2pcs"
                test="&#8358;40,000"/>
  <SliderCard  url={wearImage}
                title="Men's 2pcs"
                test="&#8358;40,000"/>
  <SliderCard  url={wearImage}
                title="Men's 2pcs"
                test="&#8358;40,000"/>
  <SliderCard  url={wearImage}
                title="Men's 2pcs"
                test="&#8358;40,000"/>
</div>
    </div>
  )
}

export default Arrival