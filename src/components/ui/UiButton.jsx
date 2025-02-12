const UiButton = ({
  text,
  icon: Icon,
  bgColor = "#1F2937",
  iconBgColor = "#374151",
  iconPosition = "right",
  onClick,
  type = "button", // Default to "button"
}) => {
  return (
    <button
      className="p-[0.3rem] select-none will-change-transform group hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] rounded-full flex items-center"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      type={type}
    >
      {iconPosition === "left" && Icon && (
        <span
          className="relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <span className="block w-1/3 will-change-transform group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
            <Icon />
          </span>
          <span className="block w-1/3 will-change-transform absolute -translate-x-[250%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
            <Icon />
          </span>
        </span>
      )}

      {text && (
        <span className="text-sm lg:text-lg font-medium uppercase px-4 text-black">
          {text}
        </span>
      )}

      {iconPosition === "right" && Icon && (
        <span
          className="relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full"
          style={{ backgroundColor: iconBgColor }}
        >
          <span className="block w-1/3 will-change-transform group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
            <Icon />
          </span>
          <span className="block w-1/3 will-change-transform absolute -translate-x-[250%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)] text-black">
            <Icon />
          </span>
        </span>
      )}
    </button>
  );
};

export default UiButton;
