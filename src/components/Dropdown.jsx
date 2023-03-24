import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({ options, defaultOption }) {
  if (!defaultOption) {
    defaultOption = options[0];
  }
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="bg-gunmetal rounded-md py-2 px-4 text-gray-400 cursor-pointer"
        onClick={toggleDropdown}>
        <div className="flex justify-between">
          <div>{selectedOption}</div>
          <span className="ml-1">&#x25BE;</span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 rounded-md bg-gunmetal shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="py-2 px-4 text-gray-400 hover:bg-gunmetal-light rounded-md cursor-pointer"
              onClick={() => handleOptionSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
