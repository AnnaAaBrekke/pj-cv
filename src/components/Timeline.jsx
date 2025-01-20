import React from "react";

const Timeline = () => {
  const experiences = [
    {
      year: "2022 - Nå",
      position: "Teamleder presse- og samfunn",
      company: "Utlendingsdirektoratet (UDI)",
      details: [
        "Senior presserådgiver fra mai 2022",
        "Teamleder presse- og samfunn fra august 2022 til nå",
        "Tidvis fungerende kommunikasjonsdirektør i DM og ved kom-direktørens fravær",
        "Kommunikasjon sin representant i tverretatlige beredskapsmøter",
        "Kommunikasjon sin deltaker i interne beredskapsmøter om Ukraina",
        "Kommunikasjon sin representant i krisestaben",
        "UDI-medlem i EUAA Communication Multipliers’ Network",
        "UDI-medlem i nordiske GDISC Network",
      ],
    },
    {
      year: "2013 - 2022",
      position: "Prosjektleder og Kommunikasjonsrådgiver",
      company: "Godt Sagt Kommunikasjon AS",
      details: [
        "Prosjektleder",
        "Kommunikasjonsrådgiver",
        "Medierådgiver",
        "Omdømmebygging",
        "Markedsføring i sosiale medier",
        "Redaktør digitale bilag",
        "Content marketing",
        "Tekst, foto, pressemeldinger etc.",
        "Leder av Godt Sagt kriseteam",
        "Styrerepresentant for de ansatte",
      ],
    },
    {
      year: "2011 - 2013",
      position: "Informasjonssjef",
      company: "Havyard Group AS",
      details: [
        "Merkevarebygging og profilering",
        "Intern og ekstern kommunikasjon",
        "Mediehåndtering",
        "Ansvarlig for nettside og Facebook",
      ],
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Arbeidserfaring
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row md:items-start"
          >
            <div className="flex-shrink-0 w-32 text-gray-500 font-bold text-lg">
              {exp.year}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.position}
              </h3>
              <p className="text-gray-600 italic">{exp.company}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
