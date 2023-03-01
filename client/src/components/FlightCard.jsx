import React from "react";
import "./FlightCard.css";

export default function FlightCard({ flight, isTitle }) {
  const className = isTitle ? "flight-cards-title" : "flights-cards";
  return (
    <div className={className}>
      <div className="airline">{flight.airline}</div>
      <div className="airport">{flight.airport}</div>
      <div className="destination">{flight.destination}</div>
      <div className="departure">{flight.departure}</div>
      <div className="arrival">{flight.arrival}</div>
      <div className="price">{flight.price}</div>
    </div>
  );
}
