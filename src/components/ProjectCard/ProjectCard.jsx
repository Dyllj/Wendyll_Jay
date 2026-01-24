import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, techStack, links, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(0);

  const handleTouchStart = () => {
    setTouchStartTime(Date.now());
  };

  const handleTouchEnd = (e) => {
    const touchDuration = Date.now() - touchStartTime;
    // Only flip if it's a tap (not a scroll)
    if (touchDuration < 200) {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  const handleClick = () => {
    // For desktop, toggle on click
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-full h-80 perspective-1000 cursor-pointer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front of Card */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full group">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-Strait">
                  {title}
                </h3>
                <p className="text-amber-400 text-sm font-Strait font-semibold">
                  Tap to see details
                </p>
              </div>
            </div>
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                category === 'Featured' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-zinc-700 text-zinc-200'
              }`}>
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl bg-zinc-900"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-Strait">
                {title}
              </h3>
              <p className="text-zinc-300 text-sm mb-4 font-Strait leading-relaxed">
                {description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-amber-600 font-semibold text-sm mb-2 font-Strait">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs font-Strait"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
                >
                  <FaGithub className="text-lg" />
                  <span className="text-sm font-Strait">Code</span>
                </a>
              )}
              {links.web && (
                <a
                  href={links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span className="text-sm font-Strait">Live</span>
                </a>
              )}
              {links.docs && (
                <a
                  href={links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <FaFileAlt className="text-lg" />
                  <span className="text-sm font-Strait">Docs</span>
                </a>
              )}
            </div>

            {/* Tap again to flip back hint */}
            <p className="text-zinc-500 text-xs text-center mt-3 font-Strait">
              Tap again to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;