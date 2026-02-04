import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (                        
    <section className='bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/hero.png)] bg-cover h-screen bg-fixed flex items-end justify-center'>
        <div className='w-11/12 container mx-auto py-10 sm:flex justify-between relative'>
            <div className='max-w-120 sm:max-w-90 text-white '>
                <h6 className='md:text-[16px] font-medium mb-4'>REAL ESTATE PARTNER</h6>
                <h1 className='text-4xl lg:text-[48px] font-medium mb-8'>Clear guidance for every move</h1>
                <Link to='/listings'><button className='border border-white'>Browse Listings</button></Link>
            </div>

            <div className='bg-white p-2 rounded-md  h-full flex gap-14 items-center mt-20'>
                <div className='flex relative '>
                    <div>
                        <img src="images/jkjhv.png" alt=""  className='w-14 rounded-full border border-white'/>
                    </div>
                    <div>
                        <img src="images/vghcg.png" alt="" className='w-14 rounded-full border-[3px] border-white absolute left-12'/>
                    </div>
                </div>
                
                <div className=''>
                    <div>
                        <p className='font-medium '>Get Home Valuation</p>
                        <p className='text-[12px] font-extralight'>Talk to an expert</p>
                    </div>
                    
                </div>
                <div className=''>
                        <Link to='/services/valuation'><img src="images/arrow-side.png" alt="" className='w-4 flex items-start'/></Link>
                    </div>
            </div>
            
        </div>z
    </section>
  )
}

export default Hero