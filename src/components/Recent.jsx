import React, { useEffect, useState } from 'react';
import "./Recent.css";
import RCard from '../cards/RCard';
import axios from 'axios';

export default function Recent() {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/getProduct')
        .then(e =>{
        setProducts(e.data);
        })
        .catch(err=>console.log(err));
    }, []);

    const [filter, setFilter] = useState('recommended');

    const filteredProducts = products.filter((item)=> {

        const categoryMatch = item.category2 === filter;
    
        return categoryMatch;
      });

  return (
    <center>
        <div className='recent_flex'>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Recent Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"500px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn'>
                        Recent View</button></div>
                    <div><button className='filter_btn' onClick={()=>setFilter("best seller")}>
                        Bestseller</button></div>
                    <div><button className='filter_btn' onClick={()=>setFilter("popular")}>
                        Popular</button></div>
                    <div><button className='filter_btn' onClick={()=>setFilter("recommended")}>
                        Recommended</button></div>
                </div>
            </div>
            <div className='r_pro_flex'>
                {filteredProducts?.map(e=>(
                    <RCard imgurl={e.imgurl} proname={e.proname} prorate={e.prorate} _id={e._id}/>
                ))}
            </div>
        </div>
    </center>
  )
}
