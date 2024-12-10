'use client';
import Image from "next/image";
import React from "react";



const IndustryDiv = ({imageSrc, Name, Description}) => {
    return(
        <>
                <div className="flex-none w-[200px] h-[350px] border border-black bg-white rounded-lg transition-transform hover:scale-105 hover:bg-slate-800 duration-300">
                <img
        src="automotive.jpg" 
        alt="Industry"
        className="w-[200px] h-[350px] rounded-lg opacity-90 z-0"
      />     
                <h1 className="relative font-Poppins text-2xl font-bold text-white z-10 -top-52 text-center">{Name}</h1>
            </div>
        </>
    );
};

export default IndustryDiv;
