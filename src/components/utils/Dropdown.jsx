import React from "react";

const Dropdown = ({
  top = 10,
  right = 10,
  width = 10.833,
  options = [],
  toggle,
  handleCancel,
}) => {
  return (
    <div
      className={`absolute rounded-md z-50  bg-background py-2  ${
        toggle
          ? "transform translate-y-0 scale-1 transition duration-300"
          : "transform -translate-y-33 translate-x-20 scale-0 transition duration-200"
      }`}
      style={{ top: `${top}%`, right: `${right}%`, width: `${width}rem` }}
    >
      {options.map((option, index) => (
        <div
          dropdown={index}
          key={index}
          onClick={option.onClick}
          className="dropdown z-40 select-none text-textPrimary text-base py-2 pl-6 hover:bg-backgroundDark"
        >
          {option.title}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
