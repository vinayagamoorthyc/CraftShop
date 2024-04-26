import React from 'react';
import "./Contact.css";
import img from '../assets/contact.png';

export default function Contact() {
  return (
    <center>
        <div className='contact_flex'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='font' 
            style={{fontSize:"27px",position:"absolute",left:"35%",top:"0px",width:"30%"}}>
                Get the Latest Information and Special Offers
            </div>
            <div className='contact_content'>
                <div style={{fontSize:"15px",color:"orange"}}>Join The Craft Newsletter</div>
                <div style={{fontSize:"14px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in architecto magni aspernatur maxime atque aut perferendis saepe neque nam! Repudiandae delectus perferendis fuga optio labore, ullam praesentium possimus ducimus?</div>
                <div>
                    <input type="text" name="" id="newsemail" style={{border:"1.5px solid #00000012",padding:"10px",width:"400px"}} placeholder='Your email address'/>
                </div>
                <div>
                    <button className='shop_btn'>
                        Subscribe &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </center>
  )
}
