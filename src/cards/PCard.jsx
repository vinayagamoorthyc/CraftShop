import React from 'react';
import "./PCard.css";
import { useNavigate } from 'react-router-dom';

export default function PCard(props) {
  const navigate=useNavigate();
  return (
    <div className='pcard' onClick={()=>navigate("/shoppage")}>
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
