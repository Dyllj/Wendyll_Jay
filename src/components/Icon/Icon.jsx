// components/icon/icon.jsx
const IconLabel = ({ icon, label, href, ariaLabel }) => {
  const Icon = icon;

  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel || label}
      className="flex flex-col items-center justify-center space-y-2">
      <div className="w-12 h-12 bg-zinc-700 p-4 rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center justify-center">
        <Icon className="text-amber-400 text-3xl" />
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
