import React from 'react';
import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <center>
        <div className='footer_flex'>
            <div className='footer_content'>
                <div style={{display:"flex",flexDirection:"column",alignItems:"start",gap:"5px"}}>
                    <img src={logo} alt="" width={120} />
                    <div style={{fontSize:"15px",color:"gray"}}>Add. 168/170, Avanue 01, Coimbatore, Tamil Nadu</div>
                    <div style={{fontSize:"15px",color:"gray"}}>handcrafted5487@gmail.com</div>
                    <div style={{display:"flex",gap:"25px"}}>
                        <i className='bi bi-instagram'></i>
                        <i className='bi bi-linkedin'></i>
                        <i className='bi bi-github'></i>
                        <i className='bi bi-browser-chrome'></i>
                    </div>
                </div>
                <div className='f_c_flex'>
                    <div className='font' style={{fontSize:"16px"}}>Useful Links</div>
                    <hr style={{border:"1px solid black",minWidth:"45px"}}/>
                    <div style={{fontSize:"15px",color:"gray"}}>Legal & Privacy</div>
                    <div style={{fontSize:"15px",color:"gray"}}>My Wish List</div>
                </div>
                <div className='f_c_flex'>
                    <div className='font'>My Account</div>
                    <hr style={{border:"1px solid black",minWidth:"45px"}}/>
                    <div style={{fontSize:"15px",color:"gray"}}>My Profile</div>
                    <div style={{fontSize:"15px",color:"gray"}}>Shopping Cart</div>
                </div>
                <div className='f_c_flex'>
                    <div className='font'>Company</div>
                    <hr style={{border:"1px solid black",minWidth:"45px"}}/>
                    <div style={{fontSize:"15px",color:"gray"}}>About Us</div>
                    <div style={{fontSize:"15px",color:"gray"}}>Contact Us</div>
                </div>
            </div>
        </div>
        <hr style={{width:"85%",border:"1px solid #00000012"}}/>
        <div style={{display:"flex",width:"85%",justifyContent:"space-between",alignItems:"center",marginTop:"25px",marginBottom:"25px"}}>
            <div style={{fontSize:"15px",color:"gray"}}>Copyright 2024 All Rights Reserved by <b>Craft</b></div>
            <div style={{display:"flex",gap:"50px"}}>
                <div style={{fontSize:"15px",color:"gray"}}>Terms & Conditions</div>
                <div style={{fontSize:"15px",color:"gray"}}>Privacy Policy</div>
                <div style={{fontSize:"15px",color:"gray"}}>Legal</div>
            </div>
        </div>        
    </center>
  )
}
