import React from 'react';

const TechStack = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="text-xs font-Strait font-semibold px-3 py-1 bg-white/20 rounded-full text-white"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;