import { GoTriangleDown } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";
// HoverButton.js
import React from "react";
import Plus from "./Plus";

const Hover = ({ buttonText, hoverGradient, text, isOpen, onToggle }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <button
        onClick={onToggle}
        className={`border-2 border-black hover:border-none font-bold bg-white px-4 py-2 rounded-2xl
         
          hover:bg-gradient-to-r ${hoverGradient} hover:text-white text-black `}
        style={{ minWidth: "150px", minHeight: "150px" }}
      >
        {buttonText}
        <Plus />
      </button>
      <GoTriangleDown />
      {isOpen && <p className="text-black mt-2 text-center">{text}</p>}
    </div>
  );
};

export default Hover;
