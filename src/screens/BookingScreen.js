import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";

const BookingScreen = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [selectedDay, setSelectedDay] = useState("");
  const [show, setShow] = useState(null);
  const [ticketBooked, setTicketBooked] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    localStorage.setItem("email", newEmail);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.removeItem("name");
    localStorage.removeItem("email");

    setName("");
    setEmail("");
    setTicketBooked(true);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-container">
      <h2>Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="showName">Show: </label>
          <input
            type="text"
            id="showName"
            value={show.name}
            required
            disabled
          />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            id="time"
            value={show.schedule.time}
            required
            disabled
          />
        </div>
        <div>
          <label htmlFor="day">Day: </label>
          <select
            id="day"
            value={selectedDay}
            onChange={handleDayChange}
            required
          >
            <option value="">Select a day</option>
            {show.schedule.days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>

      {ticketBooked && (
        <div className="alert">Thank you for booking the ticket!</div>
      )}
    </div>
  );
};

export default BookingScreen;
