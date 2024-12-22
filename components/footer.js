'use client';
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src="logo.png" alt="Toplogic Softlabs Logo" className="w-40" />
            <p className="mt-4 text-gray-400 text-sm">
              Toplogic Softlabs Pvt Ltd.<br />
              Innovating with technology to empower your business.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="text-sm text-gray-300 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <a href="#services" className="hover:text-green-500">Services</a>
            <a href="#about" className="hover:text-green-500">About Us</a>
            <a href="#careers" className="hover:text-green-500">Careers</a>
            <a href="#contact" className="hover:text-green-500">Contact</a>
            <a href="#privacy" className="hover:text-green-500">Privacy Policy</a>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="mt-10 md:flex md:justify-between">
          <div>
            <h2 className="font-bold text-lg text-white">Contact Us</h2>
            <p className="text-gray-400 text-sm mt-2">
              Address: 123 Tech Park, Lucknow, India<br />
              Phone: +91-123-456-7890<br />
              Email: <a href="mailto:info@toplogicsoftlabs.com" className="hover:text-green-500">info@toplogicsoftlabs.com</a>
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <h2 className="font-bold text-lg text-white">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Toplogic Softlabs Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
