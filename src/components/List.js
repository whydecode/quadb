import React from "react";
import Item from "./Item";
import "../styles.css";
const List = ({ shows, onSelectShow }) => {
  return (
    <div className="showList">
      {shows.map((show) => (
        <Item key={show.id} show={show} onSelect={onSelectShow} />
      ))}
    </div>
  );
};

export default List;
