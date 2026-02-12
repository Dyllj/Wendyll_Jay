import React from 'react';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="group flex flex-col justify-start items-start gap-2 w-full sm:w-md h-auto sm:h-56 duration-500 relative rounded-lg p-4 bg-amber-600 hover:shadow-lg shadow-zinc-400">
      <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 w-20 h-20 sm:w-1/3 sm:h-1/3 rounded-lg bg-gray-200 flex items-center justify-center">
        {Icon && <Icon className="text-3xl sm:text-5xl text-zinc-500" />}
      </div>
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl font-Strait font-extrabold mb-4 sm:mb-6 text-gray-800">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-xs sm:text-sm font-Strait font-bold text-gray-700 bg-zinc-200 px-2 py-1 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 transition-all ease-in-out cursor-pointer flex items-center justify-center text-center"
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