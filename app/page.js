'use client';
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import Image from "next/image";
import cloud from "../images/cloud.png"
import ai from "../images/ai_2.png";
import mobile from "../images/mobile.png";
import digital from "../images/digital_transformation.png";
import IndustryDiv from "@/components/industryDiv";
import ServicesCard from "@/components/servicesCard";
import webDev from "../images/web-dev.png";
import appDev from "../images/app-dev.png";
import aiml from "../images/ai3.png";
import software from "../images/software-dev.png";
import devops from "../images/devops.png";
import seo from "../images/seo.png";
import employee from "../images/employee.png";
import Commitment from "@/components/commitment";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [countBool, setCountBool] = useState(false);
    const [isClient, setIsClient] = useState(false); 

    const [isAi, setAi] = useState(false);
    const [isBlockChain, setBlockChain] = useState(false);
    const [isIOT, setIOT] = useState(false);
    const [isBigData, setBigData] = useState(false);
    const [isCloud, setCloud] = useState(false);

    const statsRef = useRef(null);
    const industryRef = useRef(null);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const [selectedTech, setSelectedTech] = useState("ai");

    const toggleContent = (tech) => {
        setSelectedTech(tech);
    };

    useEffect(() => {
            setIsClient(true); 
            const Tawk_API = window.Tawk_API || {}, Tawk_LoadStart = new Date();
            const script = document.createElement("script");
            script.async = true;
            script.src = apiKey;
            script.charset = 'UTF-8';
            script.setAttribute('crossorigin', '*');
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
    }, []);

    // GSAP animation
    useGSAP(() => {
        // Hero animation
        gsap.from('#Hero-Content', {
            opacity: 0,
            duration: 2,
        });

        // Stats section scroll trigger
        const trigger = ScrollTrigger.create({
            trigger: statsRef.current,
            start: "top center",
            onEnter: () => setCountBool(true),
            onLeaveBack: () => setCountBool(false),
        });

        // gsap.to(industryRef.current, {
        //     x: "-1560px",
        //     scrollTrigger: {
        //         trigger: "#industries",
        //         scroller: "body",
        //         markers: false,
        //         start: "top 20%",
        //         end: "top -560%",
        //         scrub: 2,
        //         pin: true
        //     }
        // })

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <>
            <div className="relative bg-black min-h-screen overflow-x-hidden   sm:overflow-x-scroll w-screen">
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>
                

                {/* Video Background */}
                <video
                    className="hidden absolute w-screen h-[720px] md:h-[640px] z-10 md:object-cover md:block"
                    src="/Toplogic_Video.mp4"
                    autoPlay
                    loop
                    muted
                />

                {/* Dark Overlay */}
                <div className="absolute opacity-80 bg-gradient-to-r from-black via-green-950 to-green-800 w-full h-[1000px] md:z-20 md:bg-black md:opacity-70"></div>

                {/* Hero Section Content */}
                <section
                    className="Hero-section-content text-white relative w-screen h-screen md:h-[640px] z-20"
                    id="Hero-Content"
                >
                    <div className="md:relative md:flex md:flex-col md:left-10 md:h-screen md:w-screen md:justify-center">
                    <p className="font-Poppins font-bold text-green-500 absolute md:top-44 md:text-[100px] uppercase transition-colors duration-300 hover:text-green-300 top-44 text-[40px] ml-3">
                        Revolutionizing
                    </p>
                    <p className="font-Poppins font-bold text-green-500 relative md:top-[270px] md:text-[100px] uppercase transition-colors duration-300 hover:text-green-300 top-56 text-[40px] ml-3">
                        It Solutions.
                    </p>
                    <div className="md:w-[800px] h-full md:top-[250px] md:p-2 text-justify md:mt-2 flex mt-60 ml-3 mr-6 relative">
                        <p className="font-Poppins text-[18px]">
                            Toplogic Softlabs is at the forefront of innovation, delivering cutting-edge IT solutions that are transforming industries. With a focus on excellence and sustainability, we provide tailor-made technology services designed to streamline operations, enhance efficiency, and drive growth. We are committed to revolutionizing the digital landscape, ensuring our clients stay ahead in the fast-paced world of technology.
                        </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="Facts-and-Figures" ref={statsRef}>
                    <div className="border-2 relative z-40 w-screen md:h-[450px] bg-gray-200 h-[820px]">
                        <h1 className="text-center md:text-[70px] font-Poppins font-extrabold uppercase relative md:top-4 top-3 text-[30px]">
                            Empowering Success
                        </h1>
                        <h1 className="text-center relative md:text-[30px] font-Poppins font-bold text-green-800 top-2">
                            Our Achievements in Numbers
                        </h1>

                        {/* Grid Layout for Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:mt-12 px-8 md:px-8 md:max-w-7xl md:mx-auto relative top-8 md:top-10">
                            {/* Card 1 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-5xl font-extrabold">
                                    {isClient && countBool && <CountUp start={0} end={20} duration={2.75} />}
                                    <span className="text-green-800">+</span>
                                </p>
                                <p className="text-lg mt-2 uppercase">Years of experience</p>
                            </div>

                            {/* Card 2 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-5xl font-extrabold">
                                    {isClient && countBool && <CountUp start={0} end={200} duration={2.75} />}
                                    <span className="text-green-800">+</span>
                                </p>
                                <p className="text-lg mt-2 uppercase">Projects Executed</p>
                            </div>

                            {/* Card 3 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-5xl font-extrabold">
                                    {isClient && countBool && <CountUp start={0} end={100} duration={2.75} />}
                                    <span className="text-green-800">+</span>
                                </p>
                                <p className="text-lg mt-2 uppercase">Happy Clients</p>
                            </div>

                            {/* Card 4 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-lg font-bold mt-1 uppercase">
                                    INTERNATIONAL CLIENTS
                                </p>
                                <p className="text-lg  uppercase">
                                    AND
                                </p>
                                <p className="text-lg font-bold uppercase">
                                    GLOBAL RECOGNITION
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative md:top-20 md:left-14 top-10 left-10 w-screen md:h-[1390px] h-[2800px] overflow-x-auto">
                    <div className="md:flex md:flex-col md:items-center md:relative md:-left-[370px]">
                    <h1 className="text-white uppercase font-Poppins font-extrabold md:text-5xl text-5xl md:relative md:-left-[90px]">Elevate Your</h1>
                    <h1 className="text-white uppercase font-Poppins font-extrabold md:text-5xl text-4xl md:relative md:-left-20">Business With</h1>
                    <h1 className="text-white uppercase font-Poppins font-extrabold md:text-5xl text-3xl">Digital <span className="text-green-800">innovation</span>.</h1>
                    </div>
                    <div className="flex flex-col items-center relative -left-10 top-5 md:-left-96">
                    <div className="md:w-[500px] relative md:top-8 w-[300px] text-justify top-2 md:left-1">
                        <p className="text-gray-300 md:text-lg">At <span className="text-white font-bold">Toplogic Softlabs</span>, we excel in delivering world-class <span className="text-white font-bold">digital transformation consulting services</span> tailored to bridge the gap between <span className="text-white font-bold">business strategies and innovation</span>. Our team of experts specializes in reimagining business processes by integrating <span className="text-white font-bold">cutting-edge digital technologies</span> that empower enterprises to embrace modern digital ecosystems.
                        <span className="text-white font-bold"> Unlike one-size-fits-all solutions</span>, <span className="text-white font-bold">our approach focuses on developing a customized digital transformation framework</span>. We meticulously analyze your existing operating models and align them with <span className="font-bold text-white">industry-leading practices</span> to ensure seamless adaptation. Our consultants help businesses of all sizes—from <span className="font-bold text-white">startups to established industry leaders</span>—strategize and invest in open, <span className="font-bold text-white">scalable technologies</span> that <span className="text-white font-bold">elevate customer experiences</span>.
                        By <span className="text-white font-bold">leveraging automation, data-driven insights, and streamlined operations</span>, Toplogic Softlabs ensures your business stays ahead in the digital age. Unlock the potential of digital innovation with solutions designed to enhance <span className="text-white font-bold">efficiency</span>, <span className="text-white font-bold">agility</span>, and <span className="text-white font-bold">competitive advantage</span>.
                        </p>
                    </div>
                    <div className="relative text-white md:w-[650px] md:-top-[550px] md:left-[650px] md:h-[700px] md:grid md:grid-cols-2 md:grid-rows-2 md:text-center top-[30px]">
                        <div className="">
                                <Image src={cloud} width={60} height={undefined} className="md:h-auto relative md:left-32 md:top-1 left-32" alt="Cloud"></Image>
                                <p className="font-Poppins font-bold text-xl relative left-16 mt-3 mb-3 md:left-0">Cloud technology</p>
                                <p className="text-base text-gray-300 md:p-2 rounded-xl relative md:top-2 md:text-justify w-[300px] h-[200px] text-justify">We streamline your journey to the cloud, offering seamless migration and comprehensive management services. From complex infrastructure transitions to optimizing existing cloud assets, we ensure a smooth and efficient process. Our agile, scalable, and secure cloud environments empower your business to innovate faster, reduce costs, and drive growth.</p>
                        </div>
                        <div className="mt-20">
                                <Image src={ai} width={50} height={undefined} className="md:h-auto relative md:left-32 md:-top-[70px] left-32" alt="AI"></Image>
                                <p className="font-Poppins font-bold text-xl relative left-12 mt-3 mb-3 md:-top-16 md:-left-2">Artificial Intelligence</p>
                                <p className="text-base text-gray-300 md:p-2 rounded-xl relative md:-top-16 md:text-justify w-[300px] h-[200px] text-justify ">Optimize Your Operations with Intelligent Automation. Our experts implement RPA solutions to automate repetitive tasks and complex workflows. By integrating seamlessly with your ERP systems, we boost efficiency, reduce errors, and drive cost savings. This allows your team to focus on strategic initiatives and deliver exceptional results.</p>
                        </div>
                        <div className="mt-20">
                                <Image src={digital} width={50} height={undefined} className="h-[50px] relative md:left-32 left-32 md:-top-8" alt="Digital transformation"></Image>
                                <p className="font-Poppins font-bold md:text-xl relative text-center text-xl mt-3 mb-3 w-[300px] md:-top-5">Digital Transformation Consulting</p>
                                <p className="text-base text-gray-300 md:p-2 rounded-xl relative md:text-justify w-[300px] h-[200px] text-justify  md:-top-7">Our seasoned experts dive deep into your specific challenges, providing tailored strategies to drive sustainable growth. Through in-depth evaluations and actionable insights, we empower you to make informed decisions and achieve measurable results.</p>
                        </div>
                        <div className="mt-10">
                                <Image src={mobile} width={50} height={undefined} className="md:h-50 relative left-32 top-1 m" alt="Mobile"></Image>
                                <p className="font-Poppins font-bold md:text-xl relative md:top-5 text-center text-xl mt-3 mb-3 w-[300px]">Enterprise Mobility & App Developmenty</p>
                                <p className="text-base text-gray-300 md:p-2 rounded-xl relative md:top-2 md:text-justify w-[300px] h-[200px] text-justify ">Our expert team develops cutting-edge mobile apps that enhance customer engagement and drive business growth. From cross-platform to custom solutions, we leverage the latest technologies to deliver seamless user experiences and optimize your mobile presence.</p>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="Industries">
                    <div className="relative -top-[400px] h-[540px] bg-gray-200" id="industries">
                        <h1 className="text-center font-Poppins font-extrabold md:text-[70px] relative md:top-1 uppercase text-[40px] top-2">Industries</h1>
                        <h1 className="text-green-800 text-sm font-lato font-bold relative  text-center md:text-[25px] md:-top-3">Where Ideas Transform into <span className="text-black">Digital Excellence</span>.</h1>
                        <div className="relative max-w-full px-10 top-12 md:top-4" id="industryScrollContainer" ref={industryRef}>
            <div className="flex gap-12 pb-6 overflow-auto" id="horizontal-container">
                <IndustryDiv Name={"Automotive"} imageSrc={"automotive.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Real Estate"} imageSrc={"real-estate.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Health Care"} imageSrc={"healthcare.jpg"}></IndustryDiv>
                <IndustryDiv Name={"E-commerce"} imageSrc={"ecommerce.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Transportation"} imageSrc={"transportation.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Manufacturing"} imageSrc={"manufacturing.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Software Dev"} imageSrc={"software-dev.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Education"} imageSrc={"education.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Fintech"} imageSrc={"fintech.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Travel & Tourism"} imageSrc={"tourism.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Entertainment"} imageSrc={"netflix.jpg"}></IndustryDiv>
                </div>
                </div>
                </div>
                </section>
                <section className="services">
                    <h1 className="text-[40px] font-lato text-white text-center font-extrabold  uppercase relative -top-[380px] md:text-[70px]">Services</h1>
                    <h1 className="text-green-700 text-lg font-lato font-bold relative -top-[380px]  text-center md:text-[25px]">Where Ideas Transform into <span className="text-white">Digital Excellence</span>.</h1>
                    <div className="flex justify-center items-center min-h-screen">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative -top-[370px] gap-2">
                        <ServicesCard ServiceName={"Web Development"} ImgSrc={webDev} TitleSize={"xl"}></ServicesCard>
                        <ServicesCard ServiceName={"App Development"} ImgSrc={appDev} TitleSize={"xl"}></ServicesCard>
                        <ServicesCard ServiceName={"Software Development"} ImgSrc={software} TitleSize={"xl"}></ServicesCard>
                        <ServicesCard ServiceName={"Artificial Intelligence"} ImgSrc={aiml} TitleSize={"xl"}></ServicesCard>
                        <ServicesCard ServiceName={"Devops"} ImgSrc={devops} TitleSize={"xl"}></ServicesCard>
                        <ServicesCard ServiceName={"SEO"} ImgSrc={seo} TitleSize={"xl"}></ServicesCard>
                    </div>
                    </div>
                </section>
                <section className="Latest Technologies">
      <div className="w-screen bg-slate-200 h-[1380px] relative -top-80 md:h-[920px]">
        <div className="relative top-8 md:top-2">
          <h1 className="text-[38px] font-Poppins text-black text-center font-bold uppercase relative top-3 md:text-[60px] -left-3">
            Using advanced
          </h1>
          <h1 className="text-[35px] font-Poppins text-green-800 text-center font-bold uppercase relative top-3 md:text-[60px] -left-3">
            technologies
          </h1>
          <h1 className="text-[35px] font-Poppins text-black text-center font-bold uppercase relative top-3 md:text-[60px] -left-3">
            to maximise value.
          </h1>
          <p className=" text-justify relative top-8 font-lato font-normal md:font-bold md:text-xl md:w-[90%] md:h-[45px] w-[90%] h-[140px] left-5 md:text-center md:mb-2 md:left-[8vh]">
            We deliver the highest level of customer service by deploying innovative and collaborative project management systems to build the most professional, robust, and highly scalable web & mobile solutions with the highest quality standards.
          </p>
          <div className="flex flex-col items-center justify-center md:flex md:flex-row md:items-center">
          <div className="relative bg-green-800 w-[80%] h-[400px] top-16 overflow-y-auto md:w-[40%] md:rounded-xl rounded-t-xl">
            <ol className="relative ml-5 mt-5 text-2xl flex flex-col gap-14 text-white font-bold mb-5">
            <li 
  className={`border-b pb-4 ${selectedTech === "ai" ? "text-green-400" : "text-white"}`} 
  onClick={() => toggleContent('ai')}
>
  1. Artificial Intelligence
</li>
              <li className={`border-b pb-4 ${selectedTech === "blockchain" ? "text-green-400" : "text-white"}`} onClick={() => toggleContent('blockchain')}>
                2. Blockchain
              </li>
              <li className={`border-b pb-4 ${selectedTech === "iot" ? "text-green-400" : "text-white"}`} onClick={() => toggleContent('iot')}>
                3. Internet of Things
              </li>
              <li className={`border-b pb-4 ${selectedTech === "big-data" ? "text-green-400" : "text-white"}`} onClick={() => toggleContent('big-data')}>
                4. Big Data & Analytics
              </li>
              <li className={`border-b pb-4 ${selectedTech === "cloud-computing" ? "text-green-400" : "text-white"}`} onClick={() => toggleContent('cloud-computing')}>
                5. Cloud Computing
              </li>
            </ol>
          </div>
          <div className="tech-content relative mt-16 bg-gray-300 w-[80%] h-[550px] md:relative md:w-[40%] md:z-20 md:h-[400px] rounded-b-xl md:rounded-xl md:top-8">
            {selectedTech === 'ai' && (
              <>
                <p className="font-Poppins font-bold text-green-700 text-4xl relative top-10 left-5">
                  Artificial Intelligence
                </p>
                <p className="font-Poppins font-normal text-black text-base relative top-10 left-5 mt-5 mr-10 p-2 text-justify">
                  Toplogic is a forward-thinking IT company specializing in AI and ML solutions that help businesses harness the power of data to drive innovation and efficiency. By integrating advanced algorithms, Toplogic offers tailored AI/ML services that enhance automation, predictive analytics, and decision-making, ensuring businesses stay competitive in a rapidly evolving market.
                </p>
                <button className="md:relative md:left-6 md:top-20 md:bg-green-700 rounded-3xl md:w-44 md:h-10 md:font-Poppins md:text-lg md:text-white md:hover:bg-green-600 md:duration-300 md:transition-colors w-44 bg-green-700 h-10 relative top-16 left-5 text-white font-Poppins text-lg">Explore More</button>
              </>
            )}

            {selectedTech === 'blockchain' && (
              <>
                <p className="font-Poppins font-bold text-green-700 text-4xl relative top-10 left-5">
                  Blockchain
                </p>
                <p className="font-Poppins font-normal text-black text-base relative top-10 left-5 mt-5 mr-10 p-2 text-justify">
                  Toplogic is a leading IT company providing innovative blockchain solutions that enable businesses to enhance security, transparency, and efficiency. With expertise in blockchain technology, Toplogic helps companies develop decentralized applications and smart contracts, ensuring secure transactions and streamlined operations while driving digital transformation.
                </p>
                <button className="md:relative md:left-6 md:top-20 md:bg-green-700 rounded-3xl md:w-44 md:h-10 md:font-Poppins md:text-lg md:text-white md:hover:bg-green-600 md:duration-300 md:transition-colors w-44 bg-green-700 h-10 relative top-16 left-5 text-white font-Poppins text-lg">Explore More</button>
              </>
            )}

            {selectedTech === 'iot' && (
              <>
                <p className="font-Poppins font-bold text-green-700 md:text-4xl text-3xl relative top-10 left-5">
                  Internet Of Things
                </p>
                <p className="font-Poppins font-normal text-black text-base relative top-10 left-5 mt-5 mr-10 p-2 text-justify">
                Toplogic provides innovative IoT solutions that connect devices, enabling businesses to gather real-time data and enhance operational efficiency. Our IoT services drive smarter decision-making and innovation, improving customer experiences across industries like smart homes, healthcare, and manufacturing.
                </p>
                <button className="md:relative md:left-6 md:top-20 md:bg-green-700 rounded-3xl md:w-44 md:h-10 md:font-Poppins md:text-lg md:text-white md:hover:bg-green-600 md:duration-300 md:transition-colors w-44 bg-green-700 h-10 relative top-16 left-5 text-white font-Poppins text-lg">Explore More</button>
              </>
            )}

            {selectedTech === 'big-data' && (
              <>
                <p className="font-Poppins font-bold text-green-700 text-4xl relative top-10 left-5">
                  Big Data and Analytics
                </p>
                <p className="font-Poppins font-normal text-black text-base relative top-10 left-5 mt-5 mr-10 p-2 text-justify">
                Toplogic offers advanced Big Data solutions that help businesses harness large volumes of data to uncover insights, optimize processes, and drive growth. Our services enable better decision-making through data analytics, predictive modeling, and real-time insights, empowering businesses to stay competitive in a data-driven world.
                </p>
                <button className="md:relative md:left-6 md:top-20 md:bg-green-700 rounded-3xl md:w-44 md:h-10 md:font-Poppins md:text-lg md:text-white md:hover:bg-green-600 md:duration-300 md:transition-colors w-44 bg-green-700 h-10 relative top-16 left-5 text-white font-Poppins text-lg">Explore More</button>
              </>
            )}

            {selectedTech === 'cloud-computing' && (
              <>
                <p className="font-Poppins font-bold text-green-700 md:text-4xl text-3xl relative top-10 left-5 ">
                  Cloud Computing
                </p>
                <p className="font-Poppins font-normal text-black text-base relative top-10 left-5 mt-5 mr-10 p-2 text-justify">
                Toplogic provides innovative cloud computing solutions that enable businesses to scale efficiently, enhance collaboration, and reduce operational costs. Our cloud services offer secure, flexible, and cost-effective infrastructure, empowering businesses to optimize performance and drive digital transformation.
                </p>
                <button className="md:relative md:left-6 md:top-20 md:bg-green-700 rounded-3xl md:w-44 md:h-10 md:font-Poppins md:text-lg md:text-white md:hover:bg-green-600 md:duration-300 md:transition-colors w-44 bg-green-700 h-10 relative top-16 left-5 text-white font-Poppins text-lg">Explore More</button>
              </>
            )}
          </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Commitment and Guarantee">
      <div className="w-screen h-[1700px] relative -top-80">
              <div className="">
                <h1 className="text-white uppercase w-[350px] font-lato font-extrabold text-3xl relative top-20 left-6">Our Commitment & <span className="text-green-700">Guarantee</span></h1>
                <p className="text-slate-200 text-justify relative top-20 ml-6 mt-3 font-Poppins text-lg mr-6">Toplogic delivers robust, scalable and high performance software, web and mobile app development services to help you harness the power of technology, consulting and maximize your online business investment.</p>
              </div>

            <img className="w-20 h-20 relative top-[150px] ml-4" src="employee.png"></img>
            <h1 className="text-green-700 relative top-[150px] text-3xl font-Poppins ml-6 mb-4 mt-4 text-justify font-bold">100% Transparency</h1>
            <p className="text-white relative top-36 text-justify ml-6 mr-6 font-Poppins">At Toplogic, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.</p>

            <Commitment title={"95% ONTIME DELIVERY"} description={"Our pursuit of agile development methodology have resulted in an enviable 95% on-time delivery track record for the past 20+ years of our operations."} imageSRC={"time.png"}></Commitment>

            <Commitment title={"30 DAYS FREE SUPPORT"} description={"We take complete responsibility of our work and provide free 30 days support to all our customer even after the software / mobile app has been launched."} imageSRC={"support.png"}></Commitment>

            <Commitment title={"FLEXIBLE ENGAGEMENTS"} description={"Toplogic offers tailor-made engagement models, hand crafted to meet the exact requirements of clients with diverse business needs"} imageSRC={"engagement.png"}></Commitment>
      </div>
    </section>
            </div>
        </>
    );
};

export default Home;
