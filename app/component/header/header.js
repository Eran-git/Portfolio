'use client';
import About from '../about/about';
import Projects from '../project/project';
import Skills from '../skill/skill';

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setisMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <header className="animation-fadeIn fixed top-0 bg-gray-800 text-white py-4 w-full z-1000">
                <div className="container flex justify-between items-center mx-auto px-4 text-cyan-500 md:text-base">
                    <h1 className="text-2xl font-bold">Eran</h1>

                    <ul className={` ${isMenuOpen ? 'flex' : 'hidden'}
                        absolute top-16 left-0 w-full h-50 flex flex-col items-center gap-4 bg-gray-800 text-white py-4 md:py-0
                        md:flex md:static md:flex-row md:w-auto md:h-auto
                        `} 
                    >
                        <li className="inline-block mr-4 text-cyan-500">
                            <a href="#about" className="hover:underline-none hover:text-cyan-200">
                                About
                            </a>
                        </li>
                        <li className="inline-block mr-4 text-cyan-500">
                            <a href="#projects" className="hover:underline-none hover:text-cyan-200">
                                Projects
                            </a>
                        </li>
                        <li className="inline-block mr-4 text-cyan-500">
                            <a href="#skills" className="hover:underline-none hover:text-cyan-200">
                                Skills
                            </a>
                        </li>
                    </ul>
        
                    <div className="w-8 h-8 flex items-center justify-center md:hidden hover:border hover:border-cyan-500 rounded transition duration-300">
                        <button className="text-cyan-500 focus:outline-none" onClick={handleMenuClick}>
                            <Menu />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}