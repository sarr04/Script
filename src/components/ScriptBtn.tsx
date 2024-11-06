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
      className={`lg:px-8 lg:py-3 py-2 px-6 rounded-[2rem] text-white text-xl font-bold ${className} ${customStyles}`}
    >
      {children}
    </button>
  );
}
