import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-white py-6 border-t border-gray-700 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Left Side - Copyright */}
        <p className="text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} Madas Johnson. All rights reserved.
        </p>

        {/* Right Side - Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
