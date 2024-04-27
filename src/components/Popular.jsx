import React from 'react';
import './Popular.css';
import PCard from '../cards/PCard';
import garden from '../assets/garden.png';
import kitchen from '../assets/kitchen.png';
import candlees from '../assets/candles.png';
import homewares from '../assets/homewares.png';

export default function Popular() {
  return (
    <center>
        <div className='popular_flex'>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px",fontWeight:"bold"}}>Popular Categories</div>
                <hr style={{border:"1.5px solid #",minWidth:"800px"}}/>
                <div className='p_head_arrows'>
                    <button ><i class="bi bi-arrow-left"></i></button>
                    <button 
                    style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px"}}
                    >
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className='p_pros_flex'>
                <PCard img={garden} name={"01. Garden"} items={"12 item"}/>
                <PCard img={kitchen} name={"02. Kitchen"} items={"18 item"}/>
                <PCard img={candlees} name={"03. Candles"} items={"15 item"}/>
                <PCard img={homewares} name={"04. Homewares"} items={"21 item"}/>
            </div>
        </div>
        <div id='subscribe'></div>
    </center>
  )
}
