import React from 'react';
import 

export default function AdminHome() {
  return (
    <center>
        <div>
          <div className='font'>Add Product</div>
            <form action="#" className='admin_add_pro'>
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
            <img src="" alt="" />
        </div>
    </center>
  )
}
