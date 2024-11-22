import React from 'react';

type MenuButtonProps = {
  onClick: () => void;
}

const AtomMenuButton: React.FC<MenuButtonProps> = ({ onClick }) => (
  <button
    className="md:hidden text-white hover:text-gray-300 focus:outline-none"
    onClick={onClick}
  >
    ☰
  </button>
);

export default AtomMenuButton;
