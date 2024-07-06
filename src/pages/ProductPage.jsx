import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import NavBar from '../components/NavBar.jsx';
import { Tab, Tabs } from '@nextui-org/react';
import Footer from '../components/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function ProductPage() {
    const {id} = useParams();

    const [proname,setProname] = useState();
    const [prorate,setProrate] = useState();
    const [desc,setDesc] = useState();
    const [maker,setMaker] = useState();
    const [imgurl,setImgurl] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:3001/getParticular/"+id)
        .then(e=>{
          setProname(e.data.proname)
          setProrate(e.data.prorate)  
          setDesc(e.data.desc)    
          setMaker(e.data.maker)
          setImgurl(e.data.imgurl)
        })
        .catch(err=>console.log(err))
      },[id]);

  return (
    <div>
        <NavBar/><hr /><br />
        <hr />
        <div className="pro_flex">
            <img src={imgurl} alt="" className='pro_image' width={450} style={{borderRadius:"7px"}}/>
            <div className='pro_content'>
                <div className='font' style={{fontSize:"30px"}}>{proname}</div>
                <div style={{color:"orange",fontSize:'20px'}}>₹ {prorate}.00</div>
                <div className='show_rating'>
                    <div class="mt-0 text-[gray] text-x tracking-[3px]">
                    ★★★★★ 
                    </div>
                    <div style={{fontSize:"14px"}}><u>25 reviews</u></div>
                </div>
                <div style={{width:"480px"}} className="flex flex-wrap gap-4">
                    <Tabs variant="underlined" aria-label="Tabs variants">
                        <Tab key="desciption" title="DESCRIPTION">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem aliquam cupiditate nisi vel, iure facere ut expedita doloremque eligendi! Blanditiis at, doloremque tenetur ut neque voluptas iusto. Repellat, voluptatibus nam.</Tab>
                        <Tab key="options" title="MAKER DETAILS">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque odio voluptatem commodi voluptatibus velit doloremque quis! Aliquid temporibus perspiciatis eius, exercitationem facere nobis excepturi cumque natus eveniet ipsam repellat eligendi.
                        </Tab>
                    </Tabs>
                </div>
                <div style={{color:"gray"}}>
                    Expected Delivery on 12/5/2024 &nbsp;&nbsp;&nbsp;&nbsp;<select className='shop_btn' name="" id="">
                        <option value="">Not As Gift</option>
                        <option value="">As Gift</option>
                    </select>
                </div>
                <hr style={{border:"1px solid #00000020"}}/>
                <div style={{display:"flex",gap:"0",alignItems:'center',justifyContent:"center"}}>
                    <div>
                        <button className='shop_btn' style={{width:"165px"}}>
                            Add To Cart &nbsp;&nbsp;<i style={{borderLeft:"1px solid black",padding:"13px 0px 13px 18px",fontSize:'18px'}} class="bi bi-bag"></i>
                        </button>
                    </div>
                    <hr style={{border:"0.8px solid black",minWidth:"50px"}}/>
                    <div className='shop_btn' style={{width:'165px',fontSize:"18px"}}>
                        <center>
                            <button>-</button>&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;<button>+</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <hr style={{width:"85%",border:"0px solid #00000012",marginBottom:"50px"}}/>
        <Footer/>
    </div>
  )
}
