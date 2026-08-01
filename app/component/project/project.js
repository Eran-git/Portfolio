'use client'
import { motion } from 'framer-motion';
import LoginAccount from './loginAccount.js';
import { useEffect, useState } from 'react'

import { Plus } from 'lucide-react'

export default function ProjectsPage() {
     const [isOpen, setIsOpen] = useState(false);

     const [project, setProject] = useState([]);

     const fetchProject = async () => {
        const response = await fetch("/api/projects");
        const data = await response.json()

        if(data.success) {
            setProject(data.projects);
        }
     }

     useEffect(() => {
        fetchProject()
     }, []);

    return (
        <>
            <div id="projects" className="flex flex-col items-center justify-center gap-10 relative min-h-screen py-50">
                <div>
                    <h1 className="animation-shine bg-gradient-to-r from-blue-500 via-white to-purple-500 bg-clip-text text-transparent
                    [background-size:200%_100%] text-6xl font-bold">Projects</h1>
                </div>
                <div  className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5">

                    {project.map((project) => (

                        <div key={project._id}
                            className='group relative w-60 h-70 rounded-xl overflow-hidden hover:border-3 hover:border-cyan-500'
                        >

                            <div className='w-full h-full'>
                                <img 
                                    className='w-full h-full'
                                    src={project.image} 
                                />
                            </div>

                            <div className='absolute opacity-0 group-hover:opacity-100 bottom-0 text-black text-center flex flex-col        justify-center items-center gap-5 w-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md'
                            >

                                <h2 className='font-bold text-xl pt-5'>{project.title}</h2>

                                <p className='text-md'>{project.description}</p>
                            </div>
                        </div>

                    ))}

                    
                    <div className="flex justify-center items-center w-60 h-70 rounded-xl bg-zinc-800 hover:bg-zinc-700">
                        <button
                            onClick={() => setIsOpen(true)}
                            className='cursor-pointer transform duration-300 hover:scale-110'
                        >
                            <Plus  size={100} color='gray'/>
                        </button>

                    </div>

                </div>

                <LoginAccount 
                    isOpen = {isOpen}
                    onClose = {() => setIsOpen(false)}    
                />


            </div>

        </>
    );
};