import React, { useState } from 'react';
import "./Contact.css";
import img from '../assets/contact.png';
import axios from 'axios';

export default function Contact() {
    const [email,setEmail]=useState();

    function addSubscriber(e){
        e.preventDefault();
        axios.post("http://localhost:3001/addSubscriber",{email})
        .then(()=>alert("ok"))
        .catch(err=>console.log(err));
    }

  return (
    <center id=''>
        <div className='contact_flex'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='font' 
            style={{fontSize:"27px",position:"absolute",left:"35%",top:"0px",width:"30%"}}>
                Get the Latest Information and Special Offers
            </div>
            <form className='contact_content' action='#' onSubmit={addSubscriber}>
                <div style={{fontSize:"15px",color:"orange"}}>Join The Craft Newsletter</div>
                <div style={{fontSize:"14px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in architecto magni aspernatur maxime atque aut perferendis saepe neque nam! Repudiandae delectus perferendis fuga optio labore, ullam praesentium possimus ducimus?</div>
                <div>
                    <input type="email" name="" id="newsemail" 
                    style={{border:"1.5px solid #00000012",padding:"10px",width:"400px"}} 
                    placeholder='Your email address' 
                    required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <button className='shop_btn' type='submit'>
                        Subscribe &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </form>
        </div>
    </center>
  )
}
