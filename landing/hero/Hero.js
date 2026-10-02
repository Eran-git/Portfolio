'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero( { isDarkMode, mobileSize, setMobileSize }) {
    const links = [
        {name: "Facebook", img: "/images/facebook.png", src: "https://www.facebook.com/ramonyongs"},
        {name: "Email", img: "/images/gmail.png", src: "ramonagbuay20@gmail.com"},
        {name: "LinkedIn", img: "/images/linkedin.png", src: "https://www.linkedin.com/in/ramon-yulo-agbuya-b071aa436/"}
    ];

    const techStack = [
        {name: "HTML",          src: "/techstack/html.png"},
        {name: "CSS",           src: "/techstack/css.png" },
        {name: "Javascript",    src: "/techstack/js.png"},
        {name: "Java",          src: "/techstack/java.png"},
        {name: "Mysql",         src: "/techstack/mysql.png"},
        {name: "MongoDB",       src: "/techstack/mongodb.png"},
        {name: "Reactjs",       src: "/techstack/reactjs.png"},
        {name: "Tailwind",      src: "/techstack/tailwind.png"},
        {name: "Nextjs",        src: "/techstack/nextjs.png"},
        {name: "RestApi",       src: "/techstack/restapi.png"},
    ]

    const techtools = [
        {name: "intellij-idea", src: "/techtools/intelij-idea.png"},
        {name: "vscode",        src: "/techtools/vscode.png"},
        {name: "Git",        src: "/techtools/git.png"},
        {name: "Github",        src: "/techtools/github.png"},
        {name: "Eclipse",        src: "/techtools/eclipse.png"},
    ]

    const [projectCount, setProjectsCount] = useState(0);

    useEffect(() => {
        const end = 100;
        const incrementTime = 20;

        let direction = 1;

        const counter = setInterval(() => {
            setProjectsCount((prev) => {
                if (prev >= end) {
                    direction = -1;
                }

                if (prev <= 0 && direction === -1) {
                    clearInterval(counter);
                    return 0;
                }

                return prev + direction;
            });
        }, incrementTime);

        return () => clearInterval(counter);
    }, []);

    return (
        <>
            <motion.div 
                id="hero" 
                className={` ${isDarkMode ? "bg-white" : "bg-black"} 
                    w-full  
                    flex flex-col-reverse items-center justify-center 
                    md:px-30 md:flex-row  md:justify-between 
                `}

                initial={
                    mobileSize
                        ? {}
                        : {y: -200, opacity: 0}
                }
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 1}}
            >

                {/* hero-text */}
                {mobileSize !== null && (
                    <motion.div className={` ${isDarkMode ? "" : "" } 
                        flex flex-col 
                        md:gap-4
                        md:py-8 py-5 md:px-5 px-10
                        text-center md:text-start 
                        md:w-[70%] md:pr-40 `}
                        
                        initial = {
                            mobileSize
                                ? { x: -200, opacity: 0 }
                                : {}
                        }
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ duration: 1 }}
                    >
                        <p className={` ${isDarkMode ? "text-black/60" : "text-white/60"} text-md `}>
                            JUNIOR DEVELOPER, OPEN TO WORK
                        </p>

                        <h1 
                            className={` ${isDarkMode ? "text-black/80" : "text-white/80"} 
                            text-3xl md:text-4xl font-bold md:text-7xl text-2xl`}
                        >
                            I build web applications that solve real problems.
                        </h1>
                        <span 
                            className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                            text-xl md:text-xl md:pt-0 pt-2`}
                        >
                            Hi, i'm 
                            <span className={` ${isDarkMode ? "text-black/90" : "text-white/90"}`}> Ramon Yulo Y, Agbuya Jr.</span> 
                        </span>
                        <p className="mt-2 text-xl md:text-2xl text-gray-400">
                            Im new web developer with self-build projects and a lot of drive. 
                            i'm looking for my first team where i can ship real code and keep learning.
                        </p>

                        <div className='flex md:justify-start justify-center items-center gap-10 mt-3'>
                            <a 
                                href='/file/Ramon Vitae.pdf'
                                download
                                className={` ${isDarkMode ? "text-black/60 hover:text-black/90" : "text-white/60 hover:text-black/90"}
                                md:px-8 px-5 
                                md:py-5 py-3 
                                bg-blue-500/60 hover:bg-blue-500 
                                rounded-xl
                                cursor-pointer
                                `}
                            >
                                Download CV
                            </a>

                            <button
                                className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                                flex justify-center items-center gap-2 hover:text-blue-500/60 cursor-pointer`}
                            >
                                See my projects { <ArrowRight size={15} />}
                            </button>
                        </div>

                        <div className='flex md:justify-start justify-center w-full'>
                            <div className='flex flex-col justify-center items-center'>
                                <span className={` ${isDarkMode ? "text-black/60" : "text-white/60"} text-4xl`}>{projectCount}</span>
                                <h1 className={` 
                                    ${isDarkMode 
                                    ? "text-black/60" 
                                    : "text-white/60"
                                    } 
                                    text-xs`
                                }>
                                    PROJECTS BUILD
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                )}
                

                <motion.span
                    className={` ${isDarkMode ? "bg-black/60" : "bg-white/60"} hidden md:flex h-140 w-0.5`}
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    transition={{duration: 1}}
                />

                {/* hero-image */}
                {mobileSize !== null && (
                    <motion.div className='flex flex-col justify-center items-center w-100 px-10'
                        initial={mobileSize 
                            ? {x: 200, opacity: 0} 
                            : {}
                        }
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1}}
                        exit={{x: 200}}
                    >
                        <div 
                            id="hero-image" 
                            className=" 
                                w-[150px] md:w-[200px] 
                                h-[150px] md:h-[200px] 
                                rounded-full overflow-hidden
                            "
                        >
                            <img 
                                src={isDarkMode ? "/images/eran-white.png" : "/images/eran-dark.jpg" }
                                alt="Hero Image" 
                                className="w-full h-full object-cover" 
                            />
                        </div>

                        <div className={` 
                            ${isDarkMode ? "border-black/60" : "border-white/60"} 
                            md:border-t 
                            md:mt-5 mt-0
                            w-full 
                            flex flex-col justify-center items-center 
                            `}
                        >
                            <h1 className={` 
                                ${isDarkMode ? "text-black/60" : "text-white/60"} 
                                text-2xl md:py-2 py-0
                                `}
                            >
                                FullStack Developer
                            </h1>

                            {/* socia */}
                            <div className={`hidden md:flex justify-center items-center gap-7 md:pt-5 pt-2 `}>
                                {links.map((link) => (
                                    <li key={link.name}
                                        className={` list-none flex justify-center items-center gap-1 cursor-pointer `}    
                                    >
                                        <img src={link.img}
                                            alt={link.name} 
                                            className=' w-7 h-7'
                                        />
                                        
                                        <a href={link.src}
                                            className={` 
                                                ${isDarkMode 
                                                    ? "text-black/60 hover:text-black/80 " 
                                                    : "text-white/60 hover:text-white/80"} 
                                                `}
                                        >
                                            {link.name}
                                        </a>    
                                    </li>
                                ))}

                            </div>

                            {/* tech icon */}
                            <div className={` ${mobileSize ? "overflow-hidden" : ""} w-full flex flex-col md:mt-10 mt-5 `}>

                                {/* techStack */}
                                <motion.div
                                    className="flex w-max"
                                    animate={
                                        mobileSize
                                            ? {x: ["0%", "-50%"]}
                                            : {x: 0}
                                        }
                                    transition={
                                        mobileSize
                                            ?   { 
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear",
                                                }
                                            : {}
                                        }
                                >
                                    <ul className={`flex justify-center items-center md:gap-10 gap-4 md:pr-10 pr-0`}>
                                        {techStack.map((tech) => (
                                            <li
                                                key={tech.name}
                                                className="flex-shrink-0 flex flex-col items-center"
                                            >
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    width={mobileSize ? 40 : 10}
                                                    height={mobileSize ? 40 : 10}
                                                    className={` ${mobileSize ? "w-10 h-10" : "w-5 h-5" }`}
                                                />
                                                <span className={`  
                                                    ${isDarkMode ? "text-black/60" : "text-white/60"}
                                                    ${mobileSize ? "flex" : "hidden"} 
                                                    mt-2 whitespace-nowrap`}>
                                                    {tech.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className={` ${!mobileSize ? "hidden" : ""} flex gap-10 pr-10`}>
                                        {techStack.map((tech) => (
                                            <li
                                                key={`duplicate-${tech.name}`}
                                                className="flex-shrink-0 flex flex-col items-center"
                                            >
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    width={mobileSize ? 40 : 10}
                                                    height={mobileSize ? 40 : 10}
                                                    className={` ${mobileSize ? "w-10 h-10" : "w-5 h-5" }`}
                                                />
                                                <span className={` 
                                                    ${isDarkMode ? "text-black/60" : "text-white/60"} 
                                                    ${mobileSize ? "" : "hidden"}
                                                    mt-2 whitespace-nowrap`}>
                                                    {tech.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* techTools */}
                                <motion.div
                                    className={`flex justify-center items-center md:gap-10 gap-4 md:pr-10 pr-0 md:mt-5 mt-2`}
                                    animate={
                                        mobileSize
                                            ? {x: ["0%", "50%"]}
                                            : {x: 0}
                                        }
                                    transition={
                                        mobileSize
                                            ?   { 
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear",
                                                }
                                            : {}
                                        }
                                >
                                     <ul className="flex gap-10 pr-10">
                                        {techtools.map((tool) => (
                                            <li
                                                key={tool.name}
                                                className="flex-shrink-0 flex flex-col items-center"
                                            >
                                                <Image
                                                    src={tool.src}
                                                    alt={tool.name}
                                                    width={mobileSize ? 40 : 10}
                                                    height={mobileSize ? 40 : 10}
                                                    className={` ${mobileSize ? "w-10 h-10" : "w-5 h-5" }`}
                                                />
                                                <span className={`  
                                                    ${isDarkMode ? "text-black/60" : "text-white/60"}
                                                    ${mobileSize ? "flex" : "hidden"} 
                                                    mt-2 whitespace-nowrap`}>
                                                    {tool.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* DUPLICATE */}
                                    <ul className={` ${!mobileSize ? "hidden" : ""} flex gap-10 pr-10`}>
                                        {techtools.map((tech) => (
                                            <li
                                                key={`duplicate-${tech.name}`}
                                                className="flex-shrink-0 flex flex-col items-center"
                                            >
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    width={mobileSize ? 40 : 10}
                                                    height={mobileSize ? 40 : 10}
                                                    className={` ${mobileSize ? "w-10 h-10" : "w-5 h-5" }`}
                                                />
                                                <span className={` 
                                                    ${isDarkMode ? "text-black/60" : "text-white/60"} 
                                                    ${mobileSize ? "" : "hidden"}
                                                    mt-2 whitespace-nowrap`}>
                                                    {tech.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                </motion.div>
                            </div>
                        </div> 
                    </motion.div>
                )}
            </motion.div>
        </>
    );
}