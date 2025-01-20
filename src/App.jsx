import React, { useEffect } from "react";
import Timeline from "./components/Timeline";
import Volunteer from "./components/Volunteer";
import EducationCard from "./components/Education";
import Diploma from "./components/Diploma";
import Navbar from "./components/Navbar";
import PortfolioHeader from "./components/Header";
import ContactMe from "./components/Contact";
import QuotesSection from "./components/Quotes";

const App = () => {
  useEffect(() => {
    const handleAnchorLink = (event) => {
      if (event.target.tagName === "A" && event.target.hash) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = event.target.hash;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Attach the event listener to handle smooth scroll
    document.querySelector("nav").addEventListener("click", handleAnchorLink);

    return () => {
      document
        .querySelector("nav")
        .removeEventListener("click", handleAnchorLink);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <PortfolioHeader />
      <div className="px-4 py-10">
        <section id="attest-sitater">
          <QuotesSection />
        </section>

        {/* Sections */}
        <section id="arbeidserfaring">
          <Timeline />
        </section>

        <section id="frivillig-arbeid">
          <Volunteer />
        </section>

        <section id="utdanning">
          <EducationCard />
        </section>

        <section id="kursbevis">
          <Diploma />
        </section>
        <footer id="kontakt">
          <ContactMe />
        </footer>
      </div>
    </div>
  );
};

export default App;
