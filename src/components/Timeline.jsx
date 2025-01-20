import React from "react";

const Timeline = () => {
  const experiences = [
    {
      title: "Teamleder presse- og samfunn",
      company: "Utlendingsdirektoratet (UDI)",
      duration: "2022 - Nå",
      details: [
        "Senior presserådgiver fra mai 2022",
        "Teamleder presse- og samfunn fra august 2022 til nå",
        "Tidvis fungerende kom. direktør i DM og ved kom-direktørens fravær",
        "Kommunikasjon sin representant i tverretatlige beredskapsmøter",
        "Kommunikasjon sin deltaker i interne beredskapsmøter om Ukraina",
        "Kommunikasjon sin representant i krisestaben",
        "UDI-medlem i EUAA Communication Multipliers’ Network",
        "UDI-medlem i nordiske GDISC Network",
      ],
    },
    {
      title: "Prosjektleder og Kommunikasjonsrådgiver",
      company: "Godt Sagt Kommunikasjon AS",
      duration: "2013 - 2022",
      details: [
        "Prosjektleder",
        "Kommunikasjonsrådgiver",
        "Medierådgiver",
        "Leder av Godt Sagt kriseteam",
        "Styrerepresentant for de ansatte",
      ],
    },
    {
      title: "Informasjonssjef",
      company: "Havyard Group AS",
      duration: "2011 - 2013",
      details: [
        "Merkevarebygging og profilering",
        "Intern og ekstern kommunikasjon",
        "Mediehåndtering",
        "Ansvarlig for nettside og Facebook",
      ],
    },
  ];

  return (
    <section id="arbeidserfaring" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Arbeidserfaring</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-900"></span>
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-gray-500">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
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
