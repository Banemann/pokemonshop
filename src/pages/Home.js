import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="overlay">
          <h1>Tømrer- & Malerservice i Skovlunde - Håndværk med Kvalitet og Personlig Service</h1>
          <h2>Vi er SkovlundeByg - Din lokale partner til alt inden for tømrer- og malerarbejde. Vi tilbyder skræddersyede løsninger med et personligt præg og mange års erfaring.</h2>
          <p>Med base i Skovlunde har vi hos SkovlundeByg hjulpet lokale kunder med deres bygge- og renoveringsprojekter. Vi specialiserer os i alt fra tømrerarbejde til maleropgaver og leverer altid resultater af højeste kvalitet. 
            Uanset om du har brug for hjælp til renovering af dit hjem, nybyggeri eller blot en frisk omgang maling, er vi her for at gøre dine visioner til virkelighed.</p>
          <a href="/kontakt" className="cta-button">
          Kontakt os i dag for et uforpligtende tilbud!
          </a>
        </div>
      </header>

      <section className="imgcontent">
        Billeder af tømrer- og malerarbejde
      </section>

      <section className="textcontent">
        <h2>Services</h2>
        <h3>Vi tilbyder en bred vifte af tømrer- og malerydelser, så du kan få hjælp til alle dine byggeprojekter - store som små. Vi tilpasser vores arbejde efter dine behov og sørger for, at du får den bedste løsning.</h3>

        <h4>Tømrerarbejde</h4>
        <p>Fra opførelse af nye terrasser til indvendige gulve og køkkeninstallationer, kan vi tage hånd om dine tømrerbehov. Vores arbejde er præget af omhu, detaljefokus og kvalitetsmaterialer.</p>
        
        <h4>Malerarbejde</h4>
        <p>Trænger dine vægge til en ny farve? Vi hjælper med alt fra maling af vægge til udvendige facader, så dit hjem kan få det friske look, det fortjener</p>
        
      </section>
    </div>
  );
}

export default Home;
