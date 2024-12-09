import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import "../styles/Nyheder.css";

const Nyheder = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase.from("pokemonshop").select("*");

        if (error) throw error;

        setNews(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="nyheder-page">
      <h1>Nyheder</h1>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h2>{item.cardname}</h2>
            <p>{item.kortbeskrivelse}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nyheder;