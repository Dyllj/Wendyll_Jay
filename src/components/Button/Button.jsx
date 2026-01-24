import React from 'react';

const Button = () => {
  return (
    <button className="relative px-4 sm:px-5 py-2 sm:py-2.5 border-0 rounded-2xl text-[#212121] bg-[#e8e8e8] font-black text-sm sm:text-base shadow-lg transition-all duration-250 overflow-hidden z-10 w-28 sm:w-32 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-2xl before:bg-[#212121] before:-z-10 before:shadow-lg before:transition-all before:duration-250 hover:text-[#e8e8e8] hover:before:w-full cursor-pointer">
      About Me
    </button>
  );
};

export default Button;