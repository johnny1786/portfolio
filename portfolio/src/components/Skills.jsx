import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import FadeInWrapper from './FadeInWrapper';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <FadeInWrapper direction='right' delay={0.2}>
          <h2 className="text-4xl font-bold mb-12  border-blue-600 inline-block">
          My Skills
        </h2>
        </FadeInWrapper>
        

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {/* Each Skill */}

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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-orange-500/100 transition-shadow duration-300">
            <FaHtml5 className="text-5xl mx-auto text-orange-500 mb-2" />
            <p>HTML</p>
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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-blue-500/100 transition-shadow duration-300">
            <FaCss3Alt className="text-5xl mx-auto text-blue-500 mb-2" />
            <p>CSS</p>
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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-yellow-400/100 transition-shadow duration-300">
            <FaJs className="text-5xl mx-auto text-yellow-400 mb-2" />
            <p>JavaScript</p>
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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-cyan-500/100 transition-shadow duration-300">
            <FaReact className="text-5xl mx-auto text-cyan-400 mb-2" />
            <p>React</p>
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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-green-500/100 transition-shadow duration-300">
            <FaNodeJs className="text-5xl mx-auto text-green-400 mb-2" />
            <p>Node.js</p>
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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-indigo-500/100 transition-shadow duration-300">
            <FaDatabase className="text-5xl mx-auto text-indigo-400 mb-2" />
            <p>MongoDB</p>
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
          <div className="bg-[#1e293b] p-6 rounded-lg shadow hover:shadow-red-500/100 transition-shadow duration-300">
            <FaGitAlt className="text-5xl mx-auto text-red-500 mb-2" />
            <p>Git</p>
          </div>
        </Tilt>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;

