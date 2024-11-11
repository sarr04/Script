import { RxTriangleDown } from "react-icons/rx";
import { AiOutlineMinus } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";
import React from "react";

const Hover = ({ buttonText, hoverGradient, text, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="lg:flex lg:flex-col relative items-center lg:space-y-1"
    >
      <button
        className={`border-2 flex items-center justify-center md:items-start md:justify-start text-center border-black hover:border-none font-bold bg-transparent lg:px-4 lg:py-8 lg:rounded-2xl rounded-xl
          hover:bg-gradient-to-r ${hoverGradient} hover:text-white text-black lg:w-[250px] lg:h-[150px] w-[200px] h-[100px]`}
      >
        <div className="md:absolute right-0 bottom-2 lg:left-0">
          <div className="items-start p-4 rounded-md cursor-pointer">
            {isOpen ? (
              <>
                <AiOutlineMinus className="text-2xl text-black" />
                <RxTriangleDown className="text-2xl text-black translate-y-10 " />
              </>
            ) : (
              <CgMathPlus className="text-2xl text-black" />
            )}
          </div>
        </div>
        <h3 className="text-2xl text-center  justify-center">{buttonText}</h3>
      </button>

      {isOpen && (
        <p className="mt-2 text-center text-black lg:hidden">{text}</p>
      )}
    </div>
  );
};

export default Hover;
