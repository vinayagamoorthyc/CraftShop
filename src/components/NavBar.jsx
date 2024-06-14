import React, { useEffect, useState } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Modal, useDisclosure, ModalContent, ModalFooter, ModalBody, ModalHeader} from "@nextui-org/react";
import logo from '../assets/logo.png'
import profile from '../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [hide,setHide]=useState(true);
    const token = window.localStorage.getItem("token");
    const navigate = useNavigate();
    const logemail=window.localStorage.getItem("email");

    const [report,setReport] = useState();

    useEffect(()=>{
      if(token!=null){
        setHide(false);
      }else{
        setHide(true);
      }
      }, [token]);

    function addReport(e){
      e.preventDefault();
      axios.post("http://localhost:3001/addReport",{report})
      .then(()=>alert("ok"))
      .catch(err=>console.log(err));
  }

  const logout=()=>{
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <div>
         <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll={true} maxWidth='xl'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand onClick={()=>navigate("/adminhome")}>
          <img src={logo} alt="CRAFT" width={110} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home &nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="/shoppage">
          &nbsp;Shop All &nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/aboutpage">
          &nbsp;About Us &nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        <NavbarItem >
          <button onClick={()=>onOpen()}>
           Contact
          </button>
        </NavbarItem>
                
      </NavbarContent>
      <NavbarContent justify="end">

      <NavbarItem onClick={()=>navigate("/cartpage")} hidden={hide}>
        <i style={{fontSize:'22px'}} class="bi bi-bag"></i>2
        </NavbarItem>

        <div hidden={!hide}>
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" color='warning' >Login</Link>
        </NavbarItem></div>

        <NavbarItem hidden={!hide}>
          <Button as={Link} color="warning" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        
      </NavbarContent>
      <div hidden={hide}>
      <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar 
              as="button"
              className="transition-transform"
              color="warning"
              name=""
              size="md"
              src={profile}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold" style={{color:"gray"}}>{logemail}</p>
            </DropdownItem>
            <DropdownItem key="profile" color='warning' href='/profilepage'>My Profile</DropdownItem>
            <DropdownItem key="edit" href='/likepage'>Liked Items</DropdownItem>
            <DropdownItem key="help_and_feedback" onClick={()=>onOpen()}>Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={()=>logout()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown></div>
      <NavbarMenu>
        
          <NavbarMenuItem>
            <Link className="w-full" href="#" size="lg">
                Home
            </Link>
          </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>

    {/* ------------------------------------------------- contact modal ---------------------------------------- */}

    <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop='opaque'
        size='sm'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font" 
              style={{fontSize:"21px"}}>Contact Us</ModalHeader>
              <ModalBody>
                  <form action='#' onSubmit={addReport} style={{display:"flex",flexWrap:"nowrap"}}>
                    <input type="text" name="" id="newsemail" onChange={(e)=>setReport(e.target.value)}
                      style={{border:"1.5px solid #00000012",padding:"10px",width:"100%"}} placeholder='Leave your message here'/>
                    <button type='submit' style={{border:"1.5px solid #00000012",padding:"10px",width:"18%"}}>
                      <i className='bi bi-chat-quote'></i>
                    </button>
                  </form>
                  <div>
                    <p className='shop_btn' style={{fontSize:"15px",color:"gray",border:"1px solid gray"}}>
                        Using Email &nbsp;&nbsp;
                        <label 
                          style={{borderLeft:"1px solid gray",padding:"13px 0px 13px 10px",textAlign:"center"}} class="">
                          " handcrafts112@gmail.com "
                        </label>
                    </p>
                  </div>
                  <div style={{display:'flex',alignItems:"center",fontSize:'14px',color:"gray"}}>
                    <hr style={{border:"1px solid #00000012",minWidth:"155px"}}/> &nbsp;
                    OR&nbsp;
                    <hr style={{border:"1px solid #00000012",minWidth:"150px"}}/>
                  </div>
                  <div style={{display:"flex",gap:"50px",justifyContent:"center",fontSize:"20px",color:"gray"}}>
                      <i className='bi bi-instagram'></i>
                      <i className='bi bi-linkedin'></i>
                      <i className='bi bi-github'></i>
                      <i className='bi bi-browser-chrome'></i>
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    
    </div>
  )
}


