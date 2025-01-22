import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-2xl font-extrabold text-yellow-400">CV</div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-yellow-400 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop View) */}
        <div className="hidden md:flex md:space-x-6 space-x-2 ml-auto">
          <a
            href="#arbeidserfaring"
            className="text-sm sm:text-md md:text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Arbeidserfaring
          </a>
          <a
            href="#frivillig-arbeid"
            className="text-sm sm:text-md md:text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Frivillig Arbeid
          </a>
          <a
            href="#utdanning"
            className="text-sm sm:text-md md:text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Utdanning
          </a>
          <a
            href="#kursbevis"
            className="text-sm sm:text-md md:text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Kursbevis
          </a>
          <a
            href="#kontakt"
            className="text-sm sm:text-md md:text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Kontakt
          </a>
        </div>
      </div>

      {/* Mobile Navigation Links (Hidden by Default) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-right">
          <a
            href="#arbeidserfaring"
            className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Arbeidserfaring
          </a>
          <a
            href="#frivillig-arbeid"
            className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Frivillig Arbeid
          </a>
          <a
            href="#utdanning"
            className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Utdanning
          </a>
          <a
            href="#kursbevis"
            className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Kursbevis
          </a>
          <a
            href="#kontakt"
            className="block text-sm font-medium hover:text-yellow-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
