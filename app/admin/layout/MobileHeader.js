'use client';

import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function MobileHeader({isMenuOpen, setIsMenuOpen}) {

    return (

        <header className="md:hidden absolute Z-100 flex flex-col justify-between items-center w-full px-5 py-5 bg-gray-800 text-white overflow-hidden">
            <div className="flex justify-between items-center w-full h-full">
                <h1 className="font-bold text-xl">
                    Eran
                </h1>

                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    <Menu size={28}/>
                </button>

            </div>

        </header>

    );

}