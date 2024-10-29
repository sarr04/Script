import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  customStyles?: string;
};

export default function ScriptBtn({
  children,
  onClick,
  className = "",
  type = "button",
  customStyles = "",
}: Props) {
  return (
    <div className={className}>
      <button
        type={type}
        onClick={onClick}
        className={`lg:px-20 lg:py-4 py-1 px-1 rounded-[2rem] text-white text-xl font-bold ${customStyles}`}
      >
        {children}
      </button>
    </div>
  );
}
