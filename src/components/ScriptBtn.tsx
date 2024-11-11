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
    <button
      type={type}
      onClick={onClick}
      className={`lg:px-12 lg:py-3 py-2 px-16 rounded-[2rem] text-white text-base font-bold ${className} ${customStyles}`}
    >
      {children}
    </button>
  );
}
