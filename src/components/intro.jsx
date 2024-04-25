import React from 'react';
import img1 from '../assets/introimg1.png';
import img2 from '../assets/introimg2.png';
import './Intro.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Intro() {
  return (
    <center>
    <div className='intro_flex'>
        <div style={{padding:"35px"}}>
            <img src={img1} alt="" width={980}/>
        </div>
        <div className='intro_content'>
            <div style={{color:"orange"}}>New Collection</div>
            <div style={{fontSize:"40px",fontWeight:"bold"}} className='font'>Purposeful Goods and Gifts Crafted by Hand</div>
            <div style={{fontSize:"20px"}}>Supporting local makers since 2024</div><br />
            <div>
              <button className='shop_btn'>
                SHOP NOW &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
              </button>
            </div>
        </div>
        <div>
            <img src={img2} alt="" width={1050}/>
        </div>
    </div>
    </center>
  )
}
