import React from 'react';
import "./RCard.css";
import { useNavigate } from 'react-router-dom';

export default function RCard(props) {

  const navigate=useNavigate();

  function like(){
    
  }

  return (
    <div className='rcard' onClick={()=>navigate(`/productpage/${props.id}`)}>
        <div>
            <img src={props.imgurl} alt=""/>
        </div>
        <div className='rcard_content'>
          <div className='like_icon' onClick={()=>like()}><i class="bi bi-heart" ></i></div>
          <button className='addcart_btn' onClick={()=>navigate('')}
          style={{
            border:"1.5px solid #00000012",padding:"7px 20px 7px 20px",borderRadius:"7px",fontSize:"13.5px",color:"gray",width:"90%"
            }}>
            ADD TO CART</button>
          <div >{props.proname}</div>
        <div style={{color:"orange"}}>₹ {props.prorate}.00</div>
        </div>
    </div>
  )
}
