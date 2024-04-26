import React from 'react';
import './Popular.css';
import PCard from '../cards/PCard';

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
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
                <PCard/>
            </div>
        </div>
        <div id='contact'></div>
    </center>
  )
}
