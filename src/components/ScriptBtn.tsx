import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // General additional classes for outer div
  type?: "button" | "submit" | "reset";
  customStyles?: string; // Custom Tailwind classes for the button itself
};

export default function ScriptBtn({
  children,
  onClick,
  className = "",
  type = "button",
  customStyles = "", // Default to an empty string if not provided
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
