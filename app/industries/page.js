'use client';
import React from "react";
import Navbar from "@/components/nav";

import { useRouter } from "next/navigation";

const Home = () => {

    const router = useRouter();

    const industries = [
        { 
            name: "AUTOMOTIVE", 
            description: "Toplogic offers end-to-end automotive solutions focusing on supply chain management, dealer networks, and ERP systems to improve productivity and efficiency.",
            link: "automotive"
        },
        { 
            name: "REAL ESTATE", 
            description: "Toplogic empowers real estate businesses with CRM solutions, property management portals, and mobile apps to enhance buyer engagement and property showcasing.",
            link: "real-estate"
        },
        { 
            name: "ENTERTAINMENT", 
            description: "Toplogic delivers cutting-edge entertainment solutions, including media platforms, gaming applications, and content streaming systems, to captivate global audiences.",
            link: "entertainment"
        },
        { 
            name: "RETAIL & ECOMMERCE", 
            description: "Toplogic provides optimized eCommerce solutions, integrating mobile apps, CRM systems, and personalized shopping experiences to grow your retail business.",
            link: "e-commerce"
        },
        { 
            name: "HEALTHCARE", 
            description: "Toplogic develops innovative healthcare solutions to comply with regulations, improve patient care, and manage hospital resources efficiently.",
            link: "healthcare"
        },
        { 
            name: "TRANSPORTATION", 
            description: "Toplogic delivers transportation solutions for logistics, fleet management, and route optimization, ensuring seamless supply chain operations and cost savings.",
            link: "transportation"
        },
        { 
            name: "MANUFACTURING", 
            description: "Toplogic integrates ERP and inventory management systems to streamline production, elevate capacity management, and enhance manufacturing workflows.",
            link: "manufacturing"
        },
        { 
            name: "FINTECH", 
            description: "Toplogic drives innovation in financial technology with secure, scalable solutions for digital payments, banking systems, and financial data analysis.",
            link: "fintech"
        },
        { 
            name: "TRAVEL & TOURISM", 
            description: "Toplogic enhances travel experiences with cutting-edge booking systems, itinerary planning tools, and customer support platforms for travelers worldwide.",
            link: "travel-and-tourism"
        },
        { 
            name: "SOFTWARE VENDORS", 
            description: "Toplogic supports software vendors with solutions for development, deployment, and maintenance of scalable and secure applications.",
            link: "software-vendors"
        },
        { 
            name: "EDUCATION", 
            description: "Toplogic transforms education through e-learning platforms, student management systems, and digital classrooms to enable better learning experiences.",
            link: "education"
        },
        { 
            name: "PROFESSIONAL SERVICES", 
            description: "Toplogic delivers powerful e-commerce platforms with secure payment systems, advanced analytics, and personalized customer journeys to drive growth.",
            link: "professional-services"
        },
    ];

    return (
        <>
            <Navbar/>
            {/* Video Section */}
            <div className="relative w-screen md:h-[631px]">
    <video
        className="w-full h-full object-cover absolute top-0 left-0"
        src="/industries_video.mp4"
        autoPlay
        loop
        muted
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

    {/* Heading Section */}
    <div className="flex flex-col justify-center relative text-white text-center z-50 top-32">
        <h1 className="text-[100px] md:text-[150px] mt-5 font-Poppins font-semibold uppercase animate-colorShift drop-shadow-md">
            Industries
        </h1>
        <p className="text-xl font-semibold max-w-4xl mx-auto px-4">
            Toplogic helps accelerate innovation and gratify industry-specific best practices to help run your core business efficiently.
        </p>
    </div>
</div>

            {/* Grid Section */}
            <div className="w-screen bg-slate-100 py-16 relative ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10 lg:px-20">
                    {industries.map((industry, index) => (
                        <div 
                            key={index} 
                            className="p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 group border-t-4 border-transparent hover:border-green-700 hover:cursor-pointer"
                         onClick={() => router.push(`/industries/${industry.link}`)}>
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-20 h-20 bg-green-700 text-white rounded-full flex items-center justify-center text-3xl font-bold group-hover:bg-black transition-all duration-500">
                                    {industry.name[0]}
                                </div>
                            </div>
                            <h2 className="text-green-700 text-2xl font-bold uppercase mb-4 text-center group-hover:text-black transition-all duration-300">
                                {industry.name}
                            </h2>
                            <p className="text-gray-700 text-md leading-relaxed text-justify group-hover:text-gray-500 transition-all duration-300">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="bg-black text-white text-center py-4">
                <p className="font-Lato">&copy; {new Date().getFullYear()} Toplogic Softlabs Pvt Ltd. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Home;
