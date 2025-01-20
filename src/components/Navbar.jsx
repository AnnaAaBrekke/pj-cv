import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-2xl font-extrabold text-yellow-400">CV</div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a
            href="#arbeidserfaring"
            className="text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Arbeidserfaring
          </a>
          <a
            href="#frivillig-arbeid"
            className="text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Frivillig Arbeid
          </a>
          <a
            href="#utdanning"
            className="text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Utdanning
          </a>
          <a
            href="#kursbevis"
            className="text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Kursbevis
          </a>
          <a
            href="#kontakt"
            className="text-lg font-medium hover:text-yellow-400 transition-all duration-300"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
