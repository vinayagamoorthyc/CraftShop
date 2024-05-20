import React from 'react';
import RCard from '../cards/RCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.jsx';

export default function CartPage() {
  return (
    <center>
        <NavBar/>
        <hr />
        <div className='recent_flex' style={{marginTop:"25px"}}>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Liked Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"765px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
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
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
        <Footer/>
    </center>
  )
}
