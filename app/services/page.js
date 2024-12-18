'use client'
import React from "react";
import Navbar from "@/components/nav";
import { useRouter } from "next/navigation";

const CallToAction = () => {
    const router = useRouter();
    return(
  <div className="relative bg-black py-16 text-center text-white overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-700/10 blur-3xl" />
    <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-green-700/10 blur-3xl" />
    
    <div className="relative z-10">
      <h2 className="text-4xl font-bold mb-4 font-Poppins">Ready to Take Your Business to the Next Level?</h2>
      <p className="text-xl mb-8 text-gray-300">
        Let us help you build cutting-edge solutions tailored to your needs.
      </p>
      <button className="px-8 py-4 bg-green-700 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-lg group" onClick={() => {router.push("/contact-us")}}>
        Contact Us Today
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
      </button>
    </div>
  </div>
    )
};

const FAQ = () => (
  <div className="bg-black py-20 px-8">
    <h2 className="text-4xl font-bold text-center mb-16 text-white font-Poppins">Frequently Asked Questions</h2>
    <div className="space-y-6 max-w-4xl mx-auto">
      {[
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries, including healthcare, finance, e-commerce, and more.",
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity, but we aim to deliver on time.",
        },
        {
          question: "What technologies do you specialize in?",
          answer: "We specialize in web development, AI/ML, blockchain, cloud solutions, and more.",
        },
      ].map((faq, index) => (
        <div 
          key={index} 
          className="p-6 bg-black/90 rounded-lg border border-green-700/30 hover:border-green-600 transition-all duration-300"
        >
          <h3 className="font-semibold text-xl text-white mb-3">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

const WhyChooseUs = () => (
  <div className="py-20 px-8 bg-black">
    <h2 className="text-4xl font-bold text-center mb-16 text-white font-Poppins">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Expert Team",
          description: "Our team consists of highly skilled professionals with years of experience.",
          icon: (props) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
        },
        {
          title: "Innovative Solutions",
          description: "We employ cutting-edge technologies to deliver innovative solutions.",
          icon: (props) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          title: "Customer Focus",
          description: "We prioritize client satisfaction and tailor solutions to their needs.",
          icon: (props) => (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          ),
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group p-8 bg-black/90 rounded-lg border border-green-700/30 hover:border-green-600 transition-all duration-300"
        >
          <div className="mb-6 text-green-600 group-hover:text-green-500 transition-colors duration-300">
            {item.icon({ className: "w-12 h-12" })}
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
          <p className="text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-black py-20 px-8">
    <h2 className="text-4xl font-bold text-center mb-16 text-white font-Poppins">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          name: "John Doe",
          feedback: "The team delivered an amazing product that exceeded our expectations!",
          role: "CEO, TechCorp",
        },
        {
          name: "Jane Smith",
          feedback: "Their professionalism and technical expertise are unmatched.",
          role: "CTO, Innovate Inc.",
        },
        {
          name: "Sam Wilson",
          feedback: "Great experience working with such a talented and dedicated team.",
          role: "Founder, Startup Hub",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="group p-8 bg-black/90 rounded-lg border border-green-700/30 hover:border-green-600 transition-all duration-300"
        >
          <div className="mb-6 text-green-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.feedback}"</p>
          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
          <p className="text-green-600">{testimonial.role}</p>
        </div>
      ))}
    </div>
  </div>
);
  

// Custom arrow icon component
const ArrowRight = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className={className}
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="group relative h-[420px] w-[300px] overflow-hidden rounded-3xl bg-black/90 transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-green-700/20">
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-green-700/10 blur-3xl transition-all duration-300 group-hover:bg-green-600/20" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-green-700/10 blur-3xl transition-all duration-300 group-hover:bg-green-600/20" />
      
      {/* Content container */}
      <div className="relative flex h-full flex-col p-6">
        {/* Icon container */}
        <div className="mb-6 rounded-lg bg-green-700/10 p-4 flex justify-center">
          <Icon className="h-8 w-8 text-green-600" />
        </div>
        
        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold text-white text-center">{title}</h3>
        
        {/* Description */}
        <p className="mb-3 flex-grow text-gray-400 text-center">{description}</p>
        
        {/* Bottom section with button */}
        <div className="flex justify-center">
          <button className="group/btn flex items-center gap-2 rounded-lg bg-green-700/10 px-4 py-2 text-sm font-medium text-green-600 transition-all duration-300 hover:bg-green-700/20">
            Explore More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that drive results. Our expert team leverages cutting-edge technologies and modern design principles to build powerful web solutions.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Transform your business with advanced AI solutions. From predictive analytics to natural language processing, we help you harness the power of artificial intelligence.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
        title: "DevOps",
        description: "Streamline your development pipeline with our DevOps solutions. We implement automated workflows, continuous integration/deployment, and robust monitoring systems.",
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      },
      {
        title: "Blockchain",
        description: "Leverage the power of blockchain technology for your business. We develop secure, scalable blockchain solutions including smart contracts, DApps, and enterprise solutions.",
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      },
    {
        title: "App Development",
        description: "Build powerful mobile applications for iOS and Android. Our development team creates intuitive, high-performance apps that engage users and deliver exceptional experiences.",
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
    {
      title: "Cloud Solutions",
      description: "Scale your infrastructure effortlessly with our enterprise-grade cloud solutions. We provide secure, reliable, and scalable cloud services that optimize your operations.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {  title: "SEO & Digital Marketing",
        description: "Boost your online presence with our comprehensive SEO solutions. We optimize your digital footprint with advanced SEO strategies, content optimization, and analytics.",
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      {
        title: "Graphic Design",
        description: "Transform your brand with stunning visual designs. Our creative team delivers eye-catching logos, marketing materials, UI/UX designs, and branded content that makes lasting impressions.",
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        )
      }
  ];

  return (
    <div className="grid grid-cols-1 md:gap-20 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

const Home = () => {

    const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="relative md:w-screen md:h-[631px] overflow-hidden w-screen h-[750px] opacity-80 bg-gradient-to-r from-black via-green-950 to-green-800">
        {/* Video background */}
        <video
          className="md:w-full md:h-full md:object-cover absolute top-0 left-0 hidden md:block"
          src="/services_video.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Black overlay */}
        <div className="bg-black md:w-full md:h-full absolute top-0 opacity-50"></div>

        {/* Content */}
        <div className="z-50 relative flex flex-col items-center h-full text-white w-full">
          <h1 className="md:text-[150px] font-Poppins uppercase animate-colorShift font-semibold relative md:top-32 top-56 text-[75px]">
            Services
          </h1>
          <p className="relative md:top-28 text-xl font-Poppins md:w-[800px] md:text-center top-52 w-screen p-2 font-medium ml-8">
            Comprehensive software, mobile app, web development, IT consulting,
            cloud solutions, AI/ML, and blockchain services across the IT spectrum.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black w-screen min-h-[631px] flex justify-center">
        <ServicesGrid />
      </div>
      <WhyChooseUs/>
      <Testimonials/>
      <FAQ/>
      <CallToAction/>
      <footer className="bg-black text-white text-center py-4">
        <p className="font-Lato">&copy; {new Date().getFullYear()} Toplogic Softlabs Pvt Ltd. All Rights Reserved.</p>
        </footer>
    </>
  );
};

export default Home;