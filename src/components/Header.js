import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">SkovlundeByg</h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">Home(logo)</Link>
            </li>
            <li>
              <Link to="/omos">Om os</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
