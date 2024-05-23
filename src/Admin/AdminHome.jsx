import React from 'react';
import "./AdminHome.css";

export default function AdminHome() {
  return (
    <center className='admin_main_flex'>
        <div>
            <form action="#" className='admin_add_pro'>
                <div className='font'>Add Product</div>
                <input className='shop_btn' type="text" placeholder='Product Name'/>
                <input className='shop_btn' type="number" placeholder='Product Price' />
                <input className='shop_btn' type="text" placeholder='Product Description'/>
                <input className='shop_btn' type="text" placeholder='Product Maker Details'/>
                <input className='shop_btn' type="text" placeholder='Product Category'/>
                <input className='shop_btn' type="text" placeholder='Product Category2'/>
                <input className='shop_btn' type="text" placeholder='Product Img URL'/>
                <input className='shop_btn' type="submit" value="Submit" />
            </form>
        </div>
        <div>
            <img src="https://www.firstpalette.com/images/craft-mainpic-large/accordionpaperflowers-main.jpg" alt="" width={500} />
        </div>
    </center>
  )
}
