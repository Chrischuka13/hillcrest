import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import logo from '/images/Hillcrest logo.png'
import { Link } from "react-router-dom";



const NavBar = () => {
    const[isOpen, setIsOpen] = useState(false)
  return (
    <section className="">
        <header className=''>
            <nav className='bg-white fixed w-full z-10 py-2'>
                <div className='w-11/12 container py-2 mx-auto flex justify-between items-center'>
                    <a href='/#'><img src={logo} className="w-22.5 md:w-30" alt=""/></a>
                    <div className='hidden lg:flex gap-6 items-center text-[#0A0A0A]'>
                        <Link to="/services" className='hover:text-neutral-700 transition-transform duration-500 hover:scale-110'>Services</Link>
                        <Link to="/listings" className='hover:text-neutral-700 transition-transform duration-500 hover:scale-110'>Listings</Link>
                        <Link to='/about' className='hover:text-neutral-700 transition-transform duration-500 hover:scale-110'>About</Link>
                        <Link to="/team" className='hover:text-neutral-700 transition-transform duration-500 hover:scale-110'>Team</Link>
                        
                        <Link to='/contact'><button className="hidden md:block text-black border border-black ">Contact</button></Link>
                    </div>
                    
                    <button onClick={()=> setIsOpen(!isOpen)} className="lg:hidden hover:cursor-pointer">
                        {isOpen? <X /> : <Menu />}
                        
                    </button>
                </div>
                
                
                {isOpen && (
                <div className="lg:hidden w-11/12 container mx-auto bg-white text-[#0A0A0A] m-2 text-start font-medium  h-screen md:h-full">
                    <Link to='/services' className="block text-3xl hover:text-gray-400 hover:cursor-pointer mb-4">Services</Link>

                    <Link to='/listings' className="block text-3xl hover:text-gray-400 hover:cursor-pointer mb-4">Listings</Link>

                    <Link to='/about' className="block text-3xl hover:text-gray-400 hover:cursor-pointer mb-4">About</Link>

                    <Link to='/team' className="block text-3xl hover:text-gray-400 hover:cursor-pointer mb-4">Team</Link>

                    <Link to='/contact' className="block text-3xl hover:text-gray-400 hover:cursor-pointer mb-4">Contact</Link>
                </div>
                )}
            </nav>
        </header>
    </section>
    
  )
}

export default NavBar