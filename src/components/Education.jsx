import React from "react";

const EducationCard = () => {
  const education = [
    {
      year: "1985",
      degree: "Examen Philosophicum",
      school: "Universitetet i Bergen",
    },
    {
      year: "1983 - 1985",
      degree: "Bachelor i kommunal planlegging og offentlig administrasjon",
      school: "Høgskulen i Volda (HVO)",
    },
    {
      year: "1980 - 1982",
      degree: "Treårig allmennfaglig studieretning med bedriftsøkonomi",
      school: "Ulstein videregående skole",
    },
    {
      year: "1979",
      degree: "Ettårig handelsskole",
      school: "Herøy videregående skole",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gray-900 text-white flex flex-col justify-center items-center rounded-sm"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-500">
        Utdanning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-gray-900"
          >
            {/* Content */}
            <div className="text-center">
              <div className="text-yellow-400 font-medium text-sm uppercase tracking-wide">
                {edu.year}
              </div>
              <h3 className="text-2xl font-semibold mt-4">{edu.degree}</h3>
              <p className="text-gray-300 italic mt-2">{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCard;
