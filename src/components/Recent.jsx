import React from 'react';
import "./Recent.css";
import RCard from '../cards/RCard';

export default function Recent() {
  return (
    <center>
        <div className='recent_flex'>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Recent Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"500px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Top Rated</button></div>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Bestseller</button></div>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Popular</button></div>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Recommended</button></div>
                </div>
            </div>
            <div className='r_pro_flex'>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
                <RCard/>
            </div>
        </div>
    </center>
  )
}
