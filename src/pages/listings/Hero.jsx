import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [data, setData] = useState([])
    const [activeTab, setActiveTab] = useState("for-sale")
    
        useEffect(()=>{
        fetch('/data.json')
          .then(res => res.json())
          .then(json => setData(json));
        }, []);

    const filteredProperties = data.filter(
        (house) => house.status === activeTab
    )

  return (
    <main>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='md:flex justify-between mb-12  py-6'>
                <h3 className='font-medium text-[32px] mb-6'>Listings</h3>
                <div>
                    {["for-sale", "coming-soon", "sold"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={activeTab === tab ? "border border-neutral-500" : ""}>
                        {tab.replace("-", " ")}
                    </button>
                    ))}
                </div>
            </div>


            <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
                {filteredProperties.map((house)=> (
                    <Link to={`/listings/${house.id}`} key={house.id} className='transition-transform duration-500 hover:scale-105 hover:cursor-pointer'>
                        <div className='relative'>
                            <img src={house.image.home} alt="" className='mb-4 rounded-lg'/>
                            <p className='bg-amber-50 top-2 rounded-lg left-2 p-2 font-medium absolute text-neutral-700'>{house.status.replace("for-sale","For sale")}</p>
                        </div>
                            
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
                    </Link>
                   
                ))}
            </div>
        </section>
    </main>
  )
}

export default Hero