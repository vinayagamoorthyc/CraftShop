import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem} from "@nextui-org/react";
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpg'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
         <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBlurred={true} className='navbar'>
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
            Home &nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="#">
          &nbsp;Shop &nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          &nbsp;Elements &nbsp;&nbsp;&nbsp;|
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          &nbsp;Contact
          </Link>
        </NavbarItem>
                
      </NavbarContent>
      <NavbarContent justify="end">

      <NavbarItem>
        <i style={{fontSize:'22px'}} class="bi bi-bag"></i>2
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          <Link href="#" color='warning'>Login</Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        
      </NavbarContent>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="warning"
              name=""
              size="sm"
              src={profile}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">demo@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="my_profile" color='warning'>My Profile</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
