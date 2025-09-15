import React from 'react'
import "./SliderCard.css"
function SliderCard(props) {
  return (
    <div>
        <div>
 <div className='slide-img'>
   <img src={props.url} alt={props.title} />
    <h4>{props.title}</h4>
    <p> {props.test}</p>
 </div>
</div>
    </div>
  )
}

export default SliderCard