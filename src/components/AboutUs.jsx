import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    const outcome = [
        {image: "images/key Icon.png", title: "Deals that move faster", desc: "From offer to closing, we keep it clear."},
        {image: "images/secure Icon.png", title: "Fewer bumps later", desc: "Strong agreements mean less stress."},
        {image: "images/todo Icon.png", title: "Details you can trust", desc: "Every signature and step on time."},
        {image: "images/home Icon.png", title: "Homes built on trust", desc: "Buying, selling, renting – done right."},
    ]

  return (
    <main>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='lg:flex justify-between gap-30'>
                <div className='lg:w-1/2 text-balance'>
                    <h6 className='mb-4 text-[18px]'>ABOUT US</h6>
                    <h2 className='text-[32px] leading-9 font-medium mb-8'>The move matters as much as the destination</h2>
                </div>
                <div className='lg:w-1/2'>
                    <p className='text-[18px] mb-4 text-balance'>A new home marks a turning point. Maybe you’re upsizing, downsizing, or just starting out. Wherever you are, the details can feel daunting. That’s where we come in. Hillcrest Realty handles the parts that cause stress—pricing, marketing, paperwork—so you can focus on what’s next. <br /> <br /> Our team listens first, explains clearly, and keeps things steady until the keys are in your hand.</p>
                    <Link to='about'><button className='border border-neutral-400'>About</button></Link>
                </div>
            </div>

            <div className='mt-18 lg:mt-30 md:grid lg:grid-cols-4 md:grid-cols-2 gap-x-6 gap-y-30'>
                <div>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>7-day</h1>
                    <h4 className='text-[20px]'>Listing-to-showing</h4>
                </div>
                <div>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>300+</h1>
                    <h4 className='text-[20px]'>Rentals placed</h4>
                </div>
                <div>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>98%</h1>
                    <h4 className='text-[20px]'>Client satisfaction</h4>
                </div>
                <div>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>15+</h1>
                    <h4 className='text-[20px]'>Years Experience</h4>
                </div>
                
            </div>
        </section>

        <section className='w-11/12 container mx-auto py-16'>
            <div>
                <h2 className='font-medium mb-6 text-[36px]'>Our Offering</h2>
                <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                    <div className='relative hover:cursor-pointer transition-transform duration-500 hover:scale-105 mb-8'>
                        <div class="absolute inset-0 bg-black/40 rounded-lg"></div>
                        <img src="images/val.jpg" alt="" className='rounded-lg w-full'/>           
                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-20 text-white text-center px-6'>
                            <h6 className=''>KNOW</h6>
                            <h1 className='max-w-60 leading-12 text-[46px] font-semibold'>Get a valuation</h1>
                            <Link to='/services/valuation' className='w-full'><button className='border border-white w-full'>Get your estimate</button></Link>
                        </div>
                    </div>
                    <div className='relative hover:cursor-pointer transition-transform duration-500 hover:scale-105 mb-8'>
                        <div class="absolute inset-0 bg-black/40 rounded-lg"></div>
                        <img src="images/sell.jpg" alt="" className='rounded-lg'/>
                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-20 text-white text-center px-6'>
                            <h6>LIST</h6>
                            <h1 className='max-w-60 leading-12 text-[46px] font-semibold'>Sell your home</h1>
                            <Link to='/services/sell' className='w-full'><button className='border border-white w-full'>Start selling</button></Link>
                        </div>
                    </div>
                    <div className='relative hover:cursor-pointer transition-transform duration-500 hover:scale-105 mb-8'>
                        <div class="absolute inset-0 bg-black/40 rounded-lg"></div>
                        <img src="images/buy.jpg" alt="" className='rounded-lg'/>
                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-20 text-white text-center px-6'>
                            <h6>MOVE</h6>
                            <h1 className='max-w-60 leading-12 text-[46px] font-semibold'>Buy a home</h1>
                            <Link to='/listings' className='w-full'><button className='border border-white w-full'>Find home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-11/12 container mx-auto py-16'>
            <div className='lg:flex gap-20'>
                <div>
                    <img src="images/jgvt.png" alt="" className='mb-8 w-full lg:w-90'/>
                </div>
             
                <div className=''>
                    <div className='lg:mb-20'>
                        <h6 className='mb-2'>HOW WE WORK</h6>
                        <h2 className='leading-9 font-medium text-balance mb-10 text-[32px]'>We make moving feel lighter</h2>
                    </div>
                    <div className='md:grid grid-cols-2 gap-12'>
                        {outcome.map((outcomes, i)=>{
                            return (
                            <div key={i} className='mb-8 text-balance'>
                                <img src={outcomes.image} alt="" className='mb-4'/>
                                <p className='text-neutral-900 '>{outcomes.title}</p>
                                <p className='text-neutral-600 '>{outcomes.desc}</p>
                            </div>
                        )      
                        })}
                    </div> 
                </div>
            </div>   
        </section>

        
    </main>
  )
}

export default AboutUs