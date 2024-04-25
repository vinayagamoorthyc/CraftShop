import React from 'react';
import "./PCard.css";
import img from "../assets/pro.png";

export default function PCard(props) {
  return (
    <div className='pcard'>
        <div>
            <img src={img} alt="" />
        </div>
        <div id='pcard_contnet'>
            <div className='font' style={{fontSize:"15px"}} >Candles</div>
            <div style={{color:"orange",fontSize:"14px"}}>21 item</div>
        </div>
    </div>
  )
}
