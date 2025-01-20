import React from "react";

const EducationCard = () => {
  const education = [
    {
      year: "1983 - 1985",
      degree: "Bachelor i kommunal planlegging og offentlig administrasjon",
      school: "Høgskulen i Volda (HVO)",
      image: "/images/hvo.jpg", // Legg til bilde i public/images
    },
  ];

  return (
    <section id="education" className="py-10 bg-gray-50 justify-center items-center">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Utdanning
      </h2>
      <div className="items-center">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Content */}
            <div className="p-6">
              <div className="text-gray-500 font-bold text-lg">{edu.year}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 italic">{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCard;
