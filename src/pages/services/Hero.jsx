import { Link } from 'react-router-dom'
import React from 'react'


const Hero = () => {
    const services = [
        {topic: "01 KNOW", service: "Home valuation", desc: "Knowing what your home is worth gives you options. Whether you’re considering selling, refinancing, or simply want a clearer picture of your equity, we provide valuations that combine market data with local insight. The result is a realistic, easy-to-understand estimate you can rely on when planning your next move.", slug: "valuation"},
        {topic: "02 LIST", service: "Sell your home", desc: "Selling is about more than just listing a property — it’s about positioning it for the best outcome. We help you set the right price, present your home to serious buyers, and manage inquiries and viewings with care. When offers come in, we walk you through contracts and negotiations to ensure the closing is smooth and straightforward.", slug: "sell"},
    ]

  return (
    <main>
        <section className='relative'>
            <div className='w-11/12 container mx-auto py-10'>
                <div class="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className='md:max-w-120 text-white absolute bottom-0'>
                    <h6 className='md:text-[16px] font-medium mb-4'>OUR SERVICES</h6>
                    <h1 className='text-4xl lg:text-[48px]  font-medium mb-8 '>What Hillcrest Realty Can Do for You</h1>
                </div>
            </div>
            <img src="/images/jbvhv.png" alt="" className='w-full object-cover h-129.25'/>
        </section>

        <section className='w-11/12 container mx-auto py-24'>
            {services.map((service)=>{
                return (
                    <div key={service.slug} className='md:flex mb-16'>
                        <div className='md:w-1/2'>
                            <p>{service.topic}</p>
                        </div>
                        <div className='md:w-1/2'>
                            <h3 className='text-3xl font-medium mb-3'>{service.service}</h3>
                            <p className='text-neutral-600 text-[18px] lg:max-w-100 mb-10'>{service.desc}</p>
                            <Link to={`/services/${service.slug}`}>
                                <button className='border border-black mb-8 '>About Service</button>
                            </Link>
                            
                        </div>
                    </div>
                )
            })}

            <div className='md:flex mb-16'>
                <div className='md:w-1/2'>
                    <p>03 MOVE</p>
                </div>
                <div className='md:w-1/2'>
                    <h3 className='text-3xl font-medium mb-3'>Buy a home</h3>
                    <p className='text-neutral-600 text-[18px] lg:max-w-100 mb-10'>Finding the right place can feel overwhelming, but you don’t have to do it alone. At Hillcrest, we guide you through every step — from exploring listings and booking viewings to understanding paperwork and negotiating offers. Our goal is to make the buying process clear and manageable so you can focus on choosing the home that feels right.</p>
                    <Link to='/listings'>
                        <button className='border border-black mb-8 '>About Service</button>
                    </Link>                            
                </div>
            </div>
        </section>
    </main>
    
  )
}

export default Hero