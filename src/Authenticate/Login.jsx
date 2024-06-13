import React, { useState } from 'react';
import "./Login.css";
import img from '../assets/login.jpeg';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/login", {email, password})
        .then((res)=>{
          window.localStorage.setItem("userid", res.data.id);
          window.localStorage.setItem("token", res.data.tok);
          if(res.data.Status === "success"){
            if(res.data.role === "admin"){
              navigate("/adminnhome");
            }else{
              navigate("/");
            }
          }else{
            alert("wrong");
          }
        }).catch(err=>console.log(err))
      }

  return (
    <center>
        <div className="login_flex">
            
            <div className='login_content'>
                <div style={{display:"flex",gap:"60px",flexDirection:'column',alignItems:"start"}}>
                    <div><img src={logo} width={125} alt="" /></div>
                    <div className='font' style={{fontSize:"27px",color:"gray"}}>Welcome back</div>
                </div>
                
                <div style={{color:"black",fontSize:"14px"}}>Please enter your details</div>
                <form action='#' onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"15px",alignItems:"flex-start"}}>
                    <div>
                        <input type="text" placeholder='Enter your email' className='shop_btn' style={{width:"300px"}}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="password" placeholder='Enter your password' className='shop_btn' style={{width:"300px"}}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className='shop_btn'>
                            Sign In &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </form>
                <a href="/signup" style={{color:'orange'}}>Don't have an account!</a>
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
