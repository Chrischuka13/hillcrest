import React from 'react'

const review = [
    {image: "/images/81690.jpg", quote: "“From the first meeting to closing day, everything felt organized and calm. Hillcrest made selling easy, and dare I say, fun.”", name: "— Laura & Ben H."},
    {image: "/images/139608.jpg", quote: "“They didn’t just list our home — they helped us see what buyers would love most about it. We got multiple offers within a week.”", name: "— Martino K."},
    {image: "/images/112464.jpg", quote: "“Clear communication, honest advice, and real results. We always knew what was happening and why.”", name: "— Sofia L. & Sofie"},
]

const WhyChoose = () => {
  return (
    <div>
        <section className='w-11/12 container mx-auto py-24'>
            <div>
                <div className='max-w-160 flex flex-col justify-center items-center mx-auto mb-12'>
                    <h1 className='text-5xl md:text-center font-medium mb-6'>Why sellers choose Hillcrest</h1>
                    <p className='text-balance md:text-center text-neutral-600'>We’ve helped countless homeowners sell with confidence. From preparing the listing to closing the deal, our focus is always on making the process smooth. and leaving every seller genuinely satisfied.</p>
                </div>

                
                    <div className='md:grid grid-cols-3 gap-6'>
                        {review.map((reviews, i)=>(
                        <div key={i} className='bg-neutral-100 rounded-lg flex flex-col gap-12 p-6 mb-6'>
                            <img src={reviews.image} alt="" className='w-19.25 rounded-full'/>
                            <h6 className='text-balance text-[18px] text-neutral-600'>{reviews.quote}</h6>
                            <p className='text-neutral-600'>{reviews.name}</p>
                        </div>
                        ))}
                    </div>

            </div>
        </section>
    </div>
  )
}

export default WhyChoose