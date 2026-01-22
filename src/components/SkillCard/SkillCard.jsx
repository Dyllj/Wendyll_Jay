import React from 'react';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 w-md h-56 duration-500 relative rounded-lg p-4 bg-amber-600 hover:shadow-lg shadow-zinc-400">
      <div className="absolute duration-700 shadow-md group-hover:-translate-y-2 group-hover:-translate-x-2 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-200 flex items-center justify-center">
        {Icon && <Icon className="text-6xl text-zinc-500" />}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="grid grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-sm text-gray-700 bg-zinc-200 px-2 py-1 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-all ease-in-out cursor-pointer flex items-center justify-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;