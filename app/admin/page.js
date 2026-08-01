'use client';

import { useState } from "react";

import Sidebar from "./layout/Sidebar";
import MobileHeader from "./layout/MobileHeader";
import MobileMenu from "./layout/MobileMenu";

import Dashboard from "./menuList/Dashboard";
import DataManagement from "./menuList/DataManagement";

export default function Admin() {

    const [activePage, setActivePage] = useState("dashboard");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <div className="flex h-screen">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />

            <div className="flex-1 min-w-0">

                <MobileHeader
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}

                />

                <MobileMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    activePage={activePage}
                    setActivePage={setActivePage}
                />

                <main >

                    {
                        activePage === "dashboard" &&
                        <Dashboard />
                    }

                    {
                        activePage === "data" &&
                        <DataManagement />
                    }

                </main>

            </div>

        </div>

    );

}