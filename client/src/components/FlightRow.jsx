import React from "react";
import "./FlightRow.css";
import moment from "moment";

export default function FlightRow({ flight }) {
  return (
    <tr className="flights-table-row">
      <td>{flight.airline}</td>
      <td>{flight.airport}</td>
      <td>{flight.destination}</td>
      <td>{moment(new Date(flight.departure)).format("D MMM YYYY - HH:mm")}</td>
      <td>{moment(new Date(flight.arrival)).format("D MMM YYYY - HH:mm")}</td>
      <td>{flight.price} SEK</td>
    </tr>
  );
}
