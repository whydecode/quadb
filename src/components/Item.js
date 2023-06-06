import React from "react";
import "../styles.css";
const Item = ({ show, onSelect }) => {
  return (
    <div className="item">
      <h3>{show.name}</h3>
      <p>Language: {show.language}</p>
      <img src={show.image.medium} alt={show.name} />
      <button onClick={() => onSelect(show)} className="detailsButton">
        View Details
      </button>
    </div>
  );
};

export default Item;
