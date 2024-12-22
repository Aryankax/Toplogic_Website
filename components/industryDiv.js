'use client';
import React from "react";
import { useRouter } from "next/navigation";

const IndustryDiv = ({ imageSrc, Name, Description, linkName }) => {
  const router = useRouter();

  return (
    <div
      className="group flex-none w-[200px] h-[370px] bg-white rounded-lg z-10 overflow-hidden hover:cursor-pointer border-[1px] border-gray-400 hover:bg-green-700 transition-colors duration-300"
      onClick={() => router.push(`industries/${linkName}`)}
    >
      <img
        src={imageSrc}
        alt="Industry"
        className="w-[80px] h-[80px] mx-auto mt-5"
      />
      <h1 className="uppercase font-Poppins text-xl font-bold text-green-800 group-hover:text-white transition-colors duration-200 text-center mt-5">
        {Name}
      </h1>
      <p className="text-black text-center group-hover:text-white transition-colors duration-200 font-light p-2">{Description}</p>
    </div>
  );
};

export default IndustryDiv;
