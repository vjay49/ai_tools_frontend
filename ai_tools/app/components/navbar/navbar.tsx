"use client";
import Link from "next/link";
import Image from "next/image";
import Tabs from "./tabs";
import Usernav from "./usernav";
import Signup from "./signup";
import SearchAI from "../searchbar/searchai";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { useState, useEffect } from "react";

const Navbar = () => {
    const { scrollPosition, isScrollingUp } = useScrollPosition();
    const [showTabs, setShowTabs] = useState(true);
    const [showMiniSearch, setShowMiniSearch] = useState(false);

    const scrollThreshold = 100; // Define the scroll threshold

    useEffect(() => {
        if (scrollPosition > scrollThreshold) {
            setShowTabs(false);
            setShowMiniSearch(true);
        } else {
            setShowTabs(true);
            setShowMiniSearch(false);
        }
    }, [scrollPosition]);

    return (
        <nav className="w-full fixed top-0 left-0 py-1.5 bg-white z-20">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/AI.png"
                            alt="Find AI logo"
                            width={129}
                            height={100}
                        />
                    </Link>

                    <div className="flex-1 flex justify-center flex-col items-center relative">
                        <div className={`transition-all duration-300 ${
                            showTabs 
                                ? 'opacity-100 pointer-events-auto'
                                : 'opacity-0 pointer-events-none'
                        }`}>
                            <Tabs />
                        </div>

                        <div className={`absolute transition-opacity duration-300 ${
                            showMiniSearch 
                                ? 'opacity-100 pointer-events-auto'
                                : 'opacity-0 pointer-events-none'
                        }`}>
                            <SearchAI compact={true} />
                        </div>
                    </div>

                    <div className="flex items-center space-x-1">
                        <Signup />
                        <Usernav />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;