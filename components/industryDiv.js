'use client';
import Image from "next/image";
import React from "react";



const IndustryDiv = ({imageSrc, Name, Description}) => {
    return(
        <>
                <div className="flex-none w-[200px] h-[350px] bg-white rounded-lg transition-transform hover:scale-105 z-10 hover:shadow-lg hover:shadow-green-700">
                <img
                src={imageSrc} 
                alt="Industry"
                className="w-[200px] h-[350px] rounded-lg opacity-90 z-0"
                />
                <h1 className="relative uppercase font-Poppins text-xl font-bold text-white z-10 -top-48 text-center">{Name}</h1>
                <div className="bg-gray-800 w-[200px] h-[352px] opacity-50 relative md:-top-[379px] rounded-lg hover:opacity-0 transition-all duration-500 -top-[379px] hover:scale-105">
                </div>  
            </div>
        </>
    );
};

export default IndustryDiv;
