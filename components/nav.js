'use client';
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/Toplogic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    // Close menu when clicking outside
    const handleOverlayClick = (e) => {
        if (e.target.id === "menuOverlay") {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="text-white border-b border-l-0 border-t-0 border-r-0 bg-black p-4 justify-between items-center relative flex">
            {/* Logo Section */}
            <div className="flex items-center">
                <Image alt="logo" src={logo} width={100} height={undefined}></Image>
                <div className="">
                    <p className="font-lato text-3xl uppercase font-bold">Toplogic</p>
                    <p className="font-lato text-xl uppercase font-medium text-center">Softlabs</p>
                </div>
            </div>

            {/* Menu Button */}
            <div className="md:hidden items-center z-30">
                <FontAwesomeIcon
                    icon={isMenuOpen ? faTimes : faBars} // Toggle between menu and close icons
                    className={`text-3xl cursor-pointer hover:text-green-800`}
                    onClick={toggleMenu} // Handle click event
                />
            </div>

            {/* Fullscreen Menu Overlay */}
            {isMenuOpen && (
                <div
                    id="menuOverlay"
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6 w-screen top-[133px] font-Roboto"
                    onClick={handleOverlayClick} // Close menu when clicking outside
                >
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all" 
                    >
                        About Us
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all"
                    >
                        Services
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all"
                    >
                        Industries
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all"
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
