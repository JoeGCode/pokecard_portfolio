import React from "react";
import { FaStar } from "react-icons/fa";

function StarIcon({ size = 32 }: { size?: number }) {
  const sizeStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <div
      className="rounded-full p-1 bg-gradient-to-br from-slate-400 to-slate-500 aspect-square flex items-center justify-center"
      style={sizeStyle}
    >
      <FaStar fill="black" className="w-full h-full" />
    </div>
  );
}

export default StarIcon;
