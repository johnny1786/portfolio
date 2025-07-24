import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'; // Hamburger icons
import logo from '../assets/logo.png'; // Ensure logo.png exists in assets folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-b from-[#0c0f1f] to-[#1a1f2e] border-b border-[#2e3a59] shadow-md shadow-blue-900/30 backdrop-blur-md z-50 fixed w-full text-white">

      {/* bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-white py-6 border-t border-gray-700 */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-2xl md:text-4xl font-extrabold">Johnson</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-semibold ml-auto">
          <ul className="flex space-x-8">
          <li><a href="#projects" className="text-lg hover:text-blue-500 transition-colors duration-300">Projects</a></li>
          <li><a href="#skills" className="text-lg hover:text-blue-500 transition-colors duration-300">Skills</a></li>
          <li><a href="#contact" className="text-lg hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1WZG9zqXsZCHB3a8VpK0a9bkVQi7UYzQ6/view" 
          className="text-lg hover:text-blue-500 transition-colors duration-300">Resume</a></li>
        </ul>
        

<div className="flex items-center space-x-6">
  <a
    href="https://github.com/johnny1786"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400"
  >
    <FaGithub size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/johnson157"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400"
  >
    <FaLinkedin size={24} />
  </a>
</div>
        </div>
        

        

        {/* Hamburger Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0F1111] py-6 space-y-4 text-lg">
  <ul className="flex flex-col items-center space-y-4">
    <li><a href="#about" className="hover:text-blue-500" onClick={toggleMenu}>About</a></li>
    <li><a href="#projects" className="hover:text-blue-500" onClick={toggleMenu}>Projects</a></li>
    <li><a href="#skills" className="hover:text-blue-500" onClick={toggleMenu}>Skills</a></li>
    <li><a href="#contact" className="hover:text-blue-500" onClick={toggleMenu}>Contact</a></li>
    <li><a href="https://drive.google.com/drive/u/0/folders/1hme8bA-fcvDhiC5PCa99IP-Lv_lFCx-2"
     className="hover:text-blue-500" onClick={toggleMenu}>Resume</a></li>
  </ul>

  {/* Mobile Social Icons */}
  <div className="flex space-x-6 pt-4">
    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
      <FaGithub size={24} />
    </a>
    <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
      <FaLinkedin size={24} />
    </a>
  </div>
</div>

        
      )}
    </nav>
  );
};

export default Navbar;
