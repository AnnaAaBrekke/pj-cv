import React from "react";

const PortfolioHeader = () => {
  return (
    <header className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Text Content */}
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Hei, jeg er <br></br> Per-Jan Brekke.
          </h1>
          <p className="text-lg mb-4">
            Teamleder presse- og samfunn i Utlendingsdirektoratet (UDI)
          </p>
          <a
            href="https://www.linkedin.com/in/perjan/details/organizations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-gray-300 hover:text-yellow-400 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Right side - Profile Image */}
        <div className="md:w-1/2">
          <div className="relative mb-6">
            <img
              src="/src/assets/images/profile.jpeg" // Make sure this path is correct
              alt="Per-Jan Brekke"
              className="w-80 h-80 rounded-full object-cover mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
