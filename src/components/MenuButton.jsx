import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const MenuButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      <button className="text-2xl text-white" onClick={toggleMenu}>
        <AiOutlineMenu />
      </button>
      {showMenu && (
        <div className="absolute z-10 w-64 bg-white border border-gray-200 rounded shadow-lg -left-96">
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Item 1
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Item 2
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              Item 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
