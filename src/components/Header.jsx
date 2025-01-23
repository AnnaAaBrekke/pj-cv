import React from "react";

const PortfolioHeader = () => {
  return (
    <header className="bg-gray-900 text-white relative py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left side - Text Content */}
        <div className="text-center md:text-left md:w-1/2 z-10">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 mt-6">
            Hei, jeg er <br />
            Per-Jan Brekke
          </h1>
          <p className="text-lg mb-6">
            Teamleder presse- og samfunnskontakt i Utlendingsdirektoratet (UDI)
          </p>
          <a
            href="https://www.linkedin.com/in/perjan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-medium bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Right side - Profile Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative">
            <img
              src="images/profile1.png"
              alt="Per-Jan Brekke"
              className="w-[350px] h-[450px] rounded-lg shadow-2xl object-cover border-4 border-yellow-500"
            />
            <div className="absolute -top-4 -left-4 w-[350px] h-[450px] border-4 border-yellow-500 transform rotate-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
