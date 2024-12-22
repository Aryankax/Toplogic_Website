import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is digital transformation?",
      answer: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.",
    },
    {
      question: "How can we help you achieve your goals?",
      answer: "We provide tailored strategies and solutions to streamline operations, enhance customer experiences, and drive innovation.",
    },
    {
      question: "What industries do we serve?",
      answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and more.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 relative">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-500 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 flex justify-between items-center text-white"
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                } stroke-white`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-00 ease-in-out ${
                activeIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              } bg-slate-200 text-black`}
            >
              <p className={`overflow-hidden ${activeIndex === index ? "block" : "hidden"}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
