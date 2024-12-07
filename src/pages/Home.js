import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import "../styles/Home.css";
import CardWheel from "../components/CardWheel";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';  

const Home = () => {
  const [products, setProducts] = useState([]);
  const [spotProduct, setSpotProduct] = useState(null); // State for the "spot" product
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (spotProduct) {
      addToCart(spotProduct);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResult, spotResult] = await Promise.all([
          supabase.from("pokemonshop").select("*"),
          supabase.from("pokemonshop").select("*").eq("type", "spot").single(),
        ]);
  
        if (productsResult.error) throw productsResult.error;
        if (spotResult.error) throw spotResult.error;
  
        setProducts(productsResult.data);
        setSpotProduct(spotResult.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="homediv">
      <div className="homenyheder">
        <div className="nyhedertext">
          <h1>Populære Nyheder</h1>
          <p>
            En elektrisk bølge er på vej med
            <strong> Scarlet and Violet Surging Sparks</strong>, oplev også den nye
            <strong> Pokémon julekalender</strong>.
          </p>
        </div>
        <div className="nyhederimagediv">
          <img src="nyhed1.png" alt="nyhed1" />
          <img src="nyhed2.png" alt="nyhed2" />
        </div>
      </div>

      <div className="homeanbefalet">
        <div className="anbefalettext">
          <h2>Pokémon Shops mest anbefalede køb</h2>
          <p>
            Find et bredt udvalg af <strong> populære Pokémon produkter</strong> hos Pokémon Shop, så du kan udvikle din samling.
          </p>
        </div>

        <div className="cardwheel">
          <CardWheel products={products} />
        </div>
      </div>

      {spotProduct && (
  <div className="spotproductdiv">
   
    <div className="spotproduct">
      <Link to={`/shop/${spotProduct.id}`}> 
      <div className="spotproductimage">
        <img src={spotProduct.image_url} alt={spotProduct.cardname} />
      </div>
      </Link>
      <div className="spotproducttext">
        <h2>{spotProduct.cardname}</h2>
        <p><strong>Forudbestil: 22/11/24</strong></p>
        <p className="spotkortp">{spotProduct.kortbeskrivelse}</p>
        <p className="spotproductprice">{`${spotProduct.price.toFixed(2)} kr.`}</p>
        <button
          className="add-to-bag-btn-spotproduct"
          onClick={handleAddToCart}
          disabled={spotProduct.lager <= 0}
        >
          Tilføj til kurv
        </button>
      </div>
    </div>
    
  </div>
)}


      <div className="homectadiv">
        <div className="homecta">
          <img src="maskot.svg" alt="cta1" />
          <div className="homectatext">
            <h2>Hold dig opdateret med Pokémon Shop</h2>
            <p>
              Følg med i pack openings, ugens bedste pull og meget mere direkte på TikTok! Bliv en del af et samle-glad fællesskab af Pokémon-enthusiaster! Eller besøg Pokémon Shops fysiske butik på adressen:
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jernbane+Allé+77,+st.+tv,+2720+Vanløse"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                <strong> Jernbane Allé 77, st. tv, 2720 Vanløse</strong>
              </a>
            </p>
            <a
              className="tiktokbtn"
              href="https://www.tiktok.com/@pokemonshopdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Besøg TikTok
              <img src="tiktoklogo.svg" alt="TikTok Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
