import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';

const AgentProfile = () => {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch('/team.json')
        .then(res => res.json())
        .then(json => setData(json));
        }, []);
    
    const { id } = useParams()
    const agent = data.find((p) => p.id === id)
    
    if (!agent) return <p>Agents not found</p>

  return (
    <main>
        <NavBar/>
        <section className='bg-neutral-50'>
            <div className='w-11/12 container mx-auto py-24'>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                    <div>
                        <img src={agent.image} alt="" className='rounded-lg mb-6 w-full'/>
                    </div>

                    <div className='flex justify-between flex-col'>
                        <div>
                            <h1 className='text-5xl font-medium mb-4'>{agent.name}</h1>
                            <p className='text-xl mb-4'>{agent.role}</p>
                        </div>

                        <div className=''>
                            <Link to={`mailto:${agent.email}`}><p className='border border-neutral-300 p-2 rounded-lg font-medium mb-2 hover:cursor-pointer transition-transform duration-500 hover:scale-95'>{agent.email}</p></Link>
                            <Link to={`tel:${agent.phone}`}><p className='border border-neutral-300 p-2 rounded-lg font-medium max-w-38 mb-6 hover:cursor-pointer transition-transform duration-500 hover:scale-95'>{agent.phone}</p></Link>
                            
                        </div>
                    </div>

                    <div className='flex items-end'>
                        <p className='text-[20px] text-neutral-600 mb-6'>{agent.desc}</p>
                    </div>
                </div>
            </div>
        </section>
        <CTA/>
        <Footer/>
        
    </main>
  )
}

export default AgentProfile