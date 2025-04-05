
import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

function Contact() {

  return (
    <RevealOnScroll>
    <section to="#contact" className='min-h-screen flex items-center justify-center py-2'>
        <div className='px-4 w-150'>
        <h2 className='text-3xl font-bold mb-8  bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent text-centers'>
            Get In Touch
        </h2>
       
       <form className='md:space-y-4  space-y-6'>
        <div className='relative'>
         <input type="text" id="name" name="name" required className='w-full bg-white/5 border'/>
        </div>
       </form>
    
        </div>
    </section>
    </RevealOnScroll>
  )
}

export default Contact