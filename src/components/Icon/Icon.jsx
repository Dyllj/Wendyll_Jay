const IconLabel = ({ icon, label, href, ariaLabel }) => {
  const Icon = icon;

  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel || label}
      className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-700 p-3 sm:p-4 rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center justify-center">
        <Icon className="text-amber-400 text-2xl sm:text-3xl" />
      </div>

      {/* Render label ONLY if it exists */}
      {label && (
        <span className="text-xs font-medium text-center">
          {label}
        </span>
      )}
    </Wrapper>
  );
};

export default IconLabel;