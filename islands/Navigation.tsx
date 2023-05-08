import IconAlignCenter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/align-center.tsx";
import { useState } from "preact/hooks";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent pt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex lg:items-center uppercase">
              <a
                href="/"
                className="px-3 py-2 text-white text-2xl font-medium font-philosopher"
              >
                <img
                  src="/jorvik.svg"
                  alt="logo jorvik"
                  className="text-slate-100"
                />
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
              onClick={toggleMenu}
            >
              <IconAlignCenter class="w-7 h-7" />
            </button>
          </div>

          <div
            className={`lg:flex lg:items-center ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <div className="lg:flex-grow font-bold uppercase">
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                About
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                Visit
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                The Vikings
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                Education
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                Shop
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                What's on
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-500 hover:text-white"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
