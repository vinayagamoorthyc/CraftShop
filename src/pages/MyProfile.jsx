import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import './MyProfile.css';
import { Avatar } from '@nextui-org/react';
import img from '../assets/profile.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
  const navigate=useNavigate();

  const userid = window.localStorage.getItem("userid");
  const [username, setUsername]=useState("Nothing to show");
  const [email, setEmail]=useState("Nothing to show");
  const [phone, setPhone]=useState("00000 00000");
  const [firstname, setFirstname]=useState("Nothing to show");
  const [lastname, setLastname]=useState("Nothing to show");
  const [bio, setBio]=useState("Nothing to show");
  const [country, setCountry]=useState("Nothing to show");
  const [citystate, setCitystate]=useState("Nothing to show");
  const [postalcode, setPostalcode]=useState("000 000");
  const [street, setStreet]=useState("Nothing to show");

  useEffect(()=>{
    axios.get("http://localhost:3001/getUser/"+userid)
    .then((e)=>{
      setUsername(e.data.username);
      setEmail(e.data.email);
      setPhone(e.data.phone);
      setFirstname(e.data.firstname);
      setLastname(e.data.lastname);
      setBio(e.data.bio);
      setCountry(e.data.country);
      setCitystate(e.data.citystate);
      setPostalcode(e.data.postalcode);
      setStreet(e.data.street);
    }).catch(err=>console.log(err));
    }, [userid]);

  return (
    <center>
        <NavBar/>
        <hr />
        <div className='profile_flex'>
          <div className='font' style={{fontSize:"30px"}}>My Profile</div>
          <div className='profile_img_box'>
            <Avatar className="w-20 h-20 text-large" size="lg" src={img} />
            <div>
              <div style={{fontSize:"19px"}}>{username}</div>
              <div style={{color:"gray",fontSize:"15px"}}>{citystate}</div>
              <div style={{color:"gray",fontSize:"15px"}}>Member</div>
            </div>
            <button className='shop_btn' style={{
              color:"gray",borderColor:"#00000027",position:"absolute",top:"20px",right:"20px",fontSize:"13px",padding:"5px",borderRadius:"3px"
              }}
              onClick={()=>navigate(`/editprofile/${userid}`)}
              >
              &nbsp;Edit&nbsp;&nbsp; <i class="bi bi-pencil-square"></i>&nbsp;
            </button>
          </div>
          <div className='profile_box'>
            <div className='profile_content_box'>
              <div className='font' style={{marginBottom:"20px",color:"gray"}}>Personal Information</div>
              <div className="profile_content_flex">
                <div>
                  <div style={{color:"gray"}}>First Name</div>
                  <p>{firstname}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Last Name</div>
                  <p>{lastname}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Email Address</div>
                  <p>{email}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Phone</div>
                  <p>{phone}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Bio</div>
                  <p>{bio}</p>
                </div>
              </div>
            </div>
            <div className='profile_content_box'>
              <div className='font' style={{marginBottom:"15px",color:"gray"}}>Postal Address</div>
              <div className="profile_content_flex">
                <div>
                  <div style={{color:"gray"}}>Country</div>
                  <p>{country}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>City/State</div>
                  <p>{citystate}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Postal Code</div>
                  <p>{postalcode}</p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Local Street</div>
                  <p>{street}</p>
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
