import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="overlay">
          <h1 className='homeh1'>Vi er SkovlundeByg <br></br> Din lokale partner til alt inden for tømrer- og malerarbejde.</h1>
          <h2 className='homeh2'>Håndværk med Kvalitet og Personlig Service</h2>
          
          <p className='homep'>
            Med base i Skovlunde har vi hjulpet lokale kunder med deres byggeprojekter. <br></br> Vi specialiserer os i alt fra tømrerarbejde til maleropgaver og leverer resultater af højeste kvalitet.
          </p>
          <a href="/kontakt" className="cta-button" aria-label="Contact us for a quote">
            Kontakt os i dag for et uforpligtende tilbud!
          </a>
        </div>
      </header>

      

      <section className="textcontent">
        <h2 className='homeh2'>Tømrer- & Malerservice i Skovlunde</h2>
        <h3 className='homeh3'>Vi tilbyder en bred vifte af tømrer- og malerydelser...</h3>

        <h4 className='homeh4'>Tømrerarbejde</h4>
        <p className='homep'>
          Fra nye terrasser til indvendige gulve og køkkeninstallationer, vores arbejde er præget af omhu og kvalitetsmaterialer.
        </p>
        
        <h4 className='homeh4'>Malerarbejde</h4>
        <p className='homep'>
          Vi hjælper med alt fra maling af vægge til udvendige facader, så dit hjem kan få det friske look, det fortjener.
        </p>
      </section>
      
      <section className="imgcontent">
      <img src="/anders2.jpg" alt="Example" />
      <img src="/anders3.jpg" alt="Example" />
      </section>
    </div>
  );
}

export default Home;
