import React from 'react';
import './ShopPage.css';
import RCard from '../cards/RCard';
import NavBar from '../components/NavBar';

export default function ShopPage() {
  return (
    <center>
        <NavBar/>
        <hr />
        <div className='recent_flex' style={{marginTop:"25px"}}>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Handy Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"365px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn'>
                        Garden</button></div>
                    <div><button className='filter_btn'>
                        Kitchen</button></div>
                    <div><button className='filter_btn' >
                        Candles</button></div>
                    <div><button className='filter_btn'>
                        Homewares</button></div>
                    <div>
                        <input type="text" style={{border:"1px solid black",padding:"8px 15px 8px 20px",borderRadius:"10px"}} placeholder='Search'/>
                    </div>
                </div>
            </div>
            <div className='r_pro_flex' style={{marginBottom:"50px"}}>
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
