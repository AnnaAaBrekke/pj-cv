import React from "react";

const QuotesSection = () => {
  const quotes = [
    {
      text: "Per-Jan er en erfaren, utadvendt, ærlig, tydelig og kunnskapsrik person som sprer god stemning rundt seg.",
      author: "BDO/Godt Sagt",
    },
    {
      text: "…avdelingen er en av de som har hatt best resultat på tilfredshet i medarbeiderundersøkelser. Brekke har i redaktørkollegiet vært med på å utvikle den overordnede redaksjonell strategien. I kollegiet har han vært viktig både som en viktig bidragsyter faglig og overordnet, men også som en kreativ og humørfylt leder.",
      author: "Drammens Tidende",
    },
    {
      text: "..informasjonssjef med ansvar omdømme- og merkevarebygging, utvikling av generell markedskommunikasjon og merkevarebygging. Han har utført sin oppgaver på en utmerket måte.",
      author: "Havyard Group AS",
    },
    {
      text: "Han er initiativrik og har stor arbeidskapasitet.",
      author: "Avisa Møre",
    },
  ];

  return (
    <section
      id="quotes"
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 rounded-sm"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Hva tidligere arbeidsgivere sier
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-yellow-500 hover:text-gray-900 flex flex-col items-center justify-between"
            >
              <div className="mb-6">
                <span className="text-yellow-500 text-4xl font-serif leading-none">
                  “
                </span>
                <p className="text-lg italic mt-4">{quote.text}</p>
              </div>
              <p className="font-semibold text-sm mt-4 text-gray-300">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
