'use client'
import { motion } from "framer-motion";

import { Plus, Minus } from "lucide-react";

import { useState } from 'react'

export default function Faq( {isDarkMode, mobileSize}) {

    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "What roles are you looking for?",
            answer: "Junior developer or internship roles in web or mobile development. I'm open to remote and on-site work."
        },
        {
            question: "What is your tech stack?",
            answer: "JavaScript, React, MongoDB, NextJS. I use Git and GitHub daily."
        },
        {
            question: "Do you have professional experience?",
            answer: "Not yet. My experience comes from three self-built projects. Each one is linked above with its source code so you can see how I work."
        },
        {
            question: "Do you take freelance or capstone projects?",
            answer: "Yes, small ones. Send me the details and I'll tell you honestly if I can do it and how long it will take."
        }
    ];

    return (
        <section
            id="faq"
            className={` ${isDarkMode ? "bg-white" : "bg-black"} md:px-30 px-5 pt-20 pb-40`}
        >
            <h6 className={` ${isDarkMode ? "text-black/60" : "text-white/60" } text-md `}>QUESTIONS</h6>

            <motion.h1 className={` ${isDarkMode ? "text-black" : "text-white"} 
                md:text-5xl text-3xl
                font-bold
                pl-5 pt-3 mb-5
                `}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Got questions? <span className="font-thin">Quick Answer.</span>
            </motion.h1>

            {/* question container */}
            {questions.map((item, index) => (
                <motion.div key={index} className="flex flex-col gap-5 "
                    initial={{scale: 0.8, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: 1}}
                >

                    <div
                        className={`
                            ${isDarkMode
                                ? "text-black/60 border-black/30"
                                : "text-white/60 border-white/30"
                            }

                            ${openIndex === index ? "pt-4" : "py-4"}
                            border-t px-2 
                            flex justify-between items-center
                        `}
                    >
                        <h1
                            className={`
                                ${isDarkMode ? "text-black" : "text-white"}
                                text-xl
                            `}
                        >
                            {item.question}
                        </h1>

                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            {openIndex === index ? <Minus /> : <Plus />}
                        </button>
                    </div>

                    <p
                        className={`
                            ${openIndex === index ? "flex" : "hidden"}
                            ${isDarkMode ? "text-black/40" : "text-white/40"}
                            px-2 text-2xl
                        `}
                    >
                        {item.answer}
                    </p>

                </motion.div>
            ))}
                


        </section>
    );
}