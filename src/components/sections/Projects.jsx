
import React from 'react'
import { projects } from '../../ProjectsList/projectsList';
import RevealOnScroll from '../RevealOnScroll'


function Projects() {
    return (
        <RevealOnScroll>
        <section to="projects" className='min-h-screen flex flex-col items-center justify-center py-20'>
            <div className='max-w-5xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8  bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent text-centers'>
                    Featured Projects
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {projects.length > 0 ? (
                        projects.map((data, index) => (
                            <div key={data.id} className='p-2 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30'>
                                <h3 className='text-xl font-bold mb-4' >{data.title}</h3>
                                <img src={data.image} alt="veri yok"  className="p-2 mask-radial-from-70% md:mask-radial-from-50% ..."/>
                                {data.technologies.map((item, index) => (
                                    <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 whitespace-pre md:whitespace-normal rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {item}
                                    </span>
                                ))}
                                <p className='text-gray-300 mb-4 mt-4'>{data.description}</p>

                                <div className='flex justify-between items-center'>
                                    <a href="" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>
                                        View Project
                                    </a>
                                </div>
                            </div>

                        ))
                    )
                        : (
                            <span className='bg-red-400/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-400/30
                    hover:shadow-[0_2px_8px_rgba(59,130,2249,0.2)] transition '> değer yok </span>
                        )
                    }


                </div>
            </div>
        </section>
        </RevealOnScroll>
    )
}

export default Projects