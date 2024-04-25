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
            <div className='font' >name</div>
            <div>rate</div>
        </div>
    </div>
  )
}
