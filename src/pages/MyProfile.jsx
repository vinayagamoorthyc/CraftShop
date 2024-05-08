import React from 'react';
import NavBar from '../components/NavBar';
import './MyProfile.css';
import { Avatar } from '@nextui-org/react';
import img from '../assets/profile.jpg';
import Footer from '../components/Footer';

export default function MyProfile() {
  return (
    <center>
        <NavBar/>
        <hr />
        <div className='profile_flex'>
          <div className='font' style={{fontSize:"30px"}}>My Profile</div>
          <div className='profile_img_box'>
            <Avatar className="w-20 h-20 text-large" size="lg" src={img} />
            <div>
              <div style={{fontSize:"19px"}}>Vinayaga Moorthy</div>
              <div style={{color:"gray",fontSize:"15px"}}>Coimbatore,Tamil Nadu</div>
              <div style={{color:"gray",fontSize:"15px"}}>Member</div>
            </div>
            <button className='shop_btn' style={{
              color:"gray",borderColor:"#00000027",position:"absolute",top:"20px",right:"20px",fontSize:"13px",padding:"5px",borderRadius:"3px"
              }}>
              &nbsp;Edit&nbsp;&nbsp; <i class="bi bi-pencil-square"></i>&nbsp;
            </button>
          </div>
          <div className='profile_box'>
            <div className='profile_content_box'>
              <div className='font' style={{marginBottom:"20px",color:"gray"}}>Personal Information</div>
              <div className="profile_content_flex">
                <div>
                  <div style={{color:"gray"}}>First Name</div>
                  <p>Vinayaga</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Last Name</div>
                  <p>Moorthy</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Email Address</div>
                  <p>vinayagamoorthy2709@gmail.com</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Phone</div>
                  <p>9360810429</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Bio</div>
                  <p>Traveller, Photography</p>
                </div>
              </div>
            </div>
            <div className='profile_content_box'>
              <div className='font' style={{marginBottom:"15px",color:"gray"}}>Postal Address</div>
              <div className="profile_content_flex">
                <div>
                  <div style={{color:"gray"}}>Country</div>
                  <p>India</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>City/State</div>
                  <p>Coimbatore, Tamil Nadu</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Postal Code</div>
                  <p>614622</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Local Street</div>
                  <p>Othakal Mandapam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{width:"85%",border:"1px solid #00000012",marginBottom:"60px"}}/>
        <Footer/>
    </center>
  )
}
