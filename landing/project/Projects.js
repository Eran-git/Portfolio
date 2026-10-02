'use client'
import { motion } from 'framer-motion';
import LoginAccount from './LoginAccount';
import { useEffect, useState } from 'react'

import { Plus, ChevronsLeft, ChevronsRight } from 'lucide-react'

export default function ProjectsPage({ isDarkMode, mobileSize }) {
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
            <div id="projects" 
                className={` ${isDarkMode ? "bg-white" : "bg-black"}
                    relative
                    flex flex-col
                    justify-start
                    gap-5
                    md:px-35 px-5
                    pt-20
                    w-full
                    h-screen
                    `}
            >
                <motion.h2  className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                    text-xs `}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}

                >
                    FEATURES PROJECTS
                </motion.h2>

                <motion.h1 className={` ${isDarkMode ? "text-black" : "text-white"} 
                    md:text-5xl text-3xl
                    pl-5
                    `}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Things I built to learn by doing.
                </motion.h1>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5">

                    {project.map((project) => (

                        <motion.div key={project._id}
                            onClick={() => setIsOpen(!isOpen)}
                            className={`
                                ${isDarkMode 
                                    ? "bg-black/10 border-black/20" 
                                    : "bg-white/10 border-white/20"
                                } 
                                relative 
                                md:w-100 md:h-110 
                                rounded-xl 
                                overflow-hidden 
                            border px-10 py-5`}
                            initial={{scale: 0.5}}
                            whileInView={{scale: 1}}
                            transition={{ duration: 0.5 }}
                        >

                            <div className='w-full h-[50%]'>
                                <img 
                                    className='w-full h-full'
                                    src={project.image} 
                                />
                            </div>

                            <div className={` 
                                ${isDarkMode 
                                ? "bg-transparent"
                                : "bg-black/10"
                                }
                                text-black text-center flex flex-col justify-center items-center gap-5 w-full `}
                            >

                                <h2 className={` 
                                    ${isDarkMode 
                                    ? "text-black/60" 
                                    : "text-white/60"
                                } font-bold text-xl pt-5`}
                                >
                                    {project.title}
                                </h2>

                                <p className={` 
                                    ${isDarkMode 
                                    ? "text-black/60" 
                                    : "text-white/60"} text-md
                                `}
                                >
                                    {project.description}
                                </p>

                                <ul className={`                                     
                                    ${isDarkMode 
                                    ? "text-black/60" 
                                    : "text-white/60"
                                    }
                                    flex gap-5
                                `}
                                >
                                    {project.techStack.map((tech) => (
                                        <li key={tech}
                                            className='flex justify-center items-center text-xs border px-2 py-1 rounded-lg'
                                        >{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    ))}


                </div>
            

                <LoginAccount 
                    isOpen = {isOpen}
                    onClose = {() => setIsOpen(false)}    
                />


            </div>

        </>
    );
};