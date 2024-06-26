import React from 'react';
import img from "../assets/rpro.png";
import { useNavigate } from 'react-router-dom';

export default function CCard() {

    const navigate=useNavigate();

    function like(){
    
    }

  return (
    <div className='rcard' >
        <div onClick={()=>navigate('/productpage')}>
            <img src={img} alt=""/>
        </div>
        <div className='rcard_content'>
          <div className='like_icon' onClick={()=>like()}><i class="bi bi-heart" ></i></div>
          <button className='addcart_btn' onClick={()=>navigate('')}
          style={{
            border:"1.5px solid #00000012",padding:"7px 20px 7px 20px",borderRadius:"7px",fontSize:"13.5px",color:"gray",width:"90%"
            }}>
            REMOVE FROM CART
            </button>
          <div onClick={()=>navigate('/productpage')}>Fantastic Iron Clock</div>
          <div onClick={()=>navigate('/productpage')} style={{color:"orange"}}>986.00</div>
        </div>
    </div>
  )
}
