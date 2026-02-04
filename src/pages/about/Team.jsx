import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Team = () => {
    const [data, setData] = useState([])
        useEffect(()=>{
        fetch('/team.json')
            .then(res => res.json())
            .then(json => setData(json));
        }, []);

    const outcome = [
        {image: "images/key Icon.png", title: "Deals that move faster", desc: "From offer to closing, we keep it clear."},
        {image: "images/secure Icon.png", title: "Fewer bumps later", desc: "Strong agreements mean less stress."},
        {image: "images/todo Icon.png", title: "Details you can trust", desc: "Every signature and step on time."},
        {image: "images/home Icon.png", title: "Homes built on trust", desc: "Buying, selling, renting – done right."},
    ]

  return (
    <div>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='lg:flex justify-between gap-30'>
                <div className='lg:w-1/4 text-balance'>
                    <h6 className='mb-4 text-[18px]'>HILLCREST TEAM</h6>
                    
                </div>

                <div className='lg:w-3/4'>
                    <p className='text-[20px] mb-4'>At Hillcrest Realty, our realtors know the market and care about the details. Each is certified, experienced, and focused on helping you move with confidence. Looking for someone specific? Visit our team page to learn more.</p>
                    <Link to='/team'><button className='border border-neutral-400'>View All</button></Link>

                    <div className='mt-18 lg:mt-20 md:grid lg:grid-cols-2 md:grid-cols-2 gap-x-6 '>
                        {data.map((team)=>{
                        return (
                        <div key={team.id} className='bg-neutral-100 rounded-lg mb-6'>
                            <div className='flex gap-6 p-6'>
                                <div>
                                    <img src={team.image} alt="" className='w-14 rounded-full'/>
                                </div>
                                <div>
                                   <h4 className='text-[20px] font-semibold'>{team.name}</h4>
                                   <p className='text-[16px] mb-4'>{team.role}</p>
                                   <Link to={`/team/${team.id}`}><button className='border border-neutral-400'>Show More</button></Link>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                
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
    </div>
  )
}

export default Team