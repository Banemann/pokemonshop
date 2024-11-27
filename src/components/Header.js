import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img src="https://picsum.photos/200" alt="SkovlundeByg logo" className="header-logo" />
          </Link>
          <h1 className="header-title">SkovlundeByg</h1>
        </div>

        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/omos">Om os</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
