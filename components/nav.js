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
            <div className="flex items-center md:relative">
                <Image alt="logo" src={logo} width={100} height={undefined}></Image>
                <div className="">
                    <p className="font-lato text-3xl uppercase font-bold">Toplogic</p>
                    <p className="font-lato text-3xl uppercase font-medium md:font-bold text-center md:absolute md:top-[32px] md:left-64">Softlabs</p>
                </div>
                <div className="relative Buttons md:flex md:text-md md:items-center md:block hidden md:ml-[250px] md:gap-5 lg:ml-[570px] xl:ml-[670px] xl:gap-5" id="navButtons">
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all">ABOUT US</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all">SERVICES</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all">INDUSTRIES</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all">PROJECTS</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all">CONTACT US</button>
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
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase" 
                    >
                        About Us
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                    >
                        Services
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                    >
                        Industries
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                    >
                        Projects
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
