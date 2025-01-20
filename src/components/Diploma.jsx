import React from "react";

const Diploma = () => {
  const diplomas = [
    {
      title: "Reisesikkerhet",
      image: "src/assets/images/diplomas/diploma_reisesikkerhet_brekke.jpg",
    },
    {
      title: "Krisehåndtering og stabsarbeid",
      image:
        "src/assets/images/diplomas/Kursbevis kristehåndtering -2024 Brekke.jpg",
    },
  ];

  return (
    <section id="diplomas" className="py-10 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Kursbevis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map over diplomas array to display each image */}
        {diplomas.map((diploma, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {diploma.title}
              </h3>
            </div>
            <img
              src={diploma.image}
              alt={diploma.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              {/* Download Link */}
              <a
                href={diploma.image}
                download
                className="text-blue-600 hover:text-blue-800"
              >
                Last ned {diploma.title} (Bilde)
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diploma;
