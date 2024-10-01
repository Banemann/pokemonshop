import React from 'react';
import './Omos.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 55.7308,
  lng: 12.4066, 
};

function Omos() {
  return (
    <div className="omos-page">
      <h1 className='omosh1'>Vi Bringer Dit Byggeprojekt til Livs</h1>
      <p className='omosp'>SkovlundeByg er en lokal tømrer- og malervirksomhed med fokus på kvalitet og kundetilfredshed. Selvom vi ikke har en formel uddannelse i faget, har vi over 15 års erfaring med at levere solide løsninger til både private og erhvervskunder. 
        Vi tror på, at ægte håndværk kommer fra passion og erfaring, og det er netop det, vi bringer med til hvert projekt. 
        Fra mindre reparationer til større ombygninger, er vi dedikerede til at levere professionelle resultater til konkurrencedygtige priser.</p>

        <h2 className='omosh2'>Vision</h2>
        <p>Vores vision er at blive det foretrukne valg i Skovlunde, når det kommer til tømrer- og malerarbejde. Vi stræber efter at skabe langvarige relationer med vores kunder gennem godt håndværk og personlig service.</p>

        BILLEDE AF ANDERS HER?

        <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyCMP4bFc7f3vvbXOwg1osq0e992TtzQTC4">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>

    </div>
  );
}

export default Omos;
