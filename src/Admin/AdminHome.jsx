import React, { useState } from 'react';
import "./AdminHome.css"
import AdminNav from './admin components/AdminNav';
import img from "../assets/rpro.png"
import ShowTable from './admin components/ShowTable';
import axios from "axios";

export default function AdminHome() {
  const [proname,setProname] = useState();
  const [prorate,setProrate] = useState();
  const [desc,setDesc] = useState();
  const [maker,setMaker] = useState();
  const [category,setCategory] = useState();
  const [imgurl,setImgurl] = useState();
  const [category2,setCategory2] = useState();

  function addProduct(){
    axios.post("http://localhost:3001/createProduct",)
  }

  return (
    <center className='admin_home_flex'>
      <AdminNav/>
      <hr />
      <div className='p_head_flex' style={{width:"85%",marginTop:"25px",marginBottom:"15px"}}>
         <div className='font' style={{fontSize:"33px"}}>Product Inventory</div>
                <hr style={{border:"1.5px solid #",minWidth:"820px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn'>
                        Inventory List</button>
                    </div>
                </div>
        </div>
        
        <div className='admin_main_flex'>
          <div>
              <form action="#" className='admin_add_pro' onSubmit={addProduct}>
                  <input className='shop_btn' type="text" placeholder='Product Name'
                  onChange={(e)=>setProname(e)} />
                  <input className='shop_btn' type="number" placeholder='Product Price'
                  onChange={(e)=>setProrate(e)} />
                  <input className='shop_btn' type="text" placeholder='Product Description'
                  onChange={(e)=>setDesc(e)}/>
                  <input className='shop_btn' type="text" placeholder='Product Maker Details'
                  onChange={(e)=>setMaker(e)}/>
                  <input className='shop_btn' type="text" placeholder='Product Category'
                  onChange={(e)=>setCategory(e)}/>
                  <input className='shop_btn' type="text" placeholder='Product Category2'
                  onChange={(e)=>setCategory2(e)}/>
                  <input className='shop_btn' type="text" placeholder='Product Img URL'
                  onChange={(e)=>setImgurl(e)}/>
                  <input className='shop_btn' type="submit" value="Add Product" />
              </form>
          </div>
          <div>
              <img src={img} alt="" width={370} />
          </div>
        </div>
        <hr style={{marginTop:"35px"}}/>

        <div className='p_head_flex' style={{width:"85%",marginTop:"25px",marginBottom:"15px"}}>
                <div className='font' style={{fontSize:"33px"}}>Inventory List</div>
                <hr style={{border:"1.5px solid #",minWidth:"900px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn'>
                        Add Product</button>
                    </div>
                </div>
        </div>

        <ShowTable/>

    </center>
  )
}
