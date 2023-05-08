import { useState } from "preact/hooks";

const ButtonWithMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        className="text-lg mt-20 sm:mt-20 w-screen sm:w-full px-24 py-1 sm:w-auto sm:px-20 sm:py-4 sm:text-2xl text-yellow-500 bg-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        In this section
      </button>

      {isOpen && (
        <div className="absolute left-0 w-full bg-red-800 text-gray-300 text-center border border-gray-200 rounded-md shadow-lg transition-opacity ease-in-out duration-300">
          <a
            href="#"
            className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-100"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-100"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-100"
          >
            Item 3
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-100"
          >
            Item 4
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-100"
          >
            Item 5
          </a>
        </div>
      )}
    </div>
  );
};

export default ButtonWithMenu;
