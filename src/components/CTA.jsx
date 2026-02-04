import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/cta.jpg)] bg-center bg-cover bg-fixed h-153.25 lg:h-128.25 '>
        <div className='w-11/12 container mx-auto py-12 text-white '>
          <h2 className='max-w-125 leading-10 font-medium mb-8 text-[32px]'>Want to know your home’s worth? Get a free, expert valuation today.</h2>
          <Link to='/services/valuation'><button className='border border-white'>Learn More</button></Link>
        </div>
    </section>
  )
}

export default CTA