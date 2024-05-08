import React from 'react'
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
                    <div><button className='filter_btn'>
                        Recent View</button></div>
                    <div><button className='filter_btn'>
                        Bestseller</button></div>
                    <div><button className='filter_btn'>
                        Popular</button></div>
                    <div><button className='filter_btn'>
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
