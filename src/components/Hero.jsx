import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (                        
    <section className='relative'>
        <div className='w-11/12 container mx-auto py-10  '>
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <div className='absolute bottom-10 md:flex space-x-30 md:items-end'>
                <div className='max-w-120 sm:max-w-90 text-white '>
                    <h6 className='md:text-[16px] font-medium mb-4'>REAL ESTATE PARTNER</h6>
                    <h1 className='text-5xl text-balance font-medium mb-8'>Clear guidance for every move</h1>
                    <Link to='/listings'><button className='border border-white'>Browse Listings</button></Link>
                </div>
                <div className='bg-white p-2 rounded-md max-w-80.5 h-full flex gap-14 items-center mt-20'>
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
                            <p className='font-medium text-[14px]'>Get Home Valuation</p>
                            <p className='text-[12px] font-extralight'>Talk to an expert</p>
                        </div>
                        
                    </div>
                    <div>
                        <Link to='/services/valuation'><img src="images/arrow-side.png" alt="" className='w-4'/></Link>
                    </div>
                </div>
            </div>
            
            
        </div>
        <img src="/images/hero.png" alt="" className='w-full object-cover h-screen'/>
    </section>
  )
}

export default Hero