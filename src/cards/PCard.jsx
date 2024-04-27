import React from 'react';
import "./PCard.css";

export default function PCard(props) {
  return (
    <div className='pcard'>
        <div>
            <img src={props.img} alt="" />
        </div>
        <div id='pcard_contnet'>
            <div className='font' style={{fontSize:"15px"}} >{props.name}</div>
            <div style={{color:"orange",fontSize:"14px"}}>{props.items}</div>
        </div>
    </div>
  )
}
