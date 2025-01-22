import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Corrected import

const ContactMe = () => {
  return (
    <section
      id="kontakt-meg"
      className="bg-gray-900 text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Kontakt</h2>
        <p className="text-lg mb-8">
          Ta gjerne kontakt for spørsmål eller andre henvendelser.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Telefonnummer */}
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="w-10 h-10 text-yellow-400"
              />
            </div>
            <p className="text-lg font-medium">+47 92664526</p>
          </div>

          {/* E-post */}
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-10 h-10 text-yellow-400"
              />
            </div>
            <p className="text-lg font-medium">prjbr@udi.no</p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-4">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-10 h-10 text-yellow-400"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/perjan/"
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
