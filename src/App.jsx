import React from "react";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Per-Jan Brekke</h1>
        <h2>Teamleder presse- og samfunn i Utlendingsdirektoratet (UDI)</h2>
        <p>+47 92664526</p>
        <p>
          <a
            href="https://www.linkedin.com/in/perjan/details/organizations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn: https://www.linkedin.com/in/perjan/details/organizations/
          </a>
        </p>
      </header>

      {/* Kjernekompetanse Section */}
      <section id="kjernekompetanse">
        <h2>Kjernekompetanse</h2>
        <p>
          Ledelse, kommunikasjon eksternt og internt, mediehåndtering,
          omdømmebygging
        </p>
      </section>

      {/* Arbeidserfaring Section */}
      <div>
        <Timeline />
      </div>

      {/* Utdanning Section */}
      <section id="utdanning">
        <h2>Utdanning</h2>
        <div>
          <h3>
            1984-1985: Bachelor kommunal planlegging og offentlig administrasjon
          </h3>
          <p>Møre og Romsdal Distriktshøgskule</p>
        </div>
      </section>

      {/* Frivillig Arbeid Section */}
      <section id="frivillig-arbeid">
        <h2>Frivillig arbeid</h2>
        <div>
          <h3>2020:</h3>
          <p>Pressesjef NM på ski</p>
        </div>
        <div>
          <h3>2017 - Nå:</h3>
          <p>Pressesjef for World Cup Drammen</p>
        </div>
      </section>
    </div>
  );
}

export default App;
