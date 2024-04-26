import React from 'react';
import "./Login.css";
import img from '../assets/login.jpeg';
import logo from "../assets/logo.png";

export default function Login() {
  return (
    <center>
        <div className="login_flex">
            
            <div className='login_content'>
                <div><img src={logo} width={125} alt="" style={{position:"absolute",top:"-90px"}}/></div>
                <div className='font' style={{fontSize:"27px",color:"gray"}}>Welcome back</div>
                <div style={{color:"black",fontSize:"14px"}}>Please enter your details</div>
                <div><input type="text" placeholder='Enter your email' className='shop_btn' style={{width:"300px"}}/></div>
                <div><input type="text" name="" id="" placeholder='Enter your password' className='shop_btn' style={{width:"300px"}}/></div>
                <div>
                    <button className='shop_btn'>
                        Sign In &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                    </button>
                </div>
                <a href="">Already have an account?</a>
                <div style={{display:'flex',alignItems:"center",fontSize:'14px'}}>
                    <hr style={{border:"1px solid #00000012",minWidth:"45px"}}/> &nbsp;
                    OR&nbsp;
                    <hr style={{border:"1px solid #00000012",minWidth:"45px"}}/>
                </div>
                <div><button className='shop_btn' style={{width:''}}><i class="bi bi-google"></i> &nbsp;&nbsp;Sign In with Google</button></div>
            </div>
            <div style={{position:"relative"}}>
                <img src={img} alt="" width={500} style={{borderRadius:"20px"}}/>
                <div className='font' style={{position:"absolute",top:"22px",left:"29px",fontSize:"25px",width:"150px",textAlign:"start",color:"gray"}}>You Shop, We Give.</div>
            </div>
        </div>
    </center>
  )
}
