import React from 'react';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-gray-800 text-gray-100 flex flex-col justify-between md:flex-row md:flex-wrap md:h-screen md:w-64 py-4 px-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-lg font-semibold">My App</span>
        </div>

        {/* Menu */}
        <nav className="mt-6 md:w-full">
          <ul className="md:flex md:flex-col">
            {/* Level 1 */}
            <li className="relative transition-all duration-300 transform hover:translate-x-1">
              <a
                href="#"
                className="text-gray-300 hover:text-white py-2 px-4 block"
              >
                Dashboard
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white py-2 px-4 block w-full text-left transition-all duration-300 transform hover:translate-x-1"
              >
                Dropdown
                <svg
                  className={`fill-current text-gray-400 w-4 h-4 float-right transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 8l4 4 4-4H6z"
                  />
                </svg>
              </button>
              {/* Level 2 */}
              {isOpen && (
                <ul className="mt-2 ml-6 transition-all duration-300">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white py-2 px-4 block"
                    >
                      Submenu 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white py-2 px-4 block"
                    >
                      Submenu 2
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className={`relative ${isOpen ? 'mt-8' : ''} transition-all duration-300`}>
              <a
                href="#"
                className="text-gray-300 hover:text-white py-2 px-4 block"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow-md py-4 px-6">
          <h1 className="text-lg font-semibold">Page Title</h1>
        </header>
        <main className="p-6">
          {/* Your page content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;