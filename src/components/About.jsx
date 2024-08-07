import React from 'react';
import "./About.css";
import img from "../assets/about.png";
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
  return (
    <center id='about'>
        <div className="about_flex">
            <div className='about_content'>
                <div style={{color:"orange",fontSize:"17px"}}>About Handmade Shop</div>
                <div className='font' style={{fontSize:"31px"}}>You Shop, We Give.</div>
                <div style={{fontSize:"15px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi error incidunt quos! Doloribus necessitatibus eligendi voluptatum quia vitae accusamus impedit blanditiis.</div>
                <div>
                    <button className='shop_btn' onClick={()=>navigate('/aboutpage')}>
                    Discover More &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div>
                <img src={img} alt="" width={600}/>
            </div>
        </div>
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
    </center>
  )
}
