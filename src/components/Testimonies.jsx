import React from 'react'

const review = [
    {image: "/images/81690.jpg", quote: "“Hillcrest made the valuation process quick and easy. I had a clear, accurate number the next day and felt confident listing my home.”", name: "— Paul L."},
    {image: "/images/139608.jpg", quote: "“I got my valuation within 24 hours and it felt honest and transparent. There was no pressure, just clear guidance when I asked for it.”", name: "— Miemie"},
    {image: "/images/112464.jpg", quote: "“The valuation came with context about the local market, not just a number. That advice helped me decide to rent instead of sell right away.”", name: "— Rachael C."},
    {image: "/images/112464.jpg", quote: "The process gave me clarity about my home and my options. Professional, straightforward, and much easier than I expected.”", name: "— Anita"}
]

const Testimonies = () => {
  return (
    <div>
        <section className='w-11/12 container mx-auto py-24'>
            <div>
                <div className='max-w-160 flex flex-col justify-center items-center mx-auto mb-12'>
                    <h1 className='text-[32px] text-center font-medium mb-4'>What our clients say</h1>
                    <p className='text-balance text-center text-neutral-600'>See what others are saying, don't just take our word for it.</p>
                </div>

                
                    <div className='md:grid grid-cols-2 gap-6'>
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

export default Testimonies