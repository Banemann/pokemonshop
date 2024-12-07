import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";
import "../styles/Header.css";

const Header = () => {
  const { totalQuantity } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  useEffect(() => {
    if (totalQuantity > 0) {
      triggerShake();
    }
  }, [totalQuantity]);

  const isHomePage = location.pathname === "/";

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchQuery}`);
  };

  return (
    <>
      <header className={isHomePage ? "header-home" : "header"}>
      {isHomePage && (
    <div className="header-blur-overlay"></div>
  )}
        <div className="header-container">
          <Link to="/" className="logo">
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <button type="submit" className="search-button">
              <img src="/searchicon.png" alt="Search" />
            </button>
            <input
              type="text"
              placeholder="Søg efter Pokémon kort.."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
          <div className="header-icons">
  <div className="login-icon">
    <img 
      src={isHomePage ? "/login.svg" : "/loginblack.svg"} 
      alt="Login" 
    />
  </div>

  <div
    className={`cart-icon ${isShaking ? "shake" : ""}`}
    onClick={toggleSidebar}
  >
    <img 
      src={isHomePage ? "/kurv.svg" : "/kurvblack.svg"} 
      alt="Cart" 
    />
    <span className="cart-badge">{totalQuantity}</span>
  </div>
</div>

        </div>
        <nav>
          <Link to="/shop">Pokémon serier</Link>
          <Link to="/shop">Gradede kort</Link>
          <Link to="/shop">Tilbehør</Link>
          <Link to="/shop">Figurer & bamser</Link>
          <Link to="/omos">Om os</Link>
          <Link to="/">Nyheder</Link>
        </nav>
        <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </header>
      {isHomePage && (
        <div className="hero-image-div">
          <img
            src="heroimg.webp"
            alt="hero-header-image"
            className="hero-header-image"
          />
          <div className="hero-info-div">
            <div className="hero-info">
              <img className="hero-info-icon" alt="" src="fragtikon.png" />
              <div className="hero-info-p">
                <p> <strong>Gratis fragt</strong> </p>
                <p>Når du bestiller for 499 kr.</p>
              </div>
            </div>
            <div className="hero-info">
              <img className="hero-info-icon" alt="" src="leveringikon.png" />
              <div className="hero-info-p">
                <p> <strong>Hurtig levering</strong> </p>
                <p>Levering 1-3 hverdage</p>
              </div>
            </div>
            <div className="hero-info">
              <img className="hero-info-icon" alt="" src="stjerneikon.png" />
              <div className="hero-info-p">
                <p> <strong>4,0 stjerner</strong> </p>
                <p>Baseret på +672 anmeldelser </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;