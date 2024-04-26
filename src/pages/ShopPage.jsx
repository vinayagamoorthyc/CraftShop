import React from 'react';
import './ShopPage.css';
import RCard from '../cards/RCard';

export default function ShopPage() {
  return (
    <center>
        <div className='recent_flex' style={{marginTop:"25px"}}>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Handy Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"365px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Garden</button></div>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Kitchen</button></div>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Candles</button></div>
                    <div><button style={{border:"1px solid black",padding:"10px 20px 10px 20px",borderRadius:"10px",fontSize:"13.5px"}}>
                        Homewares</button></div>
                    <div>
                        <input type="text" style={{border:"1px solid black",padding:"8px 15px 8px 20px",borderRadius:"10px"}} placeholder='Search'/>
                    </div>
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
