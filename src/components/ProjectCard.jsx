import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, category, year, image, github }) => {
  return (
    <div className="bg-[#1e293b] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 max-w-sm w-full">
      {/* Project image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Project details */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>

        {/* Footer with category and year */}
        <div className="flex justify-between text-sm text-gray-400">
          <span>{category}</span>
          <span>{year}</span>
        </div>
      </div>

      {/* GitHub Icon */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
          title="View on GitHub"
        >
          <FaGithub />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
