import { useEffect, useState } from "react";
import FlightRow from "./components/FlightRow";

export default function App() {
  const [flights, setFlights] = useState(null);

  async function getFligths() {
    const response = await fetch("http://localhost:3000/flights");
    const data = await response.json();
    console.log(data);
    setFlights(data);
  }

  useEffect(() => {
    getFligths();
  }, []);

  return (
    <div className="App">
      <table className="flights-table">
        <tr className="flights-table-row flights-table-head">
          <td>Airline</td>
          <td>Airline</td>
          <td>Airline</td>
          <td>Airline</td>
          <td>Airline</td>
          <td>Airline</td>
        </tr>
        {flights
          ? flights.map((flight) => (
              <FlightRow key={flight._id} flight={flight} />
            ))
          : "Loading..."}
      </table>
    </div>
  );
}
