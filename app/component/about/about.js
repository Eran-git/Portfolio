'use client'
import { useState }from 'react'
import GallaryModel from './gallaryModel.js'
import { motion } from 'framer-motion' 

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* container */}
            <div id="about" className="flex flex-col justify-between items-center gap-20 min-h-screen py-2"> 

                {/* child 1 */}
                <motion.div className="animation-fadeIn animation-shine bg-gradient-to-r from-blue-500 via-white to-purple-500
                            bg-clip-text text-transparent [background-size:200%_100%]"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                >
                    <h1 className="text-3xl font-bold md:text-6xl">Educational Attainment</h1>
                </motion.div>

                {/* child 2 */}
                <div className="flex flex-col justify-center items-center gap-5 md:gap-20 md:flex-row">
                    {/* grandChild 1 */}
                    <div className= "flex flex-col gap-5 justify-center items-center md:gap-20">

                        {/* item 1    */}
                        <motion.div className="group flex flex-col items-center justify-center 
                                    w-70 h-80 border-1 boreder-gray-400 rounded-lg relative md:w-80 md:h-100"
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2 }}
                        >
                            <div className="flex flex-col justify-center items-center gap-2 absolute z-10 group-hover:[display:none]">
                                <p className="text-4xl font-semibold">Junior</p>
                                <p className="text-sm text-center px-10">Graduated at Bagong Silang Star Elementary School</p>
                                <p>2006 - 2012</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1 w-[100%] h-[100%]">
                                <div 
                                    onClick={() => setIsOpen(true)}
                                    className="grid grid-cols-3 w-full h-100 bg-gray-400 transition-transform 
                                    duration-300 hover:scale-96 overflow-hidden blur z-0 hover:blur-none ">
                                    <img src="/images/junior/1.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/2.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/3.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/4.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/5.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/6.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/7.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/8.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/9.jpg" className="w-40 h-35 "></img>
                                </div>
                                <GallaryModel 
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            </div>
                        </motion.div>

                        {/* item 2 */}
                        <motion.div className="group flex flex-col items-center justify-center w-70 h-80 
                                    border-1 boreder-gray-400 rounded-lg relative md:w-80 md:h-100"
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2 }}
                        >
                            <div className="flex flex-col justify-center items-center gap-2 absolute z-10 group-hover:[display:none]">
                                <p className="text-3xl font-semibold">Senior High School</p>
                                <p className="text-sm text-center px-10">Graduated at St.clare Collage of Caloocan</p>
                                <p>2022 - 2014</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1 w-[100%] h-[100%]">
                                <div 
                                    onClick={() => setIsOpen(true)}
                                    className="grid grid-cols-3 w-full h-100 bg-gray-400 transition-transform 
                                    duration-300 hover:scale-96 overflow-hidden blur z-0 hover:blur-none ">
                                    <img src="/images/junior/1.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/2.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/3.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/4.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/5.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/6.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/7.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/8.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/9.jpg" className="w-40 h-35 "></img>
                                </div>
                                <GallaryModel 
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            </div>
                        </motion.div>

                    </div>
                    {/* grandChild 2 */}
                    <div className="flex flex-col gap-5 justify-center items-center md:gap-20">
                        {/* item 3 */}
                        <motion.div className="group flex flex-col items-center justify-center w-70 h-80 
                                    border-1 boreder-gray-400 rounded-lg relative md:w-80 md:h-100"
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2 }}
                        >
                            <div className="flex flex-col justify-center items-center gap-2 absolute z-10 group-hover:[display:none]">
                                <p className="text-4xl font-semibold">High School</p>
                                <p className="text-sm text-center px-10">Graduated at Bagong Silang high School</p>
                                <p>2012 - 2016</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1 w-[100%] h-[100%]">
                                <div 
                                    onClick={() => setIsOpen(true)}
                                    className="grid grid-cols-3 w-full h-100 bg-gray-400 transition-transform 
                                    duration-300 hover:scale-96 overflow-hidden blur z-0 hover:blur-none ">
                                    <img src="/images/junior/1.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/2.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/3.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/4.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/5.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/6.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/7.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/8.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/9.jpg" className="w-40 h-35 "></img>
                                </div>
                                <GallaryModel 
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            </div>
                        </motion.div>

                        {/* item 4 */}
                        <motion.div className="group flex flex-col items-center justify-center w-70 h-80 
                                        border-1 boreder-gray-400 rounded-lg relative md:w-80 md:h-100"
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 2 }}
                        >
                            <div className="flex flex-col justify-center items-center gap-2 absolute z-10 group-hover:[display:none]">
                                <p className="text-4xl font-semibold">Collage</p>
                                <p className="text-sm text-center px-10">currently pursuing a degree in Computer science</p>
                                <p>2024 - present</p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1 w-[100%] h-[100%]">
                                <div 
                                    onClick={() => setIsOpen(true)}
                                    className="grid grid-cols-3 w-full h-100 bg-gray-400 transition-transform 
                                    duration-300 hover:scale-96 overflow-hidden blur z-0 hover:blur-none ">
                                    <img src="/images/junior/1.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/2.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/3.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/4.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/5.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/6.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/7.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/8.jpg" className="w-40 h-35 "></img>
                                    <img src="/images/junior/9.jpg" className="w-40 h-35 "></img>
                                </div>
                                <GallaryModel 
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    )

}