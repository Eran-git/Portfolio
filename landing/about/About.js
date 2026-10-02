'use client'

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowUp } from "lucide-react"
import { useState } from "react";

export default function About({ isDarkMode, mobileSize }) {

    const [otherSkills, setOtherSkills] = useState(false);

    return(
        <section 
            id="about"
            className={` ${isDarkMode ? "bg-white" : "bg-black"} w-full md:px-35 px-5 py-20`}>

            <div className="flex flex-col justify-start gap-4">

                <motion.h1 
                    className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                    text-xs `}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    WHAT I CAN DO
                </motion.h1>

                <div className={` ${mobileSize ? "" : ""} flex flex-col gap-2`}>

                    {/* item 1 */}
                    <motion.div className={` ${isDarkMode ? "border-black/30" : "border-white/30"} 
                        ${mobileSize ? "" : "flex-col"}
                        flex justify-between items-center 
                        md:gap-20 gap-5
                        md:px-10 px-5
                        md:py-15 py-3
                        border`}
                        initial={{x: -200, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={` 
                            ${isDarkMode ? "text-black/90" : "text-white/90"} 
                            text-4xl font-bold md:w-140 w-full md:h-full`}
                        >
                            Web Apps,  <span className="font-thin">Build Clean.</span>
                        </h1>

                        <p className={` ${isDarkMode ? "text-black/60" : "text-white/60"} text-xl flex-1`}>
                            I build responsive web apps with nextjs, 
                            focused on clear layouts, working features and code that is easy to read.
                        </p>
                    </motion.div>

                     {/* item 2*/}
                    <motion.div className={` ${isDarkMode ? "border-black/30" : "border-white/30"} 
                        ${mobileSize ? "" : "flex-col"}
                        flex justify-between items-center 
                        md:gap-20 gap-5
                        md:px-10 px-5
                        md:py-15 py-3
                        border`}
                        initial={{x: 200, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={` 
                            ${isDarkMode ? "text-black/90" : "text-white/90"} 
                            text-4xl font-bold md:w-140 w-full md:h-full`}
                        >
                            Landing Pages,  <span className="font-thin">Build Fast.</span>
                        </h1>

                        <p className={` ${isDarkMode ? "text-black/60" : "text-white/60"} text-xl flex-1`}>
                            Need a page for a school project, event or small business? I can design and ship it quickly.
                        </p>
                    </motion.div>

                     {/* item 3 */}
                    <motion.div className={` ${isDarkMode ? "border-black/30" : "border-white/30"} 
                        ${mobileSize ? "" : "flex-col"}
                        flex justify-between items-center 
                        md:gap-20 gap-5
                        md:px-10 px-5
                        md:py-15 py-3
                        border`}
                        initial={{x: -200, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={` 
                            ${isDarkMode ? "text-black/90" : "text-white/90"} 
                            text-4xl font-bold md:w-140 w-full md:h-full`}
                        >
                            Web Apps,  <span className="font-thin">Build Clean.</span>
                        </h1>

                        <p className={` ${isDarkMode ? "text-black/60" : "text-white/60"} text-xl flex-1`}>
                            I build responsive web apps with nextjs, 
                            focused on clear layouts, working features and code that is easy to read.
                        </p>
                    </motion.div>

                   {/* other Skills */}
                    <AnimatePresence>
                        {otherSkills && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden"
                            >

                                {/* item 4 */}
                                <motion.div
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    exit={{ x: -200, opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1
                                    }}
                                    className={`${
                                        isDarkMode
                                            ? "border-black/30"
                                            : "border-white/30"
                                    }
                                    ${mobileSize ? "" : "flex-col"}
                                    flex justify-between items-center
                                    md:gap-20 gap-5
                                    md:px-10 px-5
                                    md:py-15 py-3
                                    border`}
                                >
                                    <h1
                                        className={`${
                                            isDarkMode
                                                ? "text-black/90"
                                                : "text-white/90"
                                        }
                                        text-4xl font-bold md:w-140 w-full md:h-full`}
                                    >
                                        Electrician, <span className="font-thin">Wiring & Electrical Work.</span>
                                    </h1>

                                    <p
                                        className={`${
                                            isDarkMode
                                                ? "text-black/60"
                                                : "text-white/60"
                                        } text-xl flex-1`}
                                    >
                                        I have basic experience with electrical wiring, 
                                        installation, and troubleshooting. 
                                        I can work with common electrical components and 
                                        tools while following proper safety practices.
                                    </p>
                                </motion.div>


                                {/* item 5 */}
                                <motion.div
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    exit={{ x: -200, opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2
                                    }}
                                    className={`${
                                        isDarkMode
                                            ? "border-black/30"
                                            : "border-white/30"
                                    }
                                    ${mobileSize ? "" : "flex-col"}
                                    flex justify-between items-center
                                    md:gap-20 gap-5
                                    md:px-10 px-5
                                    md:py-15 py-3
                                    border`}
                                >
                                    <h1
                                        className={`${
                                            isDarkMode
                                                ? "text-black/90"
                                                : "text-white/90"
                                        }
                                        text-4xl font-bold md:w-140 w-full md:h-full`}
                                    >
                                        Welder, <span className="font-thin">Fabrication & Metal Work.</span>
                                    </h1>

                                    <p
                                        className={`${
                                            isDarkMode
                                                ? "text-black/60"
                                                : "text-white/60"
                                        } text-xl flex-1`}
                                    >
                                        I have basic experience in welding and metal fabrication, 
                                        including working with different materials and tools. 
                                        I can perform simple welding tasks and 
                                        basic metalwork for repair and fabrication.
                                    </p>
                                </motion.div>

                                {/* item 6 */}
                                <motion.div
                                    initial={{ x: 200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    exit={{ x: -200, opacity: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1
                                    }}
                                    className={`${
                                        isDarkMode
                                            ? "border-black/30"
                                            : "border-white/30"
                                    }
                                    ${mobileSize ? "" : "flex-col"}
                                    flex justify-between items-center
                                    md:gap-20 gap-5
                                    md:px-10 px-5
                                    md:py-15 py-3
                                    border`}
                                >
                                    <h1
                                        className={`${
                                            isDarkMode
                                                ? "text-black/90"
                                                : "text-white/90"
                                        }
                                        text-4xl font-bold md:w-140 w-full md:h-full`}
                                    >
                                        Mechanic, <span className="font-thin">Maintenance & Repair.</span>
                                    </h1>

                                    <p
                                        className={`${
                                            isDarkMode
                                                ? "text-black/60"
                                                : "text-white/60"
                                        } text-xl flex-1`}
                                    >
                                        I have basic experience with motorcycle maintenance, 
                                        troubleshooting, and repair. 
                                        I understand common mechanical components and can 
                                        perform basic inspection, adjustment, and maintenance tasks.
                                    </p>
                                </motion.div>

                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                <div className={` flex justify-center items-center`}>
                    <p 
                        onClick={() => setOtherSkills(!otherSkills)}
                        className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                        hover:text-blue-500/60 cursor-pointer flex gap-2`}
                    >
                        {otherSkills ? "less Other Skills" : "See other skills" }
                        {otherSkills ? <ArrowUp /> : <ArrowDown /> }
                    </p>
                </div>
            </div>

        </section>
    )
}