
"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


const NavBer= ({}) => {
	return (
		<Navbar className="flex py-5 justify-center bg-transparent rounded-b-full">
		  <NavbarContent className="flex">
			<Link href="/">
			<img src="https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/401813245_187419737751830_8465570901511260162_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BBNDfaJhIQ0AX_-9Bkh&_nc_ht=scontent.flpb2-1.fna&oh=00_AfCjOiT-d_Tvv4P9plfyvI6Dr2pcZjNaf9OCa9Ds0jQ3xg&oe=6558E869" 
			alt="lindo_icono" className="w-16 h-16 rounded-full  border-orange-500 border solid 2rem color #FFB457" />
			<p className="font-kdam px-3 font-bold text-lg text-inherit text-orange-500">FREDY'S FAZBER</p>
			</Link>
		  	
		
			
		  </NavbarContent>
	
		  <NavbarContent className="hidden sm:flex  ml-20" justify="center">
			<NavbarItem>
			  <Link color="foreground" href="/pages/usuarios" className="hover:text-orange-400">
				Usuarios
			  </Link>
			</NavbarItem>
			<NavbarItem >
			  <Link href="#" aria-current="page" color="foreground" className="hover:text-orange-400">
				Pizzas
			  </Link>
			</NavbarItem>
			<NavbarItem>
			  <Link color="foreground" href="/pages/menus"  className="hover:text-orange-400">
				Menus
			  </Link>
			</NavbarItem>
			<NavbarItem>
			  <Link color="foreground" href="#" className="hover:text-orange-400">
				Ingredientes
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