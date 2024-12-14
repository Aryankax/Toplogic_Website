'use client';
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/Toplogic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const router = useRouter();

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
                <Image alt="logo" src={logo} width={100} height={undefined} className="hover:cursor-pointer" onClick={() => router.push("/")}></Image>
                <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
                    <p className="font-lato text-3xl uppercase font-bold">Toplogic</p>
                    <p className="font-lato text-3xl uppercase font-medium md:font-bold text-center md:absolute md:top-[32px] md:left-64">Softlabs</p>
                </div>
                <div className="relative hidden md:flex md:items-center md:text-base md:gap-4 md:ml-64 lg:ml-80 xl:ml-[32rem] 2xl:ml-[36rem]"
  id="navButtons"
>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all" onClick={() => router.push("/about-us")}>ABOUT US</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all" onClick={() => router.push("/services")}>SERVICES</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all" onClick={() => router.push("/industries")}>INDUSTRIES</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all" onClick={() => router.push("/projects")}>PROJECTS</button>
                <button className="hover:text-green-800 navButton hover:border-b-4 hover:border-green-800 transition-all" onClick={() => router.push("/contact-us")}>CONTACT US</button>
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
                        onClick={() => router.push("/about-us")}>
                        About Us
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                        onClick={() => router.push("/services")}>
                        Services
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                        onClick={() => router.push("/industries")}>
                        Industries
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                         onClick={() => router.push("/projects")}>
                        Projects
                    </button>
                    <button
                        className="text-white text-2xl hover:text-green-800 transition-all uppercase"
                        onClick={() => router.push("/contact-us")}>
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
