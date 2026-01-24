import React from 'react';

const Nav = ({ children = "Follow me", icon: Icon, href = "#", onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="flex items-center gap-1 px-4 py-2 text-zinc-800 transition-all duration-300 font-Strait font-bold group relative overflow-hidden rounded-lg hover:text-amber-600"
    >
      <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">
        {children}
      </span>
      {Icon && (
        <Icon className="text-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 transform -translate-x-1" />
      )}
    </a>
  );
};

export default Nav;