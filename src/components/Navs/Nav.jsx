import React from 'react';

const Nav = ({ children = "Follow me", icon: Icon, href = "#" }) => {
  return (
    <a href={href}>
      <button className="relative w-20 sm:w-28 h-8 sm:h-9 transition-all duration-500 text-xs sm:text-base rounded-md overflow-hidden group bg-zinc-200 hover:bg-linear-to-r hover:from-zinc-300 hover:to-zinc-700">
        <p className="absolute text-sm sm:text-lg font-bold top-0.5 left-5 sm:left-7 m-0 p-0 transition-all duration-500 text-zinc-800 group-hover:left-2 sm:group-hover:left-2.5 group-hover:text-white">
          {children}
        </p>
        {Icon && (
          <Icon className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 opacity-0 transition-all duration-500 h-3 w-3 sm:h-4 sm:w-4 text-white group-hover:opacity-100" />
        )}
      </button>
    </a>
  );
};

export default Nav;