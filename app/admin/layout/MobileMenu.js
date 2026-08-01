'use client';

import { resize } from "framer-motion";
import { useEffect } from "react";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileMenu({isMenuOpen, setIsMenuOpen, activePage, setActivePage,}) {
    
    const router = useRouter();

    const handleLogout = () => {
        router.push("/#projects")
    }

    if (!isMenuOpen) return null;

    return (

        <div className="md:hidden absolute w-full flex flex-col justify-center gap-10 bg-gray-800 text-white pb-5 mt-17">

            <div>
                <button
                    onClick={() => {
                        setActivePage("dashboard");
                        setIsMenuOpen(false);
                    }}
                    className={`w-full py-4 cursor-pointer ${
                        activePage === "dashboard" ? "bg-cyan-500" : "hover:bg-gray-700" }`}
                >
                    Dashboard
                </button>

                <button
                    onClick={() => {
                        setActivePage("data");
                        setIsMenuOpen(false);
                    }}
                    className={`w-full py-4 cursor-pointer ${
                        activePage === "data" ? "bg-cyan-500" : "hover:bg-gray-700"}`}
                >
                    Data Management
                </button>
            </div>

            <div className="flex justify-end pr-10 ">
                <button className="cursor-pointer"
                        onClick={handleLogout}
                >
                    <LogOut />
                </button>
            </div>
        </div>

    );

}