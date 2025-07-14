import type { FC } from "react";

interface MenuButtonProps {
  label: string;
  onClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 text-lg font-semibold bg-white rounded-2xl shadow-md mb-4 active:scale-95 transition"
    >
      {label}
    </button>
  );
};

export default MenuButton;
