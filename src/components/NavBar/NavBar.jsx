
"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


const NavBer= ({}) => {
	return (
		<Navbar className="py-5 justify-evenly bg-transparent">
		  <NavbarContent className="flex">
		  	<img src="https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/401813245_187419737751830_8465570901511260162_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BBNDfaJhIQ0AX_-9Bkh&_nc_ht=scontent.flpb2-1.fna&oh=00_AfCjOiT-d_Tvv4P9plfyvI6Dr2pcZjNaf9OCa9Ds0jQ3xg&oe=6558E869" 
			alt="lindo_icono" className="w-16 h-16 rounded-full  border-orange-500 border solid 2rem color #FFB457" />
		
			<p className="font-kdam px-3 font-bold text-lg text-inherit">FREDY'S FAZBER</p>
		  </NavbarContent>
	
		  <NavbarContent className="hidden sm:flex gap-4" justify="center">
			<NavbarItem>
			  <Link color="foreground" href="#">
				Usuarios
			  </Link>
			</NavbarItem>
			<NavbarItem isActive>
			  <Link href="#" aria-current="page" color="warning">
				Recetas
			  </Link>
			</NavbarItem>
			<NavbarItem>
			  <Link color="foreground" href="#">
				Menus
			  </Link>
			</NavbarItem>
		  </NavbarContent>
	
		  <NavbarContent as="div" justify="end">
			<Dropdown placement="bottom-end">
			  <DropdownTrigger>
			 <Avatar
				  isBordered
				  as="button"
				  className="transition-transform"
				  color="warning"
				  name="Jason Hughes"
				  size="lg"
				  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
				/> 
			  </DropdownTrigger>
			  <DropdownMenu aria-label="Profile Actions" variant="flat">
				<DropdownItem key="profile" className="h-14 gap-2">
				  <p className="font-semibold">Bienvenido:</p>
				  <p className="font-semibold">Inserta tu nombre</p>
				</DropdownItem>
				<DropdownItem key="settings">Menus</DropdownItem>
				<DropdownItem key="team_settings">Recetas</DropdownItem>
				<DropdownItem key="analytics">Ingredientes</DropdownItem>
				<DropdownItem key="logout" color="danger">
				  Salir
				</DropdownItem>
			  </DropdownMenu>
			</Dropdown>
		  </NavbarContent>
		</Navbar>
	  );
	}

export default NavBer;