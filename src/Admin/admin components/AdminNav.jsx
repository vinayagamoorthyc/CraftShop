import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import logo from '/Users/vinayagamoorthyc/Documents/MERN Training/Last Project/craftshop/src/assets/logo.png';

export default function AdminNav() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

  return (
    <div id='adminnav'>
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
          <button>
           Contact
          </button>
        </NavbarItem>
                
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} color="warning" href="/signup" variant="flat">
            Sign Out
          </Button>
        </NavbarItem>
        
      </NavbarContent>

      <NavbarMenu>

          <NavbarMenuItem>
            <Link className="w-full" href="#" size="lg">
                Home
            </Link>
          </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
    </div>
  )
}
