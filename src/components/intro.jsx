import React from 'react';
import img1 from '../assets/introimg1.png';
import img2 from '../assets/introimg2.png';
import './Intro.css';

export default function Intro() {
  return (
    <center>
    <div className='intro_flex'>
        <div style={{padding:"35px"}}>
            <img src={img1} alt="" width={980}/>
        </div>
        <div className='intro_content'>
            <div style={{color:"orange"}}>New Collection</div><br />
            <div style={{fontSize:"40px",fontWeight:"bolder"}}>Purposeful Goods and Gifts Crafted by Hand</div>
            <div style={{fontSize:"20px"}}>Supporting local makers since 2024</div><br />
            <div><button>SHOP NOW | </button></div>
        </div>
        <div>
            <img src={img2} alt="" width={1000}/>
        </div>
    </div>
    </center>
  )
}
