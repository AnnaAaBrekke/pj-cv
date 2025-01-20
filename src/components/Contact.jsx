import React from "react";

const ContactMe = () => {
  return (
    <section
      id="kontakt-meg"
      className="bg-gray-900 text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Kontakt</h2>
        <p className="text-lg mb-8">
          Ta gjerne kontakt for spørsmål eller andre
          henvendelser.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Telefonnummer */}
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6a9 9 0 0118 0v12a9 9 0 01-18 0V6z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium">+47 92664526</p>
          </div>

          {/* E-post */}
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.5 5 7.5-5M3 8v8a9 9 0 009 9h3a9 9 0 009-9V8"
                />
              </svg>
            </div>
            <p className="text-lg font-medium">perjan@email.com</p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8a6 6 0 10-12 0 6 6 0 0012 0zM4 15l3 3-3 3M20 15l-3 3 3 3"
                />
              </svg>
            </div>
            <a
              href="https://www.linkedin.com/in/perjan/details/organizations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-300 hover:text-yellow-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
