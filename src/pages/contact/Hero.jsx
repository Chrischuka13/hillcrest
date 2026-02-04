import React from 'react'
import { useState, useEffect } from 'react'

const Hero = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")



    const onSubmit = async(e) => {
        e.preventDefault()

        if (!name || !email || !phone) {
            return setError("please enter vital credentials"),
            setSuccess(""),
            setName(""),
            setEmail(""),
            setAddress(""),
            setZip(""),
            setPhone("")
        }
        if (name && email && phone && address && zip) {
            setSuccess("sent successfully")
            
        }
        try {
            isLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name, address, zip, email, phone })
            });

            const data = response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setName(""),
            setEmail(""),
            setAddress(""),
            setZip(""),
            setPhone("")
            setError("")
        } catch (error) {
            console.log(error);
            
        }finally{
            isLoading(false)
        }
    }
    


  return (
    <section className='bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/gdfz.png)] bg-cover bg-center '>
        <div className='w-11/12 container mx-auto py-30 flex items-center justify-center'>
            <form onSubmit={onSubmit} className='max-w-155 bg-white p-8'>
                <div className='text-center mb-4'>
                    <h2 className='text-[32px] font-medium'>Contact Us</h2>
                    <p className='text-[16px] text-neutral-500 text-balance'>Fill in your details and we will contact you shortly.</p>
                </div>
                <div>
                    <label className='text-[12px] text-neutral-600'>Full Name</label>
                    <input name="name" type='name' placeholder='Chris chuka' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300 mt-2' value={name} onChange={(event)=> {setName(event.target.value); setError("")}}/>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <label className='text-[12px] text-neutral-600'>Address</label>
                        <label className='text-[12px] text-neutral-600'>Zip Code</label>

                        <input name="address" type='address' placeholder='310 Herbert Macaulay way' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={address} onChange={(event)=> {setAddress(event.target.value); setError("")}}/>
                        <input name="address" type='address' placeholder='10011' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={zip} onChange={(event)=> {setZip(event.target.value); setError("")}}/>
                    </div>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <label className='text-[12px] text-neutral-600'>Email</label>
                        <label className='text-[12px] text-neutral-600'>Phone Number</label>

                        <input name="email" type='email' placeholder='chrischuka@yahoo.com' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={email} onChange={(event)=> {setEmail(event.target.value); setError("")}}/>
                        <input name="phone" type='phone' maxLength={11} placeholder='+234 811 883 9920' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={phone} onChange={(event)=> {setPhone(event.target.value); setError("")}}/>
                    </div>

                    {/* <label htmlFor="message" className='text-[12px] text-neutral-600'>Message</label>
                    <textarea name="message" id="message" value={message} onChange={(event)=> setMessage(event.target.value)}placeholder='Tell us a bit about your home or what you’re looking for' className='text-[14px] p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300'></textarea> */}

                    {success && <p className='py-2' style={{color: "green"}}>{success}</p>}
                    {error && <p className='py-2' style={{color: 'red'}}>{error}</p>}

                    <button type='submit' className='border border-neutral-400 w-full mb-2'>{loading? "connecting...": "Submit"}</button>
                    <p className='text-[12px] text-neutral-500 text-center'>We never share your data with third parties.</p>
                </div>
            </form> 
 
        </div>
    </section>
  )
}

export default Hero