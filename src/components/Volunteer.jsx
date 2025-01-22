import React from "react";

const Volunteer = () => {
  const volunteerWork = [
    {
      year: "2017 - Nå",
      position: "Pressesjef",
      company: "World Cup Drammen",
      image: "src/assets/images/worldcup-drammen.jpg",
    },
    {
      year: "2020",
      position: "Pressesjef",
      company: "NM på ski",
      image: "src/assets/images/nm-ski.jpeg",
    },
  ];

  return (
    <section id="frivillig-arbeid" className="bg-gray-50 p-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Frivillig Arbeid
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {volunteerWork.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-10"
          >
            {/* Image */}
            <img
              src={work.image}
              alt={work.company}
              className="w-full h-48 object-contain rounded-lg"
            />

            {/* Content */}
            <div className="p-6">
              <div className="text-gray-500 font-bold text-lg">{work.year}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {work.position}
              </h3>
              <p className="text-gray-600 italic">{work.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteer;
