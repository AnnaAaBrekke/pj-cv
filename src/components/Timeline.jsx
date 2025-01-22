import React from "react";

const Timeline = () => {
  const experiences = [
    {
      year: "2022 - Nå",
      position: "Teamleder presse- og samfunn",
      company: "Utlendingsdirektoratet (UDI)",
      details: [
        "Senior presserådgiver fra mai 2022",
        "Teamleder presse- og samfunnskontakt fra august 2022 til nå",
        "Fungerende kommunikasjonsdirektør ved behov",
        "Kommunikasjon sin representant i tverretatlige beredskapsmøter",
        "Kommunikasjon sin deltaker i interne beredskapsmøter om Ukraina",
        "Kommunikasjon sin representant i operasjonell krisestab",
        "UDI-medlem i EUAA Communication Multipliers’ Network",
        "UDI-medlem i nordiske GDISC Network",
      ],
    },
    {
      year: "2013 - 2022",
      position: "Prosjektleder og Kommunikasjonsrådgiver",
      company: "BDO/Godt Sagt Kommunikasjon AS",
      details: [
        "Prosjektleder",
        "Kommunikasjonsrådgiver",
        "Medierådgiver",
        "Omdømmebygging",
        "Internkommunikasjon",
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
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Arbeidserfaring
      </h2>
      <div className="grid gap-10 max-w-5xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-gray-500 font-bold text-lg mb-2">
              {exp.year}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.position}
            </h3>
            <p className="text-gray-600 italic mb-4">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
