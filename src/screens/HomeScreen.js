import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import "../styles.css";
const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data.map((entry) => entry.show)));
  }, []);

  const handleSelectShow = (show) => {
    navigate(`/shows/${show.id}`);
  };

  return (
    <div className="home">
      <h1>TV Shows</h1>

      <List shows={shows} onSelectShow={handleSelectShow} />
    </div>
  );
};

export default HomeScreen;
