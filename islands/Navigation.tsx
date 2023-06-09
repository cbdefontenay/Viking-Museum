import IconAlignCenter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/align-center.tsx";
import { useState } from "preact/hooks";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent pt-10 md:overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 md:mb-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-col px-2 lg:px-0 animate__animated animate__fadeInLeft animate__delay-1s">
            <button
              type="button"
              className="lg:hidden focus:outline-none flex items-center px-3 py-2 rounded text-gray-200"
              onClick={toggleMenu}
            >
              <IconAlignCenter class="w-11 h-11" />
            </button>

            <div className="w-24 md:w-48 lg:flex lg:items-center uppercase">
              <a
                href="/"
                className="px-3 py-2 text-white text-2xl font-medium font-philosopher"
              >
                <img
                  src="/jorvik.svg"
                  alt="logo jorvik"
                  className="text-slate-300 hover:bg-yellow-800 p-2 rounded-lg"
                />
              </a>
            </div>
          </div>

          <div
            className={`lg:flex lg:items-center ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <div className="lg:flex-grow font-bold uppercase">
              <a
                href="/about"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                About
              </a>
              <a
                href="/visit"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                Visit
              </a>
              <a
                href="/the-vikings"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                The Vikings
              </a>
              <a
                href="/"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                Shop
              </a>
              <a
                href="/whats-on"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                What's on
              </a>
              <a
                href="/get-involved"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                Get Involved
              </a>
              <a
                href="/contact"
                className="block lg:inline-block px-3 py-2 text-yellow-600 hover:text-white
                animate__animated animate__fadeInRight animate__delay-1s "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
