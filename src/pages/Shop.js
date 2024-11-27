import React from 'react';
import './Shop.css';

function Shop() {
  return (
    <div className="shop-page">
      <div>
      <h1 className='Shoph1'>Shop SkovlundeByg</h1>
      <h2 className='Shoph2'>
        Har du spørgsmål eller brug for et tilbud? Vi er klar til at hjælpe dig med dit næste byggeprojekt. 
        Du kan Shope os via telefon, e-mail eller ved at udfylde formularen nedenfor.
      </h2>
      <address className='Shopaddress'>
        <p className='Shopp'>
          <span>Telefon: </span>
          <a className='Shopa' href="tel:+4512345678">(+45) 29 70 91 94</a>
        </p>
        <p className='Shopp'>
          <span>E-mail: </span>
          <a className='Shopa' href="mailto:Shop@skovlundebyg.dk">Shop@skovlundebyg.dk</a>
        </p>
        <p className='Shopp'>
          <span>Adresse: Skovlunde, Danmark</span>
        </p>
        <p className='Shopp'>
          <span>Åbningstider: Man-Fre: 08.00-16.00</span>
        </p>
      </address>

      </div>
    </div>
  );
}

export default Shop;
