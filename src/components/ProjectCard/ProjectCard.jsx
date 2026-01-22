import React from 'react';
import TechStack from '../TechStack/TechStack';
import IconLabel from '../Icon/Icon';
import { FaGithub, FaFileAlt, FaGlobe } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, techStack, links, category }) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'Featured':
        return 'rgb(217, 119, 6)';
      case 'Personal':
        return 'rgb(37, 99, 235)';
      default:
        return 'rgb(156, 163, 175)';
    }
  };

  return (
    <div
      className="group relative w-60 h-80 rounded-lg shadow-2xl transition-all duration-500 cursor-pointer hover:scale-110 hover:rounded-2xl overflow-hidden"
      style={{ backgroundColor: getCategoryColor() }}
    >
      {/* First Content - Image */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-100 transition-all duration-500 group-hover:h-0 group-hover:opacity-0">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Second Content - Details */}
      <div className="absolute top-0 left-0 w-full h-0 opacity-0 flex justify-center items-center bg-black/90 rounded-2xl transition-all duration-500 group-hover:h-full group-hover:opacity-100">
        <div className="p-4 flex flex-col gap-3 w-full overflow-y-auto">
          <h3 className="text-white font-bold text-lg m-0">{title}</h3>
          <p className="text-gray-300 text-sm m-0 leading-relaxed">{description}</p>
          <TechStack technologies={techStack} />
          
          <div className="flex gap-3 mt-2">
            {links.github && (
              <IconLabel icon={FaGithub} href={links.github} ariaLabel="GitHub" />
            )}
            {links.docs && (
              <IconLabel icon={FaFileAlt} href={links.docs} ariaLabel="Documentation" />
            )}
            {links.web && (
              <IconLabel icon={FaGlobe} href={links.web} ariaLabel="Website" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;