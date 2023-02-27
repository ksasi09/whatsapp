import React from "react";

const Avatar = ({ size = 10, image, title, subtitle }) => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <div className={`w-12 h-12 rounded-full mr-3 overflow-hidden`}>
        <img src={image} draggable="false"></img>
      </div>

      <div className="flex justify-center items-start flex-col">
        {/* title */}
        {title && (
          <h1
            className={`text-textPrimary font-semibold  ${
              size > 10 ? "text-lg" : null
            }`}
          >
            {title}
          </h1>
        )}

        {/* subTitle */}
        {subtitle && <h3 className="text-sm text-textAccent">{subtitle}</h3>}
      </div>
    </div>
  );
};

export default Avatar;
