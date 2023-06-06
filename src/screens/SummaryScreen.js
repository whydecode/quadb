import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";
const SummaryScreen = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // console.log(show);
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const summary = data.summary.replace(/<[^>]+>/g, "");

        setShow({ ...data, summary });
      });
  }, [id, show]);

  const navigate = useNavigate();
  const handleBookTicket = () => {
    navigate(`/booking/${id}`);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-container">
      <h1>{show.name}</h1>
      <div className="show-details">
        <div className="show-details-column">
          <img
            src={show.image?.medium}
            alt={show.name}
            className="show-details-image"
          />
        </div>
        <div className="show-details-column">
          <p>
            <strong>Show Time:</strong> {show.schedule.time}
          </p>
          <p>
            <strong>Show Day:</strong> {show.schedule.days.join(", ")}
          </p>
          <p>
            <strong>Language:</strong> {show.language}
          </p>
          <p>
            <strong>Genres:</strong> {show.genres.join(", ")}
          </p>
          <p>
            <strong>Runtime:</strong> {show.runtime} minutes
          </p>
          <p>
            <strong>Summary:</strong> {show.summary}
          </p>
          <button onClick={handleBookTicket} className="detailsButton">
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;
