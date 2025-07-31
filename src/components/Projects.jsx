// src/pages/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import projects from '../components/data/projects';
import FadeInWrapper from './FadeInWrapper';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0f172a] text-white">


      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading + GitHub Link */}
        <div className="flex justify-between items-center mb-12">
          <FadeInWrapper direction='right' delay={0.2}>
            <h2 className="text-4xl font-bold text-white-800">My Projects</h2>
          </FadeInWrapper>
          
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition text-2xl"
            title="View on GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Grid of Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.title}
              description={proj.description}
              category={proj.category}
              year={proj.year}
              image={proj.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
