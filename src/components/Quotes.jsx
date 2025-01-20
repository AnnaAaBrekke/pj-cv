import React from "react";

const QuotesSection = () => {
  const quotes = [
    {
      text: "Per-Jan is an exceptional leader, and his guidance has been invaluable.",
      author: "Martha Sandstrom, Colleague",
    },
    {
      text: "His strategic thinking and communication skills make him an invaluable asset to any team.",
      author: "Sindre Oeverland, Manager",
    },
    {
      text: "Per-Jan's ability to handle high-pressure situations and maintain a positive outlook is inspiring.",
      author: "Kari Nilsen, Senior Leader",
    },
    {
      text: "One of the best communicators I've ever worked with, always clear, concise, and effective.",
      author: "Hanne Johansen, Teammate",
    },
  ];

  return (
    <section id="quotes" className="bg-gray-800 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">
          Hva tidligere arbeidsplasser sier
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-yellow-500 hover:text-gray-900"
            >
              <p className="text-lg mb-4">{`"${quote.text}"`}</p>
              <p className="font-semibold">{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
