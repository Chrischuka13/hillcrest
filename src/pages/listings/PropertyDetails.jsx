import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ChevronDown, ChevronUp } from "lucide-react";


const PropertyDetails = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);

    const { id } = useParams()
    const property = data.find((p) => p.id === id)
    // const property = data.find((p) => String(p.id) === id)

    if (!property) return <p>Property not found</p>
    
    
  return (
    <main>
        <NavBar/>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='relative'>
                <img src={property.image.home} alt="" className='w-full h-100 object-cover'/>
                <p className='bg-amber-50 top-4 rounded-lg left-4 p-2 font-medium absolute text-neutral-700'>{property.status.replace("for-sale","For sale")}</p>
            </div>
            
            <div className='lg:w-10/12 container mx-auto  py-12'>
                <div className='md:flex justify-between gap-10'>
                    <div className=''>
                        <div className='flex gap-2 mb-2'>
                            <img src="/images/radar.png" alt="" className='w-6'/>
                            <p className='text-[20px] text-neutral-600'>Lagos, Nigeria</p>
                        </div>
                        <div className='lg:flex gap-10'>
                            <h1 className='text-5xl font-medium mb-4 text-balance'>{property.location}</h1>
                            <div className='mb-4'>
                                <p className='text-[14px]'>Listing price</p>
                                <p className='text-[24px] font-medium'>${property.price.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className='flex gap-4 mb-4 py-4'>
                            <div className=''>
                                <p className=''>Size</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={property.image.size} alt=""  className='w-5'/>
                                    <p>{property.square.slice(0,3)}</p>
                                </div>
                                
                            </div>
                            <div className=''>
                                <p className=''>Beds</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={property.image.bed} alt="" className='w-5'/>
                                    <p>{property.bedroom.slice(0,1)}</p>
                                </div> 
                            </div>
                            <div>
                                <p className=''>Bath</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src={property.image.bath} alt="" className='w-5'/>
                                    <p>{property.bathroom.slice(0,1)}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <p className='font-medium mb-4 text-2xl'>Description</p>
                            <p className='text-xl text-neutral-600  max-w-150'>{property.desc}</p>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className='text-[20px] font-medium mb-4'>Contact realtor</h3>
                        <div className='bg-neutral-100 p-4 border border-neutral-200 rounded-xl'>
                            <img src={property.agent.photo} alt="" className='w-16 rounded-4xl mb-2'/>
                            <h3 className='text-[20px] font-medium mb-2'>{property.agent.name}</h3>
                            <p className='mb-4'>{property.agent.focus}</p>
                            <Link to={`tel:${property.agent.phone}`}><button className='p-2 text-center rounded-lg border border-neutral-400 w-full'>Contact</button></Link>
                        </div>
                    </div>
                </div>
  
            </div>
            <div className='lg:w-10/12 container mx-auto'>
                <iframe src={property.map} frameborder="0" className='w-full h-112.5 mb-16'></iframe>
                
                <h2 className='text-4xl mb-4 font-medium'>Gallery</h2>
                <img src={property.gallery.firstphoto} alt="" className='mb-8 rounded-xl'/>
                <img src={property.gallery.secondphoto} alt="" className='mb-8 rounded-xl'/>
                <img src={property.gallery.thirdphoto} alt="" className='mb-8 rounded-xl'/>
            </div>
            
            <div>
                
            </div>
        </section>
        <Footer/>
    </main>
  )
}

export default PropertyDetails