import React from 'react';
import "./Feature.css";

export default function Feature() {
  return (
    <center>
        <div className="feature_flex">
            <div style={{fontSize:"25px",fontWeight:"bolder",textAlign:"start"}} className='font'>
                Our Amazing Feature
            </div>
            <div className='feature_content'>
                <div className='f_content_padding'>
                    <div style={{fontSize:"14px",fontWeight:"bolder"}} className='font'>1K Satisfied Customers</div>
                    <div style={{fontSize:"13px",fontWeight:"500",color:"gray"}}>We have achieved over 1k satisfied and happy customers.</div>
                </div>
                <div className='f_content_padding'>
                    <div style={{fontSize:"14px",fontWeight:"bolder"}} className='font'>Expert Customer Service</div>
                    <div style={{fontSize:"13px",fontWeight:"500",color:"gray"}}>We have achieved over 1k satisfied and happy customers.</div>
                </div>
                <div className='f_content_padding' style={{borderRight:"none"}}>
                    <div style={{fontSize:"14px",fontWeight:"bolder"}} className='font'>Fast & Free Shipping</div>
                    <div style={{fontSize:"13px",fontWeight:"500",color:"gray"}}>We have achieved over 1k satisfied and happy customers.</div>
                </div>
            </div>
        </div>
    </center>
  )
}
