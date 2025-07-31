import React from 'react'
import bgImage from '../assets/bg3.jpg'
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    
    <section id="hero" className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
    style={{ backgroundImage: `url(${bgImage})` }}>
      
        <div class="absolute inset-0 bg-black/60 z-0"></div>
        {/* <div class="h-16  rounded-full bg-green-500"></div>
        <div class="h-16 w-10 rounded-full bg-yellow-500"></div> */}
      
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          
            <h1 className="text-5xl md:text-7xl font-extrabold  text-white drop-shadow-lg mb-4">
  Hi, I'm <span className="text-sky-400">Madas Johnson</span>
</h1>

            <p className='text-lg text-gray-200 mb-6'>
                 "I’m a passionate MERN stack developer who loves turning ideas into clean, responsive web applications. 
                 Always eager to learn, and build solutions that matter."
            </p>
            
               
        </motion.div>


  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
       d="M0,160 C360,280 1080,40 1440,160"
    stroke="#38bdf8"      // Light Tailwind blue-400
    strokeWidth="2"
    fill="none"
    />
  </svg>
    </section>
  )
}

export default Hero
