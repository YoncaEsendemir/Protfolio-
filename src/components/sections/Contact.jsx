
import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from "emailjs-com"

function Contact() {
 
    const [formdata, setFormData] =useState({
        name:"",
        email:"",
        message:"",
    });

    const SERVICE_ID="service_o0o2r29";
    const TEMPLATE_ID="template_2umfs5u";
    const PUBLIC_KEY="0ZH1Q-loo4dqNLo73";


   const handleSubmit = (e)=>{
    e.preventDefault();
    
    emailjs
    .sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY)
    .then((result)=>{
        alert("message sent !");
        setFormData({name:"",email:"",message:""})
    })
    .catch(()=>{ alert("hata var tekrar dene")});
    
   } 

  return (
    <RevealOnScroll>
    <section to="#contact" className='min-h-screen flex items-center justify-center py-2'>
        <div className='px-4 w-150'>
        <h2 className='text-3xl font-bold mb-8  bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent text-centers'>
            Get In Touch
        </h2>
       
       <form   className='md:space-y-4 space-y-6' onSubmit={handleSubmit}>
        <div className='relative'>
         <input type="text" 
         id="name"
          name="name" 
          required 
          value={formdata.name}
          onChange={(e)=>setFormData({...formdata,name:e.target.value})}
          className='w-full bg-white-5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
          placeholder="name..."/>
        </div>

        <div className='relative'>
         <input type="email" 
         id="email"
          name="email" 
          required 
          value={formdata.email}
          onChange={(e)=>setFormData({...formdata,email:e.target.value})}
          className="w-full bg-white-5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          placeholder='example@gmail.com'/>
        </div>

        <div className='relative'>
         <textarea
         id="message"
          name="message" 
          rows={5}
          required 
          value={formdata.message}
          onChange={(e)=>setFormData({...formdata,message:e.target.value})}
          className='w-full bg-white-5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'/>
        </div>

        <button type='submit' className='w-full bg-blue-500 font-medium px-4 py-3 text-white transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
            send Message
        </button>
       </form>
    
        </div>
    </section>
    </RevealOnScroll>
  )
}

export default Contact