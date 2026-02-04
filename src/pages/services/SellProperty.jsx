import React from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import WhyChoose from '../../components/WhyChoose'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'


const SellProperty = () => {

  return (
    <main>
        <NavBar/>
        <div className='w-11/12 container mx-auto pt-36'>
            <h1 className='text-5xl text-balance max-w-175 font-medium'>Sell your home with confidence and care</h1>
        </div>
        <img src="/images/sell-home.png" alt="" className='w-full object-cover h-168.75 py-10'/>
        <section className='w-11/12 container mx-auto'>
            <div className='md:flex gap-20'>
                <div className=''>
                    <p className='mb-4'>OUR APPROACH</p>
                </div>

                <div className=''>
                    <div className='mb-24'>
                        <h3 className='text-2xl text-balance md:text-3xl font-medium'>Selling isn’t just a transaction. It’s a story — one we help you tell well. With experienced agents, clear steps, and a plan shaped around your goals, we make sure your home stands out and your path to sold feels steady from start to finish.</h3>
                    </div>

                    <div className='p-8 md:p-0 md:grid lg:grid-cols-3 gap-10 mb-20'>
                        <div className='lg:p-5 flex flex-col gap-24 '>
                            <p className='text-[20px] font-medium'>01</p>
                            <div>
                                <h3 className='text-2xl md:text-3xl mb-4 font-medium lg:text-balance'>Prep that pays off in sales</h3>
                                <p className='text-balance'>We map timing, pricing, and quick value lifts using comps, demand data, and your goals. We craft the home’s story, highlight what’s rare and useful, and remove anything that doesn’t move offers.</p>
                            </div>
                        </div>
                        <div className='lg:p-5 flex flex-col gap-24 '>
                            <p className='text-[20px] font-medium'>02</p>
                            <div className=''>
                                <h3 className='text-2xl md:text-3xl mb-4 font-medium lg:text-balance'>Launch with intention</h3>
                                <p className='text-balance'>We stage what matters, commission sharp photography, and write copy with a point. We launch where buyers already are, run spacious showings, and capture feedback fast to keep momentum and focus.</p>
                            </div>
                        </div>
                        <div className='lg:p-5 flex flex-col gap-24 '>
                            <p className='text-[20px] font-medium'>03</p>
                            <div>
                                <h3 className='text-2xl md:text-3xl mb-4 font-medium lg:text-balance'>Offer to close, clearly</h3>
                                <p className='text-balance'>We run a transparent bidding process with steady updates and simple choices. We negotiate to your goals, coordinate paperwork and timelines precisely, and keep everyone aligned from accepted offer to closing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-neutral-100 py-24'>
            <div className='w-11/12 container mx-auto md:grid grid-cols-2 space-x-12'>
                <div className='md:flex flex-col justify-center'>
                    <h1 className='text-3xl mb-4 font-medium'>Ready to sell your home?</h1>
                    <p className='mb-10 text-balance'>A short call with an agent can change how you sell. Lets map your next move together.</p>
                    <Link to='/contact'><button className='border border-black mb-8 w-42 max-w-full'>Start your sale</button></Link>
                </div>
                <div>
                    <img src="/images/pexels-asphotography-94865.jpg" alt="" className='rounded-lg'/>
                </div>
            </div>
        </section>

        <WhyChoose/>
        <CTA/>
        <Footer/>

    </main>
  )
}

export default SellProperty