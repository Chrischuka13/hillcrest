import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Listings = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json));
    }, []);

  return (
    <main>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='flex justify-between items-center mb-12'>
                <h3 className='font-medium text-[32px]'>Recent Listings</h3>
                <Link to='/listings'><button className='border border-black'>View all</button></Link>
            </div>

            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
                {data.map((house)=>{
                    return (
                        <div key={house.id} className=''>
                            <img src={house.image.home} alt="" className='mb-4 rounded-lg'/>
                            <div className=''>
                                <p className='mb-1 text-2xl text-neutral-600'>${house.price.toLocaleString()}</p>
                                <p className='mb-2 text-2xl text-neutral-900 font-medium'>{house.location}</p>
                                <div className='flex gap-4 mb-6'>
                                    <img src={house.image.size} alt=""  className='w-5'/>
                                    <p>{house.square}</p>
                                    <img src={house.image.bed} alt="" className='w-5'/>
                                    <p>{house.bedroom}</p>
                                    <img src={house.image.bath} alt="" className='w-5'/>
                                    <p>{house.bathroom}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    </main>
  )
}

export default Listings