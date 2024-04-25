import React from 'react';
import "./RCard.css";
import img from "../assets/rpro.png";

export default function RCard() {
  return (
    <div className='rcard'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='rcard_content'>
            <div>Fantastic Iron Clock</div>
            <div style={{color:"orange"}}>986.00</div>
        </div>
    </div>
  )
}
