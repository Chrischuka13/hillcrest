import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='relative'>
        <div className='w-11/12 container mx-auto py-12'>
          <div className="absolute inset-0 bg-black/30 rounded-lg top-25"></div>
          <h2 className='max-w-125 leading-10 font-medium mb-8 text-[32px] text-white absolute bottom-70'>Want to know your home’s worth? Get a free, expert valuation today.</h2>
          <Link to='/services/valuation'><button className='border border-white text-white absolute top-90'>Learn More</button></Link>
        </div>
        <img src="/images/cta.jpg" alt="" className='bg-fixed w-full object-cover h-129.25'/>
    </section>
  )
}

export default CTA