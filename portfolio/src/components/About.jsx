import { FaCode, FaBrain } from 'react-icons/fa';
import FadeInWrapper from './FadeInWrapper';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0e1015] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        

        <FadeInWrapper direction="right">
          <p className="text-lg text-gray-300 mb-4">INTRODUCTION</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Overview.</h2>

        </FadeInWrapper>
        
        <FadeInWrapper delay={0.2}>
          <p className="text-lg text-gray-300 mb-8">
          I'm a passionate and results-driven MERN stack developer with a love for building interactive, fast, and scalable applications.
          I enjoy learning new technologies and solving real-world problems through code.
        </p>
        </FadeInWrapper>
        

        {/* 🔽 Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
        <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={600}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#93c5fd" // light blue glare
        className="rounded-2xl"
        >
          {/* Full Stack Developer Card */}
          <div className="bg-[#1a1c23] p-6 rounded-2xl shadow-md hover:shadow-blue-500/40 transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaCode className="text-blue-400 text-3xl" />
              <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            </div>
            <p className="text-gray-300">
              I build clean, responsive web apps using the MERN stack — turning ideas into functional, elegant experiences.
            </p>
          </div>

        </Tilt>
        
          

          <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={600}
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#93c5fd" // light blue glare
        className="rounded-2xl"
        >
          {/* DSA Enthusiast Card */}
          <div className="bg-[#1a1c23] p-6 rounded-2xl shadow-md hover:shadow-purple-500/40 transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <FaBrain className="text-purple-400 text-3xl" />
              <h3 className="text-xl font-semibold">DSA Enthusiast</h3>
            </div>
            <p className="text-gray-300">
              I enjoy solving challenging problems in algorithms and data structures to sharpen logic and boost coding skills.
            </p>
          </div>
        </Tilt>

          
        </div>
      </div>
    </section>
  );
};

export default About;
