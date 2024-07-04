import React, { useEffect, useState } from 'react';
import './ShopPage.css';
import RCard from '../cards/RCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer.jsx';
import axios from 'axios';

export default function ShopPage() {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        window.scrollTo(0,0);
        axios.get('http://localhost:3001/getProduct')
        .then(e =>{
        setProducts(e.data);
        })
        .catch(err=>console.log(err));
        }, []);

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const filteredProducts = products.filter( (item)=> {

        const categoryMatch = filter === 'all' || item.category === filter;
    
        const searchMatch = item.proname.toLowerCase().includes(search.toLowerCase());
    
        return categoryMatch&searchMatch;
      });

  return (
    <center>
        <NavBar/>
        <hr />
        <div className='recent_flex' style={{marginTop:"25px"}}>
            <div className='p_head_flex'>
                <div className='font' style={{fontSize:"33px"}}>Handy Products</div>
                <hr style={{border:"1.5px solid #",minWidth:"365px"}}/>
                <div className='p_head_arrows' style={{gap:"10px"}}>
                    <div><button className='filter_btn' onClick={()=>setFilter("Garden")}>
                        Garden</button></div>
                    <div><button className='filter_btn' onClick={()=>setFilter("Kitchen")}>
                        Kitchen</button></div>
                    <div><button className='filter_btn' onClick={()=>setFilter("Candles")}>
                        Candles</button></div>
                    <div><button className='filter_btn' onClick={()=>setFilter("Homeware")}>
                        Homewares</button></div>
                    <div>
                        <input type="text"
                        style={{border:"1px solid black",padding:"8px 15px 8px 20px",borderRadius:"10px"}} onChange={handleSearchChange}
                        placeholder='Search'/>
                    </div>
                </div>
            </div>
            <div className='r_pro_flex' style={{marginBottom:"50px"}}>
            {filteredProducts?.map(e=>(
                <RCard imgurl={e.imgurl} proname={e.proname} prorate={e.prorate} id={e._id}/>
                ))}
            </div>
        </div>
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
        <Footer/>
    </center>
  )
}
