import React, { useEffect, useState } from 'react';
import img from "../assets/preview.png";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductUpdate() {

  const {id}=useParams();
  const navigate=useNavigate();
    
    const [proname,setProname] = useState();
    const [prorate,setProrate] = useState();
    const [desc,setDesc] = useState();
    const [maker,setMaker] = useState();
    const [category,setCategory] = useState();
    const [imgurl,setImgurl] = useState();
    const [category2,setCategory2] = useState();

    useEffect(()=>{
        axios.get("http://localhost:3001/getParticular/"+id)
        .then(e=>{
          setProname(e.data.proname)
          setProrate(e.data.prorate)  
          setDesc(e.data.desc)    
          setMaker(e.data.maker)
          setCategory(e.data.category)
          setCategory2(e.data.category2)
          setImgurl(e.data.imgurl)
        })
        .catch(err=>console.log(err))
      },[id]);

      const UpdateProduct=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/updateProduct/"+id, {proname, prorate, desc, maker, category, category2,imgurl})
        .then(()=>{
          navigate("/adminhome")
        }).catch(err=>console.log(err));
      }

  return (
    <center>
        <div className='p_head_flex' style={{width:"85%",marginTop:"40px",marginBottom:"55px"}}>
         <div className='font' style={{fontSize:"33px"}}>Update Inventory</div>
                <hr style={{border:"1.5px solid #",minWidth:"890px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn' onClick={()=>navigate("/adminhome")}>
                        Cancel</button>
                    </div>
                </div>
        </div>
        
        <div className='admin_main_flex'>
          <div>
              <form action="#" className='admin_add_pro' onSubmit={UpdateProduct}>
                  <input className='shop_btn' type="text" placeholder='Product Name' value={proname}
                  onChange={(e)=>setProname(e.target.value)} required/>
                  <input className='shop_btn' type="number" placeholder='Product Price' value={prorate}
                  onChange={(e)=>setProrate(e.target.value)} required/>
                  <input className='shop_btn' type="text" placeholder='Product Description' value={desc}
                  onChange={(e)=>setDesc(e.target.value)} required/>
                  <input className='shop_btn' type="text" placeholder='Product Maker Details' value={maker}
                  onChange={(e)=>setMaker(e.target.value)} required/>
                  <input className='shop_btn' type="text" placeholder='Product Category' value={category}
                  onChange={(e)=>setCategory(e.target.value)} required/>
                  <input className='shop_btn' type="text" placeholder='Product Category2' value={category2}
                  onChange={(e)=>setCategory2(e.target.value)} required/>
                  <input className='shop_btn' type="text" placeholder='Product Img URL' value={imgurl}
                  onChange={(e)=>setImgurl(e.target.value)} required/>
                  <input className='shop_btn' type="submit" value="Update Product" />
              </form>
          </div>
          <div>
              <img src={img} alt="" width={370} />
          </div>
        </div>
    </center>
  )
}
