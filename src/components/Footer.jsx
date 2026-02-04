import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='w-11/12 container mx-auto py-12 relative'>
        <h2 className='max-w-125 mb-10 font-medium leading-9 text-[32px]'>Clear guidance for buying and selling homes.</h2>
        <div className='md:grid grid-cols-2'>
            <div className='mb-8'>
                <div className='mb-4'>
                    <h5 className='text-neutral-400 font-semibold mb-2'>Email</h5>
                    <a href="mailto:hello@cresthillrealty.com" className=' hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-semibold'>hello@cresthillrealty.com</a>
                </div>
                <div>
                    <h5 className='text-neutral-400 font-semibold mb-2'>Phone</h5>
                    <a href="tel:08118839920" className=' hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-semibold'>08118839920</a>
                </div>
                
            </div>

            <div className='grid grid-cols-2 gap-10'>
                <div className='flex flex-col'>
                    <h5 className='text-neutral-400 font-semibold mb-2'>Sitemap</h5>
                    <Link to="/" className='hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-medium mb-2'>Home</Link>
                    <Link to="/listings" className='hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-medium mb-2'>Listings</Link>
                    <Link to="/services" className='hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-medium mb-2'>Services</Link>
                    <Link to='/about' className='hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-medium mb-2'>About</Link>
                    <Link to="/team" className='hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-medium mb-2'>Team</Link>
                    <Link to='/contact' className='hover:text-gray-400 hover:cursor-pointer text-neutral-700 font-medium mb-2'>Contact</Link>
                </div>
                <div className='flex flex-col'>
                    <h5 className='text-neutral-400 font-semibold mb-2'>Socials</h5>
                    <a href="#" className=' hover:text-gray-400 hover:cursor-pointer text-neutral-700 mb-2'>Twitter(X)</a>
                    <a href="#" className=' hover:text-gray-400 hover:cursor-pointer text-neutral-700 mb-2'>Facebook</a>
                    <a href="#" className=' hover:text-gray-400 hover:cursor-pointer text-neutral-700 mb-2'>Instagram</a>
                </div>
            </div>
        </div>
        
       
    </section>
  )
}

export default Footer