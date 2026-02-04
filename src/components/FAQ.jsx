import React from 'react'
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { ChevronDown } from 'lucide-react'


const FAQs = [
    {question: "Is the valuation really free?", answer: "Yes. There’s no cost and no obligation."},
    {question: "How accurate is the valuation?", answer: "We combine market data with an expert agent review for a realistic figure."},
    {question: "How long does it take?", answer: "You’ll usually hear back within 24 hours."},
    {question: "Do I need to be selling?", answer: "Not at all. Many people request a valuation just to stay informed."},
    {question: "Is my information kept private?", answer: "Yes. Your details are only used for your valuation and never shared."},
]

const FAQ = () => {
    const [Isopen, SetisOpen] = useState("")

    const toggle = (index) => {
    SetisOpen(Isopen === index ? "" : index);
  };

  return (
    <div>
        <section className='w-11/12 container mx-auto py-16 md:grid grid-cols-2 gap-12'>
            <div>
                <h6 className='mb-4'>FAQS</h6>
                <h2 className='text-3xl font-medium text-balance mb-6'>Questions we often hear</h2>
            </div>
            

            <div>
                {FAQs.map((faq, index)=>(
                    <div key={index} className='bg-white p-2 '>
                        <button onClick={() => toggle(index)} className='hover:cursor-pointer w-full mb-4 '>
                            <div className='flex justify-between items-center'>
                                <span>{faq.question}</span>
                                <span>{Isopen === index? <ChevronUp/> : <ChevronDown/>}</span>
                            </div>
                        </button>
                         {Isopen === index && (
                            <div className='px-6 mb-4 hover:cursor-pointer'>{faq.answer}</div>
                        )}
                        <hr className='border border-neutral-100'/>
                    </div>
                   
                ))}
                
            </div>
        </section>
    </div>
  )
}

export default FAQ