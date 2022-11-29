import React from "react";

interface Props {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}
function NavButton({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive && "bg-[#036756]"
      } hover:bg-[#036756] text-white font-bold py-2 px-4 rounded`}
    >
      {title}
    </button>
  );
}

export default NavButton;
