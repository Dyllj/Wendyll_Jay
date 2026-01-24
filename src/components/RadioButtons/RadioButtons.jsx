import React from 'react';

const RadioButtons = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { value: 'All', color: 'gray' },
    { value: 'Featured', color: 'amber' },
    { value: 'Personal', color: 'blue' }
  ];

  const getGradientColor = (color) => {
    switch (color) {
      case 'amber':
        return 'linear-gradient(to right bottom, hsl(45, 97%, 62%), hsl(30, 97%, 62%))';
      case 'blue':
        return 'linear-gradient(to right bottom, hsl(210, 97%, 62%), hsl(225, 97%, 62%))';
      default:
        return 'linear-gradient(to right bottom, hsl(0, 0%, 62%), hsl(0, 0%, 42%))';
    }
  };

  return (
    <div className="flex flex-row sm:flex-col gap-3 sm:gap-1 w-full sm:w-30 justify-center sm:justify-start">
      {categories.map((category) => (
        <label
          key={category.value}
          className="flex items-center rounded-full px-2 sm:px-1 py-1 cursor-pointer transition-all duration-300 hover:bg-white/10"
        >
          <input
            type="radio"
            name="category-radio"
            value={category.value}
            checked={selectedCategory === category.value}
            onChange={() => onCategoryChange(category.value)}
            className="absolute opacity-0 w-0 h-0"
          />
          <div
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full relative shrink-0"
            style={{ background: getGradientColor(category.color) }}
          >
            <div
              className={`absolute inset-0 rounded-full bg-zinc-200 transition-transform duration-300 ${
                selectedCategory === category.value ? 'scale-0' : 'scale-110'
              }`}
            />
          </div>
          <span
            className={`ml-2 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${
              selectedCategory === category.value ? 'text-zinc-200' : 'text-zinc-400'
            }`}
          >
            {category.value}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;