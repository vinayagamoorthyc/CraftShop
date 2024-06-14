import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import './MyProfile.css';
import { Avatar } from '@nextui-org/react';
import img from '../assets/profile.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditProfilePage() {
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

    const updateUser=()=>{
      axios.put("http://localhost:3001/updateUser/"+userid, {username, email, phone, firstname, lastname, bio, country, citystate, postalcode, street})
      .then(()=>{
        navigate("/profilepage")
      }).catch(err=>console.log(err))
    }

  return (
    <center>
        <NavBar/>
        <hr />
        <div className='profile_flex'>
          <div className='font' style={{fontSize:"30px"}}>Edit Profile</div>
          <div className='profile_img_box'>
            <Avatar className="w-20 h-20 text-large" size="lg" src={img} />
            <div>
              <div style={{fontSize:"19px"}}><input type="text" placeholder='' className='shop_btn' style={{width:"250px"}} value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
              </div>
              <div style={{color:"gray",fontSize:"15px"}}>{citystate}</div>
              <div style={{color:"gray",fontSize:"15px"}}>Member</div>
            </div>
            <button className='shop_btn' style={{
              color:"gray",borderColor:"#00000027",position:"absolute",top:"20px",right:"20px",fontSize:"13px",padding:"5px",borderRadius:"3px"
              }}
              onClick={()=>updateUser()}
              >
              &nbsp;Save&nbsp;&nbsp; <i class="bi bi-pencil-square"></i>&nbsp;
            </button>
          </div>
          <div className='profile_box'>
            <div className='profile_content_box'>
              <div className='font' style={{marginBottom:"20px",color:"gray"}}>Personal Information</div>
              <div className="profile_content_flex">
                <div>
                  <div style={{color:"gray"}}>First Name</div>
                    <p><input type="text" placeholder='' className='shop_btn' style={{width:"150px"}} value={firstname}
                      onChange={(e)=>setFirstname(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Last Name</div>
                    <p><input type="text" placeholder='' className='shop_btn' style={{width:"150px"}} value={lastname}
                      onChange={(e)=>setLastname(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Email Address</div>
                  <p><input type="email" placeholder='' className='shop_btn' style={{width:"150px"}} value={email}
                      onChange={(e)=>setEmail(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Phone</div>
                  <p><input type="number" placeholder='' className='shop_btn' style={{width:"150px"}} value={phone}
                      onChange={(e)=>setPhone(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Bio</div>
                  <p><input type="text" placeholder='' className='shop_btn' style={{width:"150px"}} value={bio}
                      onChange={(e)=>setBio(e.target.value)}/>
                    </p>
                </div>
              </div>
            </div>
            <div className='profile_content_box'>
              <div className='font' style={{marginBottom:"15px",color:"gray"}}>Postal Address</div>
              <div className="profile_content_flex">
                <div>
                  <div style={{color:"gray"}}>Country</div>
                  <p><input type="text" placeholder='' className='shop_btn' style={{width:"150px"}} value={country}
                      onChange={(e)=>setCountry(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>City/State</div>
                  <p><input type="text" placeholder='' className='shop_btn' style={{width:"150px"}} value={citystate}
                      onChange={(e)=>setCitystate(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Postal Code</div>
                  <p><input type="number" placeholder='' className='shop_btn' style={{width:"150px"}} value={postalcode}
                      onChange={(e)=>setPostalcode(e.target.value)}/>
                    </p>
                </div>
                <div>
                  <div style={{color:"gray"}}>Local Street</div>
                  <p><input type="text" placeholder='' className='shop_btn' style={{width:"150px"}} value={street}
                      onChange={(e)=>setStreet(e.target.value)}/>
                    </p>
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
