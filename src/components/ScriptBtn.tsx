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
        className={`px-20 py-4 rounded-[2rem] text-white text-xl font-bold ${customStyles}`}
      >
        {children}
      </button>
    </div>
  );
}
