import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import Testimonies from '../../components/Testimonies'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const GetPropertyValuation = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, isLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/services/valuation`, {
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
      <NavBar/>
      <section className='bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/pexels-emrecan-2079234.jpg)] bg-cover bg-center h-screen bg-fixed flex items-end justify-center'>
        <div className='w-11/12 container mx-auto py-10 sm:flex justify-between relative'>
          <div className='max-w-120 sm:max-w-90 text-white '>  
            <h1 className='text-4xl lg:text-[48px] font-medium mb-8'>Know what your home is worth</h1>
            <Link to='/contact'><button className='border border-white'>Get your valuation</button></Link>
          </div>  
        </div>
      </section>

      <section className='w-11/12 container mx-auto py-24'>
        <div className='max-w-160 flex flex-col justify-center items-center mx-auto mb-8'>
          <h6 className='mb-4'>WHY VALUATION MATTERS</h6>
          <h2 className='text-3xl text-center text-balance font-medium'>Your home is more than a number, but knowing its value brings clarity. At Hillcrest Realty, we pair market data with local expertise to give you a fair, realistic estimate.</h2>
        </div>

        <div className='flex justify-center items-center'>
          <Link to='/contact'><button className='border border-black'>Get your valuation</button></Link>
        </div>
      </section>

      <section className='w-11/12 container mx-auto py-24'>
        <div className='flex flex-col-reverse lg:grid grid-cols-2 gap-16'>
          <div>
            <div className='mb-16'>
              <h6 className='mb-4 mt-6'>HOW IT WORKS</h6>
              <h2 className='text-3xl text-balance font-medium'>Your valuation, step by step</h2>
            </div>

            <div>
              <div className='flex gap-4 mb-6'>
                <h5 className='font-medium '>01</h5>
                <div>
                  <h5 className='font-medium mb-2'>Tell us about your home</h5>
                  <p className='text-balance'>Share a few quick details in our form.</p>
                </div>
              </div>
              <hr className='border border-neutral-100'/>

              <div className='flex gap-4 mb-6 mt-4'>
                <h5 className='font-medium'>02</h5>
                <div>
                  <h5 className='font-medium mb-2'>Get an instant estimate</h5>
                  <p className='text-balance'>We run the numbers with current market data.</p>
                </div>
              </div>
              <hr className='border border-neutral-100'/>

              <div className='flex gap-4 mb-6 mt-4'>
                <h5 className='font-medium'>03</h5>
                <div>
                  <h5 className='font-medium mb-2'>Expert review</h5>
                  <p className='text-balance'>An agent adds local knowledge for accuracy.</p>
                </div>
              </div>
              <hr className='border border-neutral-100'/>

              <div className='flex gap-4 mb-6 mt-4'>
                <h5 className='font-medium'>04</h5>
                <div>
                  <h5 className='font-medium mb-2'>Your next step</h5>
                  <p className='text-balance'>Receive a clear valuation and guidance forward.</p>
                </div>
              </div>
              <hr className='border border-neutral-100'/>
            </div>
          </div>

          <div>
            <img src="/images/pexels-joaquin-carfagna-3131171-16981062.jpg" alt="" className='h-103.25 object-cover md:w-full lg:h-150 rounded-2xl'/>
          </div>
        </div>
      </section>

      <Testimonies/>

      <section className='bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/cdd.png)] bg-cover bg-center'>
        <div className='w-11/12 container mx-auto py-30 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='max-w-155 bg-white p-8 rounded-lg px-10'>
                <div className='text-center mb-6'>
                    <h2 className='text-3xl font-medium mb-6'>Get your free expert <br /> valuation today</h2>
                    <p className='text-neutral-500 text-balance'>Quick, no-obligation estimate delivered within 24 hours.</p>
                </div>
                <div>
                    <label className='text-[12px] text-neutral-600'>Full Name</label>
                    <input name="name" type='name' placeholder='Chris chuka' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300 mt-2' value={name} onChange={(event)=> {setName(event.target.value); setError("")}}/>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <label className='text-[12px] text-neutral-600'>Address</label>
                        <label className='text-[12px] text-neutral-600'>Zip Code</label>

                        <input name="address" type='address' placeholder='310 Herbert Macaulay way' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={address} onChange={(event)=> {setAddress(event.target.value); setError("")}}/>
                        <input name="code" type='code' placeholder='10011' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={zip} onChange={(event)=> setZip(event.target.value)}/>
                    </div>

                    <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
                        <label className='text-[12px] text-neutral-600'>Email</label>
                        <label className='text-[12px] text-neutral-600'>Phone Number</label>

                        <input name="email" type='email' placeholder='chrischuka@yahoo.com' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={email} onChange={(event)=> {setEmail(event.target.value); setError("")}}/>
                        <input name="phone" type='phone' maxLength={11} placeholder='+234 811 883 9920' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={phone} onChange={(event)=> {setPhone(event.target.value); setError("")}}/>
                    </div>

                    {/* <label htmlFor="message" className='text-[12px] text-neutral-600'>Message</label>
                    <textarea name="message" id="message" value={message} onChange={(event)=> setMessage(event.target.value)}placeholder='Tell us a bit about your home or what you’re looking for' className='text-[14px] p-3 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300'></textarea> */}
                    {error && <p className='p-2' style={{color: "red"}}>{error}</p>}
                    {success && <p className='p-2' style={{color: "green"}}>{success}</p>}

                    <button type='submit' className='border border-neutral-400 w-full mb-2'>{loading? "connecting...": "Submit"}</button>
                    <p className='text-[12px] text-neutral-500 text-center'>Your details are safe with us. No spam, ever.</p>
                </div>
            </form>
        </div>
      </section>

      <FAQ/>

      <Footer/>
    </main>
  )
}

export default GetPropertyValuation