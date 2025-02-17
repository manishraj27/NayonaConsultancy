const UiButton = ({
  text,
  icon: Icon,
  bgColor = "#0c0c0c",
  iconBgColor = "#1A1F2F",
  iconPosition = "right",
  onClick,
  type = "button",
  disabled
}) => {
  return (
    <button
      className={`p-[0.3rem] select-none will-change-transform group rounded-full flex items-center transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1)] ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
      }`}
      style={{ backgroundColor: bgColor }}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {iconPosition === "left" && Icon && (
        <span
          className={`relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full ${
            disabled ? "" : "group-hover:translate-x-0"
          }`}
          style={{ backgroundColor: iconBgColor }}
        >
          <span
            className={`block w-1/3 will-change-transform text-light-200 ${
              disabled ? "" : "group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)]"
            }`}
          >
            <Icon />
          </span>
          <span
            className={`block w-1/3 will-change-transform absolute -translate-x-[250%] text-light-200 ${
              disabled ? "" : "group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)]"
            }`}
          >
            <Icon />
          </span>
        </span>
      )}

      {text && (
        <span
          className={`text-sm lg:text-lg font-medium uppercase px-4 text-light-200 ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {text}
        </span>
      )}

      {iconPosition === "right" && Icon && (
        <span
          className={`relative overflow-hidden flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 rounded-full ${
            disabled ? "" : "group-hover:translate-x-0"
          }`}
          style={{ backgroundColor: iconBgColor }}
        >
          <span
            className={`block w-1/3 will-change-transform text-light-200 ${
              disabled ? "" : "group-hover:translate-x-[250%] transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)]"
            }`}
          >
            <Icon />
          </span>
          <span
            className={`block w-1/3 will-change-transform absolute -translate-x-[250%] text-light-200 ${
              disabled ? "" : "group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,.68,0,1.5)]"
            }`}
          >
            <Icon />
          </span>
        </span>
      )}
    </button>
  );
};

export default UiButton;
