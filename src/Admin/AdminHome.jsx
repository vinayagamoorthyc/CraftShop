import React, { useState } from 'react'
import "./AdminHome.css"
import AdminNav from './AdminNav';

export default function AdminHome() {
  const [proname,setProname] = useState();

  return (
    <center className='admin_home_flex'>
      <AdminNav/>
      <div className='p_head_flex' style={{width:"85%",marginTop:"15px",marginBottom:"15px"}}>
                <div className='font' style={{fontSize:"33px"}}>Admin Portal</div>
                <hr style={{border:"1.5px solid #",minWidth:"420px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn'>
                        Garden</button></div>
                    <div><button className='filter_btn'>
                        Kitchen</button></div>
                    <div><button className='filter_btn' >
                        Candles</button></div>
                    <div><button className='filter_btn'>
                        Homewares</button></div>
                </div>
            </div>
            <hr />
        <div className='admin_main_flex' style={{marginTop:"20px"}}>
          <div>
              <form action="#" className='admin_add_pro'>
                  <input className='shop_btn' type="text" placeholder='Product Name' />
                  <input className='shop_btn' type="number" placeholder='Product Price' />
                  <input className='shop_btn' type="text" placeholder='Product Description'/>
                  <input className='shop_btn' type="text" placeholder='Product Maker Details'/>
                  <input className='shop_btn' type="text" placeholder='Product Category'/>
                  <input className='shop_btn' type="text" placeholder='Product Category2'/>
                  <input className='shop_btn' type="text" placeholder='Product Img URL'/>
                  <input className='shop_btn' type="submit" value="Add Product" />
              </form>
          </div>
          <div>
              <img src="https://www.firstpalette.com/images/craft-mainpic-large/accordionpaperflowers-main.jpg" alt="" width={500} />
          </div>
        </div>    
    </center>
  )
}
