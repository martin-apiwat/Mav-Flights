import React from "react";
import "./FlightRow.css";

export default function FlightRow({ flight }) {
  return (
    <tr className="flights-table-row">
      <td>{flight.airline}</td>
      <td>{flight.airport}</td>
      <td>{flight.destination}</td>
      <td>{flight.departure}</td>
      <td>{flight.arrival}</td>
      <td>{flight.price} SEK</td>
    </tr>
  );
}
