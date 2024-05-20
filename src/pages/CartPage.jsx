import React from 'react';
import CCard from '../cards/CCard.jsx';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.jsx';

export default function CartPage() {
  return (
    <center>
        <NavBar/>
        <hr />
        <div className='recent_flex' style={{marginTop:"25px"}}>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Cart Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"900px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div>
                    <div><button className='filter_btn'>
                        Check Out</button></div>
                    </div>
                </div>
            </div>
            <div className='r_pro_flex' style={{marginBottom:"50px"}}>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
                <CCard/>
            </div>
        </div>
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
        <Footer/>
    </center>
  )
}
