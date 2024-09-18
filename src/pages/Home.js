import React from 'react';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <header className="hero-section">
        <div className="overlay">
          <h1 className='homeh1'><span className='underline'>SkovlundeByg</span> <br /> Din lokale partner til alt inden for tømrer- og malerarbejde.</h1>
          <p className='homep'>
            Med base i Skovlunde har vi hjulpet lokale kunder med deres byggeprojekter. Vi specialiserer os i alt fra tømrerarbejde til maleropgaver og leverer resultater af højeste kvalitet.
          </p>
          <a href="/kontakt" className="cta-button" aria-label="Contact us for a quote">
            Kontakt os i dag for et uforpligtende tilbud!
          </a>
        </div>
      </header>

      <section className="introcontent">
        <h2 className='homeh2'>Håndværk med Kvalitet og Personlig Service</h2>
        <p className='homep'>Vi leverer håndværk med fokus på detaljer og kundetilfredshed i Skovlunde og omegn.</p>
      </section>
      
      <section className="imgcontent">
        <img src="/anders2.jpg" alt="Tømrerarbejde eksempel fra SkovlundeByg" />
        <img src="/anders3.jpg" alt="Malerservice eksempel fra SkovlundeByg" />
      </section>

      <section className="servicecontent">
        <h2 className='homeh2'>Tømrer- & Malerservice i Skovlunde</h2>
        <h3 className='homeh3'>Vi tilbyder en bred vifte af tømrer- og malerydelser...</h3>

        <article>
          <h4 className='homeh4'>Tømrerarbejde</h4>
          <p className='homep'>
            Fra nye terrasser til indvendige gulve og køkkeninstallationer, vores arbejde er præget af omhu og kvalitetsmaterialer.
          </p>
        </article>

        <article>
          <h4 className='homeh4'>Malerarbejde</h4>
          <p className='homep'>
            Vi hjælper med alt fra maling af vægge til udvendige facader, så dit hjem kan få det friske look, det fortjener.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
