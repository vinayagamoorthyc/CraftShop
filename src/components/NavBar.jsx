import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import logo from '../assets/logo.png';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
         <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBlurred={true} className='navbar' >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={logo} alt="CRAFT" width={110} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="#">
          &nbsp;&nbsp;&nbsp;Shop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          &nbsp;&nbsp;&nbsp;Elements &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          &nbsp;&nbsp;&nbsp;Contact
          </Link>
        </NavbarItem>
                
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
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
