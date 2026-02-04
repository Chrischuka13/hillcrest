import React from 'react'

const Hero = () => {
  return (
    <main>
        <section className='bg-neutral-50'>
            <div className='w-11/12 container mx-auto py-24'>
                <div className='md:flex justify-between mt-6'>
                    <div className='flex flex-col justify-between'>
                        <div className='max-w-112.5 text-balance '>
                            <p className=''>ABOUT US</p>
                            <h2 className='text-[46px] leading-12 font-medium mb-12'>A home that fits your life</h2>
                        </div>
                        <div className='max-w-162.5 '>
                            <p className='text-2xl text-balance mb-6'>Hillcrest Realty began with a simple idea: buying or selling a home should feel clear, not confusing. Too often, people found themselves overwhelmed. We wanted to change that.</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src="images/shutter.png" alt="" className='max-w-100'/>
                    </div>
                </div>  
            </div>
        </section>
        
        <div className='w-11/12 container mx-auto py-12'>
            <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 '>
                <div className='flex  gap-4 justify-center items-center max-w-80'>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>240+</h1>
                    <h4 className='text-[20px]'>Homes sold with care and precision</h4>
                </div>
                <div className='flex gap-4 justify-center items-center max-w-80'>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>18</h1>
                    <h4 className='text-[20px]'>Average days properties stay on market</h4>
                </div>
                <div className='flex gap-4 justify-center items-center max-w-80'>
                    <hr className='border-neutral-200'/>
                    <h1 className='text-[46px]'>4.7/5</h1>
                    <h4 className='text-[20px]'>Average client rating across reviews</h4>
                </div>
            </div>
        </div>
    </main>

    
  )
}

export default Hero