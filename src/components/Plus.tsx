import React, { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineMinus } from "react-icons/ai";

function Plus() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state on click
  };

  return (
    <div
      className="items-start  p-4  rounded-md cursor-pointer"
      onClick={handleClick}
    >
      {isClicked ? (
        <AiOutlineMinus className="text-2xl text-black" />
      ) : (
        <CgMathPlus className="text-2xl text-black" />
      )}
    </div>
  );
}

export default Plus;
