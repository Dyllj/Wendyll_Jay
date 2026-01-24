import React from 'react';

const TechStack = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="text-[10px] sm:text-xs font-Strait font-semibold px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;