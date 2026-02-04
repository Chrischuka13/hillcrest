import React from 'react'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!name || !email || !phone) {
        return setError("Please enter vital credentials"),
        setSuccess(""),
        setName(""),
        setEmail(""),
        setAddress(""),
        setZip(""),
        setPhone("")
      }
      if (name && email && phone && address && zip) {
          setSuccess("Sent successfully")    
        }
        try {
            isLoading(true)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/`, {
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
    <main>
        <section className='w-11/12 container mx-auto py-16 lg:grid grid-cols-2 gap-18'>
            <form onSubmit={handleSubmit} className='max-w-155 md:max-w-full bg-white p-4'>
                <div className=' mb-4'>
                    <h2 className='text-[32px] font-medium'>Tell us what you’re looking for</h2>
                    <p className='text-[16px] text-neutral-500 text-balance'>We usually respond within 24 hours.</p>
                </div>
                <div className='mt-18'>
                    <label className='text-[12px] text-neutral-600'>Full Name</label>
                    <input name="name" type='name' placeholder='Chris chuka' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300 mt-2' value={name} onChange={(event)=> {setName(event.target.value); setError("")}}/>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <label className='text-[12px] text-neutral-600'>Address</label>
                        <label className='text-[12px] text-neutral-600'>Zip Code</label>

                        <input name="address" type='address' placeholder='310 Herbert Macaulay way' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={address} onChange={(event)=> {setAddress(event.target.value); setError("")}}/>
                        <input name="code" type='code' placeholder='10011' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={zip} onChange={(event)=> {setZip(event.target.value); setError("")}}/>
                    </div>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <label className='text-[12px] text-neutral-600'>Email</label>
                        <label className='text-[12px] text-neutral-600'>Phone Number</label>

                        <input name="email" type='email' placeholder='chrischuka@yahoo.com' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={email} onChange={(event)=> {setEmail(event.target.value); setError("")}}/>
                        <input name="phone" type='phone' maxLength={11} placeholder='+234 811 883 9920' className='p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={phone} onChange={(event)=> {setPhone(event.target.value); setError("")}}/>
                    </div>

                    {/* <label htmlFor="message" className='text-[12px] text-neutral-600'>Message</label>
                    <textarea name="message" id="message" value={message} onChange={(event)=> setMessage(event.target.value)}placeholder='Tell us a bit about your home or what you’re looking for' className='text-[14px] p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300'></textarea> */}

                    {success && <p className='p-2'style={{color: "green"}}>{success}</p>}
                    {error && <p className='p-2' style={{color: "red"}}>{error}</p>}
                        
                    <button type='submit' className='border border-neutral-400  mt-6'>{loading? "connecting...": "Submit"}</button>
                    <p className='text-[12px] text-neutral-500 mt-2'>We never share your data with third parties.</p>
                </div>
            </form>
            <div>
                <img src="/images/ParallaxMedia@4x.png" alt="" className='h-103.25 object-cover md:w-full lg:h-150 rounded-2xl hidden lg:block'/>
            </div>
        </section>
    </main>
  )
}

export default Contact