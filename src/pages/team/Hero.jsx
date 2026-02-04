import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
        const [data, setData] = useState([])
    
        useEffect(()=>{
        fetch('/team.json')
          .then(res => res.json())
          .then(json => setData(json));
        }, []);
        
  return (
    <section>
        <div className='w-11/12 container mx-auto py-30'>
            <div className=''>
                <div className='md:flex justify-between items-end mb-12'>
                    <div className='mt-10'>
                        <h1 className='text-[46px] max-w-125 leading-12 font-medium mb-8 md:mb-0'>Meet the realtors who guide your next move</h1>
                    </div>
                    <div>
                        <Link to='/contact'><button className='border border-black'>Contact</button></Link>
                    </div>
                </div>

                <div className='md:grid grid-cols-3 gap-x-5 gap-y-10'>
                    {data.map((people)=> (
                        <div key={people.id}>
                            <img src={people.image} alt="" className='mb-2 w-full'/>
                            <h4 className='text-[20px] font-medium'>{people.name}</h4>
                            <p className='text-[14px] text-neutral-600 mb-2'>{people.role}</p>
                            <Link to={`mailto:${people.email}`}>{people.email}</Link>
                            <p className='mb-2'>{people.phone}</p>
                            <Link to={`/team/${people.id}`} key={people.id}>
                                <button className='border border-black mb-8'>Show more</button>
                            </Link> 
                        </div>
                    ))}       
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero