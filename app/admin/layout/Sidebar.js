'use client';

import ProfileImage from "./ProfileImage";

import { LogOut } from 'lucide-react'
import { useRouter } from "next/navigation";

export default function Sidebar({activePage, setActivePage}) {

    const router = useRouter();

    const handleLogout = () => {
        router.push("/#projects");
    }


    return (
        <aside className="hidden md:flex flex-col justify-between items-center w-70 h-screen bg-gray-800 text-white py-5">

            <div className="w-full">
                <div className="mt-10">
                    <ProfileImage />

                    <h1 className="text-center mt-5 text-xl font-bold">
                        Eran
                    </h1>
                </div>

                <div className="flex flex-col gap-3 w-full mt-10 px-4">

                    <button
                        onClick={() => setActivePage("dashboard")}
                        className={`py-3 rounded-lg transition
                            ${
                                activePage === "dashboard"
                                    ? "bg-cyan-500"
                                    : "hover:bg-gray-700"
                            }`}
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => setActivePage("data")}
                        className={`py-3 rounded-lg transition
                            ${
                                activePage === "data"
                                    ? "bg-cyan-500"
                                    : "hover:bg-gray-700"
                            }`}
                    >
                        Data Management
                    </button>

                </div>
            </div>
        
            <div className="w-full">
                <button className=" flex justify-end w-full pr-5"
                    onClick={handleLogout}
                >
                        <LogOut size={30} />
                </button>

            </div>
        </aside>
    );
}