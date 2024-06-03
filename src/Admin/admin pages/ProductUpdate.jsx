import React, { useEffect, useState } from 'react'
import img from "/Users/vinayagamoorthyc/Documents/MERN Training/Last Project/craftshop/src/assets/preview.png"
import axios from 'axios';

export default function ProductUpdate() {
    
    const [proname,setProname] = useState();
    const [prorate,setProrate] = useState();
    const [desc,setDesc] = useState();
    const [maker,setMaker] = useState();
    const [category,setCategory] = useState();
    const [imgurl,setImgurl] = useState();
    const [category2,setCategory2] = useState();

    useEffect(()=>{
        axios.get("https://powerlendbackend.onrender.com/getUp/"+id)
        .then(e=>{ console.log(e)
          setProname(e.data.proname)
          setProrate(e.data.prorate)  
          setDesc(e.data.desc)    
          setOverview(e.data.overview)
          setAvail(e.data.avail)
          setCategory(e.data.category)
          setImgurl(e.data.imgurl)
        })
        .catch(err=>console.log(err))
      }, [])

  return (
    <center>
        <div className='p_head_flex' style={{width:"85%",marginTop:"40px",marginBottom:"55px"}}>
         <div className='font' style={{fontSize:"33px"}}>Update Inventory</div>
                <hr style={{border:"1.5px solid #",minWidth:"890px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn' onClick={()=>window.location="#adminhome"}>
                        Cancel</button>
                    </div>
                </div>
        </div>
        
        <div className='admin_main_flex'>
          <div>
              <form action="#" className='admin_add_pro' >
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
