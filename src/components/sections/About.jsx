
import React from 'react'

function About() {
    const frontendSkills=[
        "HTML","CSS","TailwindCSS","Javascript ","React",
    ]
    const backendSkills=[
        "Php","Spring Boot","Node.js"
    ]

    const dataBaseSkills=[
        "MySQL","PostgreSQL"
    ]
  return (
    <section id="about" className='min-h-screen flex flex-col items-center justify-center py-20'>

        <div className='max-w-3xl mx-auto px-4'>
         <h2 className='text-3xl font-bold mb-8  bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent text-centers'>About Me</h2>
        </div>

        <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
            Passionate developer with expertise in building scalable web 
            applications and creating innovative solutions.
            </p>
      
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend Skills</h3>
              <div className='flex flex-wrap gap-2'>
                { frontendSkills.length>0 ?(
                   frontendSkills.map((item,key)=>(
                      <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/30
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        {item}
                      </span>
                   ))
                ):
                (
                    <span className='bg-red-400/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-400/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition '> değer yok </span>
                )  }
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Backend Skills</h3>
              <div className='flex flex-wrap gap-2'>
                { backendSkills.length>0 ?(
                   backendSkills.map((item,key)=>(
                      <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/30
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        {item}
                      </span>
                   ))
                ):
                (
                    <span className='bg-red-400/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-400/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition '> değer yok </span>
                )  }
              </div>
            </div>


            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>SQL Skills</h3>
              <div className='flex flex-wrap gap-2'>
                { dataBaseSkills.length>0 ?(
                   dataBaseSkills.map((item,key)=>(
                      <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/30
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        {item}
                      </span>
                   ))
                ):
                (
                    <span className='bg-red-400/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-400/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2249,0.2)] transition '> değer yok </span>
                )  }
              </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 auto-rows-fr'>
           <div className='p-5 rounded-xl border-white/10 border hover:-transition-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>EDUCATION</h3>
            <ul className='list-disc list-inside text-gray-200 space-y-2'>
                <li className='font-mono'>
                    <strong>Computer Engineer</strong> Iskenderun Technical University 2021-2025
                </li>

                <li className='font-mono' ><strong>Relevant Coursework:</strong> Data Structures, Web Development,Desktop Applications(Java, C#)</li>
            </ul>
           </div>

            <div className='p-5 rounded-xl border-white/10 border hover:-transition-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                <div className='font-mono' >
                    <h4>
                       <strong> Software Engineer</strong> 
                    </h4>
                    <p >
                        Developed ...........
                    </p>
                </div>

                <div >
                    <h4 >
                        <strong>Software Engineer</strong> at 
                    </h4>
                    <p>
                        Developed ...........
                    </p>
                </div>
            </div>
           

        </div>
     </div>
    </section>
  )
}

export default About