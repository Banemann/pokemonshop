import React from 'react';
import './Kontakt.css';

function Kontakt() {
  return (
    <div className="contact-page">
      <h1 className='kontakth1'>Kontakt SkovlundeByg</h1>
      <h2 className='kontakth2'>
        Har du spørgsmål eller brug for et tilbud? Vi er klar til at hjælpe dig med dit næste byggeprojekt. 
        Du kan kontakte os via telefon, e-mail eller ved at udfylde formularen nedenfor.
      </h2>
      <address className='kontaktaddress'>
        <p className='kontaktp'>
          <span>Telefon: </span>
          <a className='kontakta' href="tel:+4512345678">+45 1234 5678</a>
        </p>
        <p className='kontaktp'>
          <span>E-mail: </span>
          <a className='kontakta' href="mailto:kontakt@skovlundebyg.dk">kontakt@skovlundebyg.dk</a>
        </p>
        <p className='kontaktp'>
          <span>Adresse: Skovlunde, Danmark</span>
        </p>
        <p className='kontaktp'>
          <span>Åbningstider: Man-Fre: 08.00-16.00</span>
        </p>
      </address>
    </div>
  );
}

export default Kontakt;
