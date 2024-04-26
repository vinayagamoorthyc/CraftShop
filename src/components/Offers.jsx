import React from 'react';
import "./Offers.css";
import img1 from "../assets/offerimg1.png";
import img2 from "../assets/offerimg2.png";

export default function Offers() {
  return (
    <center>
        <div className="offers_flex">
            <div className='offers_card'>
                <div className='offerimg_bg'>
                    <img src={img1} alt="" width={250} />
                </div>
                <div className='offers_content'>
                    <div style={{color:"orange",fontSize:"18.5px"}}>Special Offer</div>
                    <div className='font' style={{fontSize:"21px"}}>Get Extra 25% Off</div>
                    <div>This Weekend Only</div>
                    <div>
                        <button className='shop_btn'>
                            Shop Now &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='offers_card' >
                <div className='offerimg_bg'>
                    <img src={img2} alt="" width={260} />
                </div>
                <div className='offers_content' >
                    <div style={{color:"orange"}}>Craft's Day Offer</div>
                    <div className='font' style={{fontSize:"21px"}}>Exclusive Handmade Gifts For You</div>
                    <div>
                        <button className='shop_btn'>
                            Shop Now &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 10px"}} class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </center>
  )
}
