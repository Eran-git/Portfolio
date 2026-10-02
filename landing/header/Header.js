'use client';

import { Menu, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header( {isDarkMode, setDarkMode, mobileSize }) {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setisMenuOpen(!isMenuOpen);
    }

    const navLinks = [
        {name: "Home", href: "#hero"},
        {name: "About", href: "#about"},
        {name: "Projects", href: "#projects"},
        {name: "FAQ", href: "#faq"},
    ]

    useEffect(() => {
        if(isMenuOpen) {
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isMenuOpen])

    return (
        <>
            <header className={` ${isDarkMode ? "bg-white" : "bg-black"} relative animation-fadeIn text-white py-2 md:px-35 px-10 w-full z-1000 border-b border-gray-700`}>
                <div 
                    className="
                        container 
                        flex justify-between items-center
                        text-gray-100 
                        md:text-base
                    "
                >

                    <div className='flex justify-center items-center gap-5'>
                        <h1 className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                            font-alex font-bold text-5xl `}
                        >
                                EA
                        </h1>
                        <h1 className={` ${isDarkMode ? "text-black/60" : "text-white/60"} 
                            font-bold text-xl `}>Eran Agbuya</h1>
                    </div>

                    <div className={` ${mobileSize ? "gap-5" : "flex-row-reverse gap-1"} flex justify-center items-center `}>
                        
                        <ul className={` ${isMenuOpen ? 'flex bg-black' : 'hidden'}
                            absolute top-16 left-0 w-full h-50 flex flex-col items-center gap-4 text-white py-4 md:py-0
                            md:flex md:static md:flex-row md:w-auto md:h-auto z-1000
                            `} 
                        >
                            {navLinks.map((link) => (
                                <li key={link.name} className="inline-block mr-4 text-gray-400">
                                <a 
                                    href={link.href}
                                    className="hover:underline-none hover:text-cyan-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                            ))}

                        </ul>

                        <a 
                            href="#contact"
                            className='
                                bg-cyan-500 hover:bg-cyan-600 
                                text-white/90 hover:text-white font-bold 
                                py-2 px-5 rounded-full 
                                md:flex hidden
                                cursor-pointer'
                        >

                            Inquire

                        </a>

                        <div className="
                            w-8 h-8 flex items-center justify-center 
                            md:hidden hover:border hover:border-cyan-500 
                            rounded 
                            transition 
                            duration-300">
                            <button className="text-cyan-500 focus:outline-none" onClick={handleMenuClick}>
                                <Menu />
                            </button>
                        </div>

                        <button 
                            onClick={() => setDarkMode(!isDarkMode)}
                            className={`
                                ${isDarkMode ? "bg-black" : "bg-white"}
                                text-center p-2 rounded-full 
                                border border-cyan-600 
                                active:bg-cyan-500 
                                active:text-black
                                cursor-pointer
                            `}
                        >
                            {isDarkMode ? <Sun size={20} color='white' /> : <Moon size={20} color='black'  />}
                        </button>
                    
                    </div>
        
                </div>
            </header>
        </>
    )
}